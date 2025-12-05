import React from 'react';
import { MainPage } from "../../pages/main-page/main-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { PrivateRoute } from '../private-route/private-route';
import { FullOffer, OffersList } from '../../types/offer';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

type AppMainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
    offers: FullOffer[];
}

function App({ rentalOffersCount, offersList, offers }: AppMainPageProps): React.JSX.Element {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPage rentalOffersCount={ rentalOffersCount } offersList={ offersList }/>}
                />
                <Route
                    path={AppRoute.Login}
                    element={<LoginPage/>}
                />
                <Route
                    path={AppRoute.Favorites}
                    element={
                        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                            <FavoritesPage favorites={offers.slice(0, 2)} />
                        </PrivateRoute>
                    }
                />
                <Route
                    path={AppRoute.Offer}
                    element={<OfferPage offers={ offers }/>}
                />
                <Route path={ `${AppRoute.Offer}/:id` } element={ <OfferPage offers={offers}/> }/>
                <Route
                    path={AppRoute.NotFound}
                    element={<NotFoundPage/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

