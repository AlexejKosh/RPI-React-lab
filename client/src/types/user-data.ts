export type UserData = {
    username: string;
    avatarUrl: string | null;
    isPro: boolean;
    email: string;
    token: string;
}

export type AuthData = {
    email: string;
    password: string;
}