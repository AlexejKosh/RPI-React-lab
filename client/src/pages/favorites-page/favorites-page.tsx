import { Logo } from "../../components/Logo/logo";
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-action';
import type { FullOffer } from '../../types/offer';
import { FavoriteCardList } from '../../components/favorite-card-list/favorite-card-list';

type FavoritesPageProps = {
  favorites: FullOffer[];
  favoritesCount: number;
}

function FavoritesPage({ favorites, favoritesCount }: FavoritesPageProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  return(
        <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/favorites">
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{ backgroundImage: `url(${user?.avatarUrl ?? user?.avatar ?? '/img/avatar.svg'})` }}
                    >
                    </div>
                    <span className="header__user-name user__name">{ user?.username }</span>
                    <span className="header__favorite-count">{ favoritesCount }</span>
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
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteCardList favorites={favorites} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="Rent service logo" width="64" height="33" />
        </a>
      </footer>
    </div>
    );
}

export { FavoritesPage };