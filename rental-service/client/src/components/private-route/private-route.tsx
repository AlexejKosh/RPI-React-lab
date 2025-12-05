import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';

type AuthorizationStatusEnum = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];

type PrivateRouteProps = {
    authorizationStatus: AuthorizationStatusEnum;
}

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>) {
    const { authorizationStatus, children } = props;

    return (
        authorizationStatus === AuthorizationStatus.Auth
            ? children
            : <Navigate to={ AppRoute.Login }/>
    );
}

export { PrivateRoute };