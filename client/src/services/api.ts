import axios from 'axios';
import type {
    AxiosInstance,
    InternalAxiosRequestConfig,
    AxiosResponse,
    AxiosError
} from 'axios';
import { StatusCodes } from 'http-status-codes';
import { getToken, dropToken } from './token';
import { processErrorHandle } from './process-error-handle';
import { store } from '../store';
import { requireAuthorization, setUser } from '../store/action';
import { AuthorizationStatus } from '../const';

type DetailMessageType = {
    type: string;
    message: string;
}

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const StatusCodeMapping: Record<number, boolean> = {
    [StatusCodes.BAD_REQUEST]: true,
    [StatusCodes.UNAUTHORIZED]: true,
    [StatusCodes.NOT_FOUND]: true
};

const BACKEND_URL = 'http://localhost:5000';
const REQUEST_TIMEOUT = 5000;
export const createAPI = (): AxiosInstance => {
    const api = axios.create({
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT,
    });

    api.interceptors.request.use(
        (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
            const token = getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            console.log(error);
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (response) => response,
        (error: AxiosError<DetailMessageType>) => {
            if (error.response) {
                const status = error.response.status;
                if (status === StatusCodes.UNAUTHORIZED) {
                    dropToken();
                    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
                    store.dispatch(setUser(null));
                    return Promise.reject(error);
                }

                if (shouldDisplayError(error.response)) {
                    const detailMessage = (error.response.data);
                    processErrorHandle(detailMessage.message);
                }
            }
            throw error;
        }
    );

    return api;
}