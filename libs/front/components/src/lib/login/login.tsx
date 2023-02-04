import { EAppRoute } from "@guitar-shop/front/enums";
import { TUser } from "@guitar-shop/front/types";
import { validateEmail, validatePassword } from "@guitar-shop/front/utils";
import { FormEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";

type LoginComponentProps = {
  handleLoginSubmit: (authData: Pick<TUser, 'email' | 'password'>) => void
}

export const LoginComponent = ({handleLoginSubmit}: LoginComponentProps) => {
  const [loginData, setLoginData] = useState({email: '', password: ''});
  const [isLoginDataValid, setIsLoginDataValid] = useState(false)

  const onEmailInput = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault()
    setLoginData({...loginData, email: evt.currentTarget.value})
  }

  const onPasswordInput = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault()
    setLoginData({...loginData, password: evt.currentTarget.value})
  }

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleLoginSubmit(loginData);
  }

  useEffect(() => {
    if (validateEmail(loginData.email) && validatePassword(loginData.password) && !isLoginDataValid) {
      setIsLoginDataValid(true)
    }

  }, [isLoginDataValid, loginData.email, loginData.password])


  return (
    <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Войти</h1>
            <p className="login__text">Hовый пользователь? <Link className="login__link" to={EAppRoute.Register}>Зарегистрируйтесь</Link> прямо сейчас</p>
            <form method="post" onSubmit={onSubmit}>
              <div className="input-login">
                <label htmlFor="email">Введите e-mail</label>
                <input onInput={onEmailInput} type="email" id="email" name="email" autoComplete="off" required></input>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="passwordLogin">Введите пароль</label><span>
                  <input onInput={onPasswordInput} type="password" placeholder="• • • • • • • • • • • •" id="passwordLogin" name="password" autoComplete="off" required minLength={5} maxLength={12}></input>
                  <button className="input-login__button-eye" type="button" disabled={!isLoginDataValid}>
                    <svg width="14" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-eye"></use>
                    </svg>
                  </button></span>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <button className="button login__button button--medium" type="submit">Войти</button>
            </form>
          </section>
        </div>
      </main>
  )
}
