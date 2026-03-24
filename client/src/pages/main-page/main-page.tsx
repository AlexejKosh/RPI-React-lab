import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";

import { Map } from '../../components/map/map';
import { Header } from '../../components/header/header';
import { useState } from 'react';
import { SortOffersType } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/selectors';
import { logoutAction } from '../../store/api-action';
import { AuthorizationStatus } from '../../const';
import { getOffersByCity, sortOffersByType } from '../../utils/utils';
import { CitiesList } from "../../components/cities-list/cities-list";
import type { SortOffer } from "../../types/sort";
import { SortOptions } from "../../components/sort-options/sort-options";

function MainPage({favoritesCount}: {favoritesCount: number}): React.JSX.Element {
    const [activeSort, setActiveSort] = useState<SortOffer>(() => (localStorage.getItem('activeSort') as SortOffer) ?? SortOffersType.Popular);
    const [hoveredOfferId, setHoveredOfferId] = useState<string>('');
    
    const dispatch = useAppDispatch();
    const authorizationStatus = useAppSelector(getAuthorizationStatus);
    const user = useAppSelector((state) => state.user);
    const selectedCity = useAppSelector((state) => state.city);
    const offersFromStore = useAppSelector((state) => state.offers);
    const selectedCityOffers = getOffersByCity(selectedCity?.name ?? '', offersFromStore);
    const sortedOffers = sortOffersByType(selectedCityOffers, activeSort);
    const rentalOffersCount = sortedOffers.length;

    const handleListItemHover = (offerId: string) => {
        if (!offerId) {
            setHoveredOfferId('');
            return;
        }
        setHoveredOfferId(offerId);
    };

    return(
        <div className="page page--gray page--main">
            <Header favoritesCount={favoritesCount} />

            <main className="page__main page__main--index">
                <h1 className="visually-hidden">Cities</h1>
                <div className="tabs">
                    <section className="locations container">
                        <CitiesList selectedCity={ selectedCity } />
                    </section>
                </div>
                <div className="cities">
                    <div className="cities__places-container container">
                        <section className="cities__places places">
                            <h2 className="visually-hidden">Places</h2>
                            <b className="places__found">{ rentalOffersCount } places to stay in { selectedCity?.name }</b>
                            <SortOptions activeSorting={ activeSort } onChange={ (newSorting) => { setActiveSort(newSorting); localStorage.setItem('activeSort', newSorting); } } />
                            <CitiesCardList offersList={ sortedOffers } onHover={ handleListItemHover } />
                        </section>
                        <div className="cities__right-section">
                            <Map city={selectedCity} offers={selectedCityOffers} hoveredOfferId={hoveredOfferId} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export { MainPage };