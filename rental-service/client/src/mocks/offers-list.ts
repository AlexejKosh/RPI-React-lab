import { OffersList } from "../types/offer";

export const offersList : OffersList[] = [
    {
        'id': 'bbb06ae-3f92-446d-9a68-cb64b5d38e2b',
        'title': 'Wood and stone place',
        'type': 'apartment',
        'price': 370,
        'previewImage': '/img/paris-1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.37454,
                'longitude': 4.897976,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 52.3909553943508,
            'longitude': 4.85309666406198,
            'zoom': 14
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9
    },
    {
        'id': 'c91d8f1a-9d21-4d5b-83d9-21ab72f98211',
        'title': 'Cozy studio in the old town',
        'type': 'room',
        'price': 120,
        'previewImage': '/img/cologne-1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.37454,
                'longitude': 4.897976,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 52.3609553943508,
            'longitude': 4.85309666406198,
            'zoom': 14
        },
        'isPremium': false,
        'isFavorite': false,
        'rating': 4.3
    },
    {
        'id': 'fa7b2b5b-23a4-4e8c-9db6-07cb41d431af',
        'title': 'Canal view apartment',
        'type': 'apartment',
        'price': 250,
        'previewImage': '/img/amsterdam-1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.37454,
                'longitude': 4.897976,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 52.3909553943508,
            'longitude': 4.929309666406198,
            'zoom': 14
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.8
    },
    {
        'id': 'd45ebb01-c9f3-4e1f-9fea-fd01c2c987d2',
        'title': 'Modern house with garden',
        'type': 'house',
        'price': 420,
        'previewImage': '/img/hamburg-1.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.37454,
                'longitude': 4.897976,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 52.3809553943508,
            'longitude': 4.939309666406198,
            'zoom': 14
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.7
    }
];