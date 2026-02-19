import { AuthorizationStatus } from '../const';

export type AuthorizationStatusType = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];