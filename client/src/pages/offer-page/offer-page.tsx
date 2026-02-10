import { useParams } from "react-router-dom";
import { Logo } from "../../components/Logo/logo";
import { ReviewForm } from "../../components/review-form/review-form";
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { Map } from '../../components/map/map';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import type { FullOffer, OffersList } from "../../types/offer";
import type { Review } from "../../types/review";
import { NotFoundPage } from "../not-found-page/not-found-page";
import { useState } from "react";
import { getNearbyOffers, buildOffersList } from "../../utils/nearby";
import { useLocalReviews } from "../../hooks/useLocalReviews";

type OfferProps = {
  offers: FullOffer[];
  reviews: Review[];
  favoritesCount: number;
}

function OfferPage({ offers, reviews, favoritesCount }: OfferProps) {
    const params = useParams();
    const [hoveredOfferId, setHoveredOfferId] = useState<string>('');
    const { localReviews, addReview } = useLocalReviews(reviews);
    const mainOffer = offers.find((o) => o.id === params.id);

    if (!mainOffer) {
      return <NotFoundPage/>
    }

    const nearbyOffers = getNearbyOffers(offers, mainOffer);
    const nearbyOffersList: OffersList[] = buildOffersList(nearbyOffers);

    const displayType = (type: string) => type === 'room' ? 'Private room' : type[0].toUpperCase() + type.slice(1);

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
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">{ favoritesCount }</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/login">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {mainOffer.images.map((img, idx) => (
                <div className="offer__image-wrapper" key={idx}>
                  <img className="offer__image" src={`${img}`} alt={`Photo ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {mainOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {mainOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="/img/sprite.svg#icon-bookmark" style={mainOffer.isFavorite ? {stroke: '#4481c3', fill: '#4481c3'} : {}}></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${(mainOffer.rating / 5) * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{mainOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {displayType(mainOffer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {mainOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {mainOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{mainOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {mainOffer.goods.map((g) => (
                    <li className="offer__inside-item" key={g}>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${mainOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={mainOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {mainOffer.host.name}
                  </span>
                  {mainOffer.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {mainOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList reviews={localReviews} />
                <ReviewForm onAddReview={addReview} />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={mainOffer.city} offers={nearbyOffers} hoveredOfferId={hoveredOfferId} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CitiesCardList
                offersList={nearbyOffersList}
                onHover={setHoveredOfferId}
                containerClass="near-places__list places__list"
                cardRootClass="near-places__card place-card"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
    );
}

export { OfferPage }