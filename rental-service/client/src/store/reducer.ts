import { createReducer} from "@reduxjs/toolkit";
import { offersList } from "../mocks/offers-list";
import { getCity } from '../utils/utils';
import { changeCity, offersCityList } from './action';
import { CITIES_LOCATION } from '../const';

const defaultCity = getCity('Amsterdam', CITIES_LOCATION);

const initialState = {
    city: defaultCity,
    offers: offersList
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeCity, (state, action) => {
            state.city = action.payload;
        })
        .addCase(offersCityList, (state, action) => {
            state.offers = action.payload;
        });
});

export { reducer };