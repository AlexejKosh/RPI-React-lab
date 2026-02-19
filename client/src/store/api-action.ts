import {createAsyncThunk} from '@reduxjs/toolkit';
import {offersCityList, requireAuthorization, setError, setOffersDataLoadingStatus} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import type { AxiosInstance } from 'axios';
import type {AuthData, UserData} from '../types/user-data';
import type {AppDispatch, State} from '../types/state.js';
import type { OffersList } from '../types/offer.js';

const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}> (
    'data/fetchOffers',
    async (_arg, {dispatch, extra: api}) => {
        dispatch(setOffersDataLoadingStatus(true));
        const {data} = await api.get<OffersList[]>(APIRoute.Offers);
        dispatch(setOffersDataLoadingStatus(false));
        dispatch(offersCityList(data));
    },
);

const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}> (
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {
        try {
            await api.get(APIRoute.Login);
            dispatch(requireAuthorization(AuthorizationStatus.Auth));
        } catch {
            dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        }
    }
);

const loginAction = createAsyncThunk<
    UserData,
    AuthData,
    { dispatch: AppDispatch; state: State; extra: AxiosInstance }
    > (
    'user/login',
    async ({ email, password }, { dispatch, extra: api, rejectWithValue }) => {
        try {
            const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
            saveToken(data.token);
            dispatch(requireAuthorization(AuthorizationStatus.Auth));
            return data;
        } catch (err) {
            dropToken();
            dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
            return rejectWithValue('Login failed');
        }
    }
);


const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}> (
    'user/logout',
    async (_arg, {dispatch, extra: api}) => {
        await api.delete(APIRoute.Logout);
        dropToken();
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
);

const clearErrorAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'clearError',
    async (_arg, {dispatch}) => {
        setTimeout(
            () => dispatch(setError(null)),
            TIMEOUT_SHOW_ERROR
        );
    }
);

export { fetchOffersAction, checkAuthAction, loginAction, logoutAction, clearErrorAction };