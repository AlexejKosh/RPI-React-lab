import React from 'react';
import { MainPage } from "../../pages/main-page/main-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

type AppMainPageProps = {
    rentalOffersCount: number;
}

function App({rentalOffersCount}: AppMainPageProps): React.JSX.Element {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage rentalOffersCount={rentalOffersCount} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/offer" element={<OfferPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;