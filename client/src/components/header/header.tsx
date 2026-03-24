import React from 'react';
import { Logo } from '../Logo/logo';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/selectors';
import { logoutAction } from '../../store/api-action';
import { AuthorizationStatus } from '../../const';

type HeaderProps = {
  favoritesCount?: number;
}

function Header({ favoritesCount }: HeaderProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector((state) => state.user);
  const offers = useAppSelector((state) => state.offers);

  const favCount = typeof favoritesCount === 'number' ? favoritesCount : (offers?.filter((o) => o.isFavorite).length ?? 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <>
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="/favorites">
                      <div
                        className="header__avatar-wrapper user__avatar-wrapper"
                        style={{ backgroundImage: `url(${ user?.avatarUrl ?? '/img/avatar.svg' })` }}
                      >
                      </div>
                      <span className="header__user-name user__name">{ user?.username }</span>
                      <span className="header__favorite-count">{ favCount }</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href="/login"
                      onClick={() => dispatch(logoutAction())}
                    >
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
              ) : (
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/login">
                    <span className="header__signout">Sign in</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Header };
