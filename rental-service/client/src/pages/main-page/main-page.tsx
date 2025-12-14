import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { OffersList } from '../../types/offer';
import { Map } from '../../components/map/map';
import { Logo } from '../../components/Logo/logo';
import { useState } from 'react';

type MainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
}

function MainPage({ rentalOffersCount, offersList } : MainPageProps): React.JSX.Element {
    const [isSortingOpen, setIsSortingOpen] = useState(false);
    const [hoveredOfferId, setHoveredOfferId] = useState<string>('');

    const handleSortingToggle = () => setIsSortingOpen((v) => !v);

    return(
        <div className="page page--gray page--main">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Logo />
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item user">
                                    <a className="header__nav-link header__nav-link--profile" href="#">
                                        <div className="header__avatar-wrapper user__avatar-wrapper">
                                        </div>
                                        <span className="header__user-name user__name">Myemail@gmail.com</span>
                                        <span className="header__favorite-count">3</span>
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a className="header__nav-link" href="#">
                                        <span className="header__signout">Sign out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--index">
                <h1 className="visually-hidden">Cities</h1>
                <div className="tabs">
                    <section className="locations container">
                        <ul className="locations__list tabs__list">
                            <li className="locations__item">
                                <a className="locations__item-link tabs__item" href="#">
                                    <span>Paris</span>
                                </a>
                            </li>
                            <li className="locations__item">
                                <a className="locations__item-link tabs__item" href="#">
                                    <span>Cologne</span>
                                </a>
                            </li>
                            <li className="locations__item">
                                <a className="locations__item-link tabs__item" href="#">
                                    <span>Brussels</span>
                                </a>
                            </li>
                            <li className="locations__item">
                                <a className="locations__item-link tabs__item tabs__item--active">
                                    <span>Amsterdam</span>
                                </a>
                            </li>
                            <li className="locations__item">
                                <a className="locations__item-link tabs__item" href="#">
                                    <span>Hamburg</span>
                                </a>
                            </li>
                            <li className="locations__item">
                                <a className="locations__item-link tabs__item" href="#">
                                    <span>Dusseldorf</span>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="cities">
                    <div className="cities__places-container container">
                        <section className="cities__places places">
                            <h2 className="visually-hidden">Places</h2>
                            <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>
                            <form className="places__sorting" action="#" method="get">
                                <span className="places__sorting-caption">Sort by </span>
                                <span
                                    className="places__sorting-type"
                                    tabIndex={0}
                                    onClick={handleSortingToggle}
                                    role="button"
                                    aria-expanded={isSortingOpen}
                                >
                                     Popular
                                    <svg className="places__sorting-arrow" width="7" height="4">
                                        <use href="#icon-arrow-select"></use>
                                    </svg>
                                </span>
                                <ul
                                    className={`places__options places__options--custom ${isSortingOpen ? 'places__options--opened' : ''}`}
                                    hidden={!isSortingOpen}
                                >
                                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                                    <li className="places__option" tabIndex={0}>Top rated first</li>
                                </ul>
                            </form>
                            <CitiesCardList offersList={offersList} onHover={setHoveredOfferId} />
                        </section>
                        <div className="cities__right-section">
                            <Map city={offersList[0]?.city} offers={offersList} hoveredOfferId={hoveredOfferId} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export { MainPage };