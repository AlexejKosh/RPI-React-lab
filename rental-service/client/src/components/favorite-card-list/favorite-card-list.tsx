import { FullOffer } from '../../types/offer';
import { FavoriteCard } from '../favorite-card/favorite-card';

type FavoriteCardListProps = {
  favorites: FullOffer[];
};

function FavoriteCardList({ favorites }: FavoriteCardListProps) {
  const grouped: Record<string, FullOffer[]> = {};
  favorites.forEach((f) => {
    const name = f.city.name;
    if (!grouped[name]) {
      grouped[name] = [];
    }
    grouped[name].push(f);
  });

  return (
    <ul className="favorites__list">
      {Object.entries(grouped).map(([city, offers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((o) => (
              <FavoriteCard key={o.id} offer={o} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export { FavoriteCardList };
