import { createAction } from '@reduxjs/toolkit';
import type { CityOffer, FullOffer, OffersList } from '../types/offer';
import type { AuthorizationStatusType } from '../types/authorization-status';
import type { UserData } from '../types/user-data';
import type { Review } from '../types/review';

const changeCity = createAction('offers/changeCity', (city: CityOffer) => ({
    payload: city
}));

const offersCityList = createAction('offers/offersCityList', (offers: OffersList[]) => ({
    payload: offers
}));

const setError = createAction('setError', (error: string | null) => ({
    payload: error
}));

const setUser = createAction('user/setUser', (user: UserData | null) => ({
    payload: user
}));

const setCurrentOffer = createAction('offers/setCurrentOffer', (offer: FullOffer | null) => ({
    payload: offer
}));

const setOfferReviews = createAction('offers/setOfferReviews', (reviews: Review[]) => ({
    payload: reviews
}));

const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');

const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export {
    changeCity,
    offersCityList,
    requireAuthorization,
    setError,
    setUser,
    setOffersDataLoadingStatus,
    setCurrentOffer,
    setOfferReviews
};