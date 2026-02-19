import React from 'react';
import { MainPage } from "../../pages/main-page/main-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { PrivateRoute } from '../private-route/private-route';
import type { FullOffer } from '../../types/offer';
import type { Review } from '../../types/review';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { LoadingPage } from '../loading-page/loading-page';
 
type AppMainPageProps = {
    offers: FullOffer[];
    reviews: Review[];
}

function App({ offers, reviews }: AppMainPageProps): React.JSX.Element {
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    const isQuestionsDataLoading = useAppSelector((state) => state.isOffersDataLoading);
    if (authorizationStatus === AuthorizationStatus.Unknown || isQuestionsDataLoading) {
        return (
            <LoadingPage />
        );
    }
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPage favoritesCount={ offers.filter((o) => o.isFavorite ).length }/>}
                />
                <Route
                    path={AppRoute.Login}
                    element={<LoginPage/>}
                />
                <Route
                    path={AppRoute.Favorites}
                    element={
                        <PrivateRoute authorizationStatus={authorizationStatus}>
                            <FavoritesPage favorites={offers.filter((o) => o.isFavorite )} favoritesCount={ offers.filter((o) => o.isFavorite ).length }/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path={AppRoute.Offer}
                    element={<OfferPage offers={ offers } reviews={ reviews } favoritesCount={ offers.filter((o) => o.isFavorite ).length } />}
                />
                <Route path={ `${AppRoute.Offer}/:id` } element={ <OfferPage offers={offers} reviews={ reviews } favoritesCount={ offers.filter((o) => o.isFavorite ).length } /> }/>
                <Route
                    path={AppRoute.NotFound}
                    element={<NotFoundPage/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

