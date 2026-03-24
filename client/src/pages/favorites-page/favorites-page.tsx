import { Header } from "../../components/header/header";
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-action';
import type { OffersList } from '../../types/offer';
import { FavoriteCardList } from '../../components/favorite-card-list/favorite-card-list';

type FavoritesPageProps = {
  favorites: OffersList[];
  favoritesCount: number;
}

function FavoritesPage({ favorites, favoritesCount }: FavoritesPageProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  return(
        <div className="page">
      <Header favoritesCount={favoritesCount} />

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