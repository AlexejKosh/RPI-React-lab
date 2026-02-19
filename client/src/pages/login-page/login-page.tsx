import { Logo } from '../../components/Logo/logo';
import { Link, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import type { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-action';
import { AppRoute, AuthorizationStatus } from '../../const';
import type { AuthData } from '../../types/user-data';
import { getAuthorizationStatus } from '../../store/selectors';

function LoginPage() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const userAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  if (userAuthorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={ AppRoute.Main }/>;
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current && passwordRef.current) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={
            handleSubmit }>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={ loginRef } className="login__input form__input" type="email" name="email" id="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={ passwordRef } className="login__input form__input" type="password" name="password" id="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={ AppRoute.Main }>
              <span>Amsterdam</span> </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export { LoginPage };