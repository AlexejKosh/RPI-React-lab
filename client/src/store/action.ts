import { createAction } from '@reduxjs/toolkit';
import type { CityOffer, OffersList } from '../types/offer';

const changeCity = createAction('offers/changeCity', (city: CityOffer) => ({
    payload: city
}));

const offersCityList = createAction('offers/offersCityList', (offers: OffersList[]) => ({
    payload: offers
}));

export { changeCity, offersCityList };