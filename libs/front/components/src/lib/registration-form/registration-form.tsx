import { useAppDispatch } from "@guitar-shop/front/hooks";
import { registerAction } from "@guitar-shop/front/store";
import { validateEmail, validateName, validatePassword } from "@guitar-shop/front/utils";
import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const RegistrationFormComponent = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [isNameValid, setIsNameValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const dispatch = useAppDispatch();

  const onNameInput = (evt: FormEvent<HTMLInputElement>) => {evt.preventDefault(); setName(evt.currentTarget.value)}
  const onEmailInput = (evt: FormEvent<HTMLInputElement>) => {evt.preventDefault(); setEmail(evt.currentTarget.value)}
  const onPasswordInput = (evt: FormEvent<HTMLInputElement>) => {evt.preventDefault(); setPassword(evt.currentTarget.value)}

  const onShowPasswordClick = (evt: MouseEvent<HTMLButtonElement>) => {evt.preventDefault(); setPasswordShown(!passwordShown);}

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    switch (true) {
      case !isNameValid:
        toast.warn('Name must be at least 1 but no more than 15 characters long!')
        break;
      case !isEmailValid:
        toast.warn('Invalid email!')
        break;
      case !isPasswordValid:
        toast.warn('Password must be at least 5 but no more than 12 characters long!')
        break;
      default:
        dispatch(registerAction({name, email, password}))
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

    if(validateName(name) && !isNameValid) {
      setIsNameValid(true)
    }
  }, [email, isEmailValid, isNameValid, name, setIsEmailValid, setIsNameValid, setIsPasswordValid])


  return (
    <form method="post" action="/" onSubmit={onFormSubmit}>
      <div className="input-login">
        <label htmlFor="name">Введите имя</label>
        <input type="text" id="name" name="name" autoComplete="off" required onInput={onNameInput}></input>
         {name.length > 0 ? '' : <p className="input-login__error">Заполните поле</p>}
      </div>
      <div className="input-login">
        <label htmlFor="email">Введите e-mail</label>
        <input type="email" id="email" name="email" autoComplete="off" required onInput={onEmailInput}></input>
        {email.length > 0 ? '' : <p className="input-login__error">Заполните поле</p>}
      </div>
      <div className="input-login">
        <label htmlFor="password">Придумайте пароль</label><span>
        <input type={passwordShown ? 'text' : 'password'} placeholder="• • • • • • • • • • • •" id="password" name="password" autoComplete="off" required onInput={onPasswordInput}></input>
        <button className="input-login__button-eye" type="button" onClick={onShowPasswordClick} disabled={password.length === 0}>
          <svg width="14" height="8" aria-hidden="true">
            <use xlinkHref="#icon-eye"></use>
          </svg>
        </button></span>
        {password.length > 0? '' : <p className="input-login__error">Заполните поле</p>}
      </div>
      <button className="button login__button button--medium" type="submit">Зарегистрироваться</button>
    </form>
  )
}

