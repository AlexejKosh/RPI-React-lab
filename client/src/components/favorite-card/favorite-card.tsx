import { Link } from 'react-router-dom';
import type { OffersList } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/selectors';
import { AuthorizationStatus } from '../../const';
import { toggleFavoriteAction } from '../../store/api-action';

type FavoriteCardProps = {
  offer: OffersList;
};

function displayType(type: string) {
  return type === 'room' ? 'Private room' : type[0].toUpperCase() + type.slice(1);
}

function FavoriteCard({ offer }: FavoriteCardProps) {
  const imgSrc = offer.previewImage;
  const dispatch = useAppDispatch();

  return (
    <article className="favorites__card place-card">
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={imgSrc} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth && (
            <button
              className="place-card__bookmark-button button"
              type="button"
              onClick={() => dispatch(toggleFavoriteAction({ offerId: offer.id, status: offer.isFavorite ? 0 : 1 }))}
              >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use href="/img/sprite.svg#icon-bookmark" style={offer.isFavorite ? {stroke: '#4481c3', fill: '#4481c3'} : {}}></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          )}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{displayType(offer.type)}</p>
      </div>
    </article>
  );
}

export { FavoriteCard };
