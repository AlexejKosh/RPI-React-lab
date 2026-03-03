import { useParams } from "react-router-dom";
import { Logo } from "../../components/Logo/logo";
import { ReviewForm } from "../../components/review-form/review-form";
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { Map } from '../../components/map/map';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { NotFoundPage } from "../not-found-page/not-found-page";
import { useState, useEffect } from "react";
import { LoadingPage } from '../../components/loading-page/loading-page';
import { getNearbyOffers, buildOffersList } from "../../utils/nearby";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOfferAction, fetchOfferReviewsAction, toggleFavoriteAction, postReviewAction } from '../../store/api-action';
import { getCurrentOffer, getOfferReviews } from '../../store/selectors';
import { getAuthorizationStatus } from '../../store/selectors';
import { logoutAction } from '../../store/api-action';
import { AuthorizationStatus } from '../../const';
import type { OffersList } from "../../types/offer";

function OfferPage() {
    const params = useParams();
    const id = params.id ?? '';
    const dispatch = useAppDispatch();
    const [hoveredOfferId, setHoveredOfferId] = useState<string>('');
    const offers = useAppSelector((state) => state.offers);
    const authorizationStatus = useAppSelector(getAuthorizationStatus);
    const user = useAppSelector((state) => state.user);
    const mainOffer = useAppSelector(getCurrentOffer);
    const reviews = useAppSelector(getOfferReviews);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      if (!id) return;
      setIsLoading(true);
      Promise.all([
        dispatch(fetchOfferAction(id)),
        dispatch(fetchOfferReviewsAction(id))
      ]).finally(() => setIsLoading(false));
    }, [id, dispatch]);

    const handleAddReview = (comment: string, rating: number) => {
      if (!id) return;
      dispatch(postReviewAction({ offerId: id, comment, rating }));
    };

    if (isLoading) {
      return <LoadingPage />;
    }

    if (!mainOffer) {
      return <NotFoundPage />
    }

    const nearbyOffers = getNearbyOffers(offers, mainOffer);
    const nearbyOffersList: OffersList[] = buildOffersList(nearbyOffers);

    const displayType = (type: string) => type[0].toUpperCase() + type.slice(1);

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
                        <span className="header__favorite-count">{ offers.filter((o) => o.isFavorite ).length }</span>
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

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {mainOffer.images.map((img: string, idx: number) => (
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
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <button
                    className="offer__bookmark-button button"
                    type="button"
                    onClick={() => dispatch(toggleFavoriteAction({ offerId: mainOffer.id, status: mainOffer.isFavorite ? 0 : 1 }))}
                  >
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="/img/sprite.svg#icon-bookmark" style={mainOffer.isFavorite ? {stroke: '#4481c3', fill: '#4481c3'} : {}}></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                )}
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
                  Max {mainOffer.guests} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{mainOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {mainOffer.goods.map((g: string) => (
                    <li className="offer__inside-item" key={g}>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${mainOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}
                    style={{ backgroundImage: mainOffer.host?.avatarUrl ? 'none' : undefined }}
                  >
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
                <ReviewsList reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <ReviewForm onAddReview={handleAddReview} />
                )}
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