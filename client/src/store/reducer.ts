import { createReducer} from "@reduxjs/toolkit";
import { getCity } from '../utils/utils';
import { changeCity, offersCityList, requireAuthorization, setError, setOffersDataLoadingStatus, setCurrentOffer, setOfferReviews, setUser } from './action';
import { AuthorizationStatus, CITIES_LOCATION } from '../const';
import type { CityOffer, FullOffer, OffersList } from "../types/offer";
import type { AuthorizationStatusType } from "../types/authorization-status";
import type { Review } from '../types/review';
import type { UserData } from '../types/user-data';

const defaultCity = getCity('Amsterdam', CITIES_LOCATION);

export type InitialState = {
    city: CityOffer | undefined;
    offers: OffersList[];
    currentOffer: FullOffer | null;
    offerReviews: Review[];
    authorizationStatus: AuthorizationStatusType;
    user: UserData | null;
    error: string | null;
    isOffersDataLoading: boolean;
}

const initialState : InitialState = {
    city: defaultCity,
    offers: [],
    currentOffer: null,
    offerReviews: [],
    authorizationStatus: AuthorizationStatus.Unknown,
    user: null,
    error: null,
    isOffersDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeCity, (state, action) => {
            state.city = action.payload;
        })
        .addCase(offersCityList, (state, action) => {
            state.offers = action.payload;
        })
        .addCase(requireAuthorization, (state, action) => {
            state.authorizationStatus = action.payload;
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload;
        })
        .addCase(setCurrentOffer, (state, action) => {
            state.currentOffer = action.payload;
        })
        .addCase(setOfferReviews, (state, action) => {
            state.offerReviews = action.payload;
        })
        .addCase(setError, (state, action) => {
            state.error = action.payload;
        })
        .addCase(setOffersDataLoadingStatus, (state, action) => {
            state.isOffersDataLoading = action.payload;
        });
});

export { reducer };