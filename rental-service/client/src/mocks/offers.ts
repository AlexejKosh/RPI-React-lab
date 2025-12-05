import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        'id': 'bbb06ae-3f92-446d-9a68-cb64b5d38e2b',
        'title': 'Wood and stone place',
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and  beautiful scemery. Idea for families',
        'type': 'apartment',
        'price': 370,
        'images': [
            '/img/paris-1.jpg',
            '/img/paris-2.jpg',
            '/img/paris-3.jpg',
            '/img/paris-4.jpg',
            '/img/paris-5.jpg',
            '/img/paris-6.jpg'
        ],
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
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conitioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host': {
            'isPro': true,
            'name': 'Angelina',
            'avatarUrl': '/img/avatar-angelina.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 3
    },
    {
        'id': 'c91d8f1a-9d21-4d5b-83d9-21ab72f98211',
        'title': 'Cozy studio in the old town',
        'description': 'Small but cozy studio located in the historical heart of Cologne. Perfect for solo travelers.',
        'type': 'room',
        'price': 120,
        'images': [
            '/img/cologne-1.jpg',
            '/img/cologne-2.jpg',
            '/img/cologne-3.jpg',
            '/img/cologne-4.jpg'
        ],
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
        'goods': [
            'Heating',
            'Wi-Fi',
            'Towels',
            'Kitchen',
            'Coffee machine'
        ],
        'host': {
            'isPro': false,
            'name': 'Markus',
            'avatarUrl': '/img/avatar-markus.jpg'
        },
        'isPremium': false,
        'isFavorite': false,
        'rating': 4.3,
        'bedrooms': 1,
        'maxAdults': 1
    },
    {
        'id': 'fa7b2b5b-23a4-4e8c-9db6-07cb41d431af',
        'title': 'Canal view apartment',
        'description': 'Bright apartment with beautiful canal views. Large living room, two balconies, fully equipped kitchen.',
        'type': 'apartment',
        'price': 250,
        'images': [
            '/img/amsterdam-1.jpg',
            '/img/amsterdam-2.jpg',
            '/img/amsterdam-3.jpg',
            '/img/amsterdam-4.jpg',
            '/img/amsterdam-5.jpg'
        ],
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
        'goods': [
            'Wi-Fi',
            'Washer',
            'Dishwasher',
            'Heating',
            'Fridge',
            'Towels'
        ],
        'host': {
            'isPro': true,
            'name': 'Sophie',
            'avatarUrl': '/img/avatar-sophie.jpg'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.8,
        'bedrooms': 2,
        'maxAdults': 4
    },
    {
        'id': 'd45ebb01-c9f3-4e1f-9fea-fd01c2c987d2',
        'title': 'Modern house with garden',
        'description': 'Spacious two-floor house with private garden and barbecue area. Great choice for families.',
        'type': 'house',
        'price': 420,
        'images': [
            '/img/hamburg-1.jpg',
            '/img/hamburg-2.jpg',
            '/img/hamburg-3.jpg',
            '/img/hamburg-4.jpg'
        ],
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
        'goods': [
            'Heating',
            'Wi-Fi',
            'Air conditioning',
            'Kitchen',
            'Fridge',
            'Washing machine',
            'Towels',
            'Laptop friendly workspace',
            'Baby seat'
        ],
        'host': {
            'isPro': true,
            'name': 'Katrin',
            'avatarUrl': '/img/avatar-katrin.jpg'
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.7,
        'bedrooms': 3,
        'maxAdults': 5
    }
];

export { offers };