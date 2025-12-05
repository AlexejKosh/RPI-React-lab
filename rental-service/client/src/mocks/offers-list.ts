import { OffersList } from "../types/offer";

export const offersList : OffersList[] = [
    {
        'id': 'bbb06ae-3f92-446d-9a68-cb64b5d38e2b',
        'title': 'Wood and stone place',
        'type': 'apartment',
        'price': 370,
        'previewImage': '/img/paris-1.jpg',
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 48.86861,
            'longitude': 2.342499,
            'zoom': 16
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
            'name': 'Cologne',
            'location': {
                'latitude': 50.938361,
                'longitude': 6.959974,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 50.940361,
            'longitude': 6.960974,
            'zoom': 16
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
                'zoom': 13
            }
        },
        'location': {
            'latitude': 52.37554,
            'longitude': 4.895976,
            'zoom': 16
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
            'name': 'Hamburg',
            'location': {
                'latitude': 53.550341,
                'longitude': 10.000654,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 53.551341,
            'longitude': 10.002654,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.7
    }
];