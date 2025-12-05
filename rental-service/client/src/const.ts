const Setting = {
    rentOffersConts: 312,
} as const;

const AppRoute = {
    Main : '/',
    Login : '/login',
    Favorites : '/favorites',
    Offer : '/offer/:id',
    NotFound: '*'
} as const;

const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    unknown: 'UNKnOWN'}

export { Setting, AppRoute, AuthorizationStatus };