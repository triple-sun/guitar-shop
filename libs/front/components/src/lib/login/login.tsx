import { TUser } from "@guitar-shop/front/types";
import { validateEmail, validatePassword } from "@guitar-shop/front/utils";
import { FormEvent, useState, useEffect } from "react";
import { toast } from "react-toastify";

type LoginComponentProps = {
  handleLoginSubmit: (authData: Pick<TUser, 'email' | 'password'>) => void
}

export const LoginFormComponent = ({handleLoginSubmit}: LoginComponentProps) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const onEmailInput = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault()
    setEmail(evt.currentTarget.value)
  }

  const onPasswordInput = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault()
    setPassword(evt.currentTarget.value)
  }

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    switch (true) {
      case !isEmailValid:
        toast.warn('Invalid email!')
        break;
      case !isPasswordValid:
        toast.warn('Invalid password!')
        break;
      case isEmailValid && isPasswordValid:
        handleLoginSubmit({email, password})
    }
  }

  useEffect(() => {
    if (validateEmail(email) && !isEmailValid) {
      setIsEmailValid(true)
    }

    if (validatePassword(password) && !isPasswordValid) {
      setIsPasswordValid(true)
    }

  }, [email, isEmailValid, isPasswordValid, password])

  return (
    <form method="post" onSubmit={onSubmit}>
      <div className="input-login">
        <label htmlFor="email">Введите e-mail</label>
          <input onInput={onEmailInput} type="email" id="email" name="email" autoComplete="off" required></input>
            {email.length > 0 ? '' : <p className="input-login__error">Заполните поле</p>}
          </div>
          <div className="input-login">
          <label htmlFor="passwordLogin">Введите пароль</label>
          <span>
            <input onInput={onPasswordInput} type={passwordShown ? 'text' : 'password'} placeholder="• • • • • • • • • • • •" id="passwordLogin" name="password" autoComplete="off" required minLength={5} maxLength={12}></input>
            <button className="input-login__button-eye" type="button" onClick={togglePasswordVisiblity} disabled={password.length === 0}>
              <svg width="14" height="8" aria-hidden="true"><use xlinkHref="#icon-eye"></use></svg>
            </button>
          </span>
          {password.length > 0 ? '' : <p className="input-login__error">Заполните поле</p>}
        </div>
      <button className="button login__button button--medium" type="submit">Войти</button>
    </form>
  )
}
