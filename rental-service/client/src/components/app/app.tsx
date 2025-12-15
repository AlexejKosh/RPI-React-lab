import React from 'react';
import { MainPage } from "../../pages/main-page/main-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { PrivateRoute } from '../private-route/private-route';
import { FullOffer } from '../../types/offer';
import { Review } from '../../types/review';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
type AppMainPageProps = {
    offers: FullOffer[];
    reviews: Review[];
}

function App({ offers, reviews }: AppMainPageProps): React.JSX.Element {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPage />}
                />
                <Route
                    path={AppRoute.Login}
                    element={<LoginPage/>}
                />
                <Route
                    path={AppRoute.Favorites}
                    element={
                        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                            <FavoritesPage favorites={offers.filter((o) => o.price <= 200)} />
                        </PrivateRoute>
                    }
                />
                <Route
                    path={AppRoute.Offer}
                    element={<OfferPage offers={ offers } reviews={ reviews } />}
                />
                <Route path={ `${AppRoute.Offer}/:id` } element={ <OfferPage offers={offers} reviews={ reviews } /> }/>
                <Route
                    path={AppRoute.NotFound}
                    element={<NotFoundPage/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

