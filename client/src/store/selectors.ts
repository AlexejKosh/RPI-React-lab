import type { State } from '../types/state';
import type { AuthorizationStatusType } from '../types/authorization-status';
export const getAuthorizationStatus = (state: State):
    AuthorizationStatusType => state.authorizationStatus;