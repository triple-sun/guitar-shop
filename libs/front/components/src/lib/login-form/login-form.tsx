import { useAppDispatch } from "@guitar-shop/front/hooks";
import { loginAction } from "@guitar-shop/front/store";
import { validateEmail, validatePassword } from "@guitar-shop/front/utils";
import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const LoginFormComponent = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const dispatch = useAppDispatch();

  const onEmailInput = (evt: FormEvent<HTMLInputElement>) => {evt.preventDefault(); setEmail(evt.currentTarget.value)}
  const onPasswordInput = (evt: FormEvent<HTMLInputElement>) => {evt.preventDefault(); setPassword(evt.currentTarget.value)}

  const onShowPasswordClick = (evt: MouseEvent<HTMLButtonElement>) => {evt.preventDefault(); setPasswordShown(!passwordShown);}

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    switch (true) {
      case !isEmailValid:
        toast.warn('Invalid email!')
        break;
      case !isPasswordValid:
        toast.warn('Password must be at least 5 but no more than 12 characters long!')
        break;
      default:
        dispatch(loginAction({email, password}))
        break;
    }
  }

   useEffect(() => {
    if (validateEmail(email) && !isEmailValid) {
      setIsEmailValid(true)
    }

    if (validatePassword(email) && !isEmailValid) {
      setIsPasswordValid(true)
    }
  }, [email, isEmailValid, setIsEmailValid, setIsPasswordValid])

  return (
    <form method="post" onSubmit={onFormSubmit}>
      <div className="input-login">
        <label htmlFor="email">Введите e-mail</label>
          <input onInput={onEmailInput} type="email" id="email" name="email" autoComplete="off" required></input>
            {email.length > 0 ? '' : <p className="input-login__error">Заполните поле</p>}
          </div>
          <div className="input-login">
          <label htmlFor="passwordLogin">Введите пароль</label>
          <span>
            <input onInput={onPasswordInput} type={passwordShown ? 'text' : 'password'} placeholder="• • • • • • • • • • • •" id="passwordLogin" name="password" autoComplete="off" required minLength={5} maxLength={12}></input>
            <button className="input-login__button-eye" type="button" onClick={onShowPasswordClick} disabled={password.length === 0}>
              <svg width="14" height="8" aria-hidden="true"><use xlinkHref="#icon-eye"></use></svg>
            </button>
          </span>
          {password.length > 0 ? '' : <p className="input-login__error">Заполните поле</p>}
        </div>
      <button className="button login__button button--medium" type="submit">Войти</button>
    </form>
  )
}
