import {createAsyncThunk} from '@reduxjs/toolkit';
import {offersCityList, requireAuthorization, setError, setOffersDataLoadingStatus, setUser, setCurrentOffer, setOfferReviews} from './action';
import { getToken } from '../services/token';
import { api as apiInstance } from './index';
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
        const token = getToken();
        if (!token) {
            dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
            dispatch(setUser(null));
            return;
        }

        try {
            const { data } = await api.get(APIRoute.Login);
            if (data && data.token) {
                saveToken(data.token);
            }
            const mappedUser = {
                ...data,
                avatarUrl: data.avatar ?? data.avatarUrl ?? data.avaterUrl ?? null
            };
            const base = apiInstance?.defaults?.baseURL ?? '';
            if (mappedUser.avatarUrl && mappedUser.avatarUrl.startsWith('/')) {
                mappedUser.avatarUrl = `${base}${mappedUser.avatarUrl}`;
            }
            dispatch(requireAuthorization(AuthorizationStatus.Auth));
            dispatch(setUser(mappedUser));
        } catch {
            dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
            dispatch(setUser(null));
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
            dispatch(checkAuthAction());
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

const fetchOfferAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchOffer',
    async (offerId, {dispatch, extra: api}) => {
        const { data } = await api.get(`${APIRoute.Offers}/${offerId}`);
        dispatch(setCurrentOffer(data));
    }
);

const fetchOfferReviewsAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchOfferReviews',
    async (offerId, {dispatch, extra: api}) => {
        const { data } = await api.get(`${APIRoute.Comments}/${offerId}`);
        dispatch(setOfferReviews(data));
    }
);

const toggleFavoriteAction = createAsyncThunk<void, { offerId: string; status: number }, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/toggleFavorite',
    async ({ offerId, status }, { dispatch, extra: api }) => {
        await api.post(`${APIRoute.Favorite}/${offerId}/${status}`);
        dispatch(fetchOffersAction());
        dispatch(fetchOfferAction(offerId));
    }
);

const postReviewAction = createAsyncThunk<void, { offerId: string; comment: string; rating: number }, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/postReview',
    async ({ offerId, comment, rating }, { dispatch, extra: api }) => {
        await api.post(`${APIRoute.Comments}/${offerId}`, { comment, rating });
        dispatch(fetchOfferReviewsAction(offerId));
    }
);

export { fetchOffersAction, checkAuthAction, loginAction, logoutAction, clearErrorAction, fetchOfferAction, fetchOfferReviewsAction, toggleFavoriteAction, postReviewAction };