import { RegistrationFormComponent } from '@guitar-shop/front/components';

export const RegistrationPage = () => {
  return (
    <main className="page-content">
      <div className="container">
        <section className="login">
          <h1 className="login__title">Регистрация</h1>
          <RegistrationFormComponent />
        </section>
      </div>
    </main>
  );
};
