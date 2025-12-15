import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        'id': 'bbb06ae-3f92-446d-9a68-cb64b5d38e2b',
        'title': 'Wood and stone place',
        'description': 'A new spacious villa, one floor. All commodities, jacuzzi and  beautiful scemery. Idea for families',
        'type': 'apartment',
        'price': 370,
        'images': [
            '/img/amsterdam-1-1.jpg',
            '/img/amsterdam-1-2.jpg',
            '/img/amsterdam-1-3.jpg',
            '/img/amsterdam-1-4.jpg',
            '/img/amsterdam-1-5.jpg',
            '/img/amsterdam-1-6.jpg'
        ],
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
            '/img/amsterdam-2-1.jpg',
            '/img/amsterdam-2-2.jpg',
            '/img/amsterdam-2-3.jpg',
            '/img/amsterdam-2-4.jpg'
        ],
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
            '/img/amsterdam-3-1.jpg',
            '/img/amsterdam-3-2.jpg',
            '/img/amsterdam-3-3.jpg',
            '/img/amsterdam-3-4.jpg',
            '/img/amsterdam-3-5.jpg'
        ],
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
            '/img/amsterdam-4-1.jpg',
            '/img/amsterdam-4-2.jpg',
            '/img/amsterdam-4-3.jpg',
            '/img/amsterdam-4-4.jpg'
        ],
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
    },
    {
        id: 'a12f3c8e-4d92-4c9e-b01e-1b9a8a7c1234',
        title: 'Elegant apartment near Eiffel Tower',
        description: 'Stylish apartment within walking distance of the Eiffel Tower. Perfect for couples.',
        type: 'apartment',
        price: 310,
        images: [
            '/img/paris-1-1.png',
            '/img/paris-1-2.png',
            '/img/paris-1-3.png',
            '/img/paris-1-4.png',
            '/img/paris-1-5.png',
            '/img/paris-1-6.png'
        ],
        city: {
            name: 'Paris',
            location: {
                latitude: 48.856663,
                longitude: 2.351556,
                zoom: 12
            }
        },
        location: {
            latitude: 48.85837,
            longitude: 2.294481,
            zoom: 14
        },
        goods: [
            'Wi-Fi',
            'Heating',
            'Kitchen',
            'Coffee machine',
            'Dishwasher',
            'Washing machine',
            'Towels'
        ],
        host: {
            isPro: true,
            name: 'Claire',
            avatarUrl: '/img/avatar-claire.jpg'
        },
        isPremium: true,
        isFavorite: false,
        rating: 4.7,
        bedrooms: 1,
        maxAdults: 2
    },
    {
        id: 'b87d1e55-9c45-4d30-8d2e-6e8c19f56789',
        title: 'Small room in Montmartre',
        description: 'Affordable room in the artistic district of Montmartre. Great city atmosphere.',
        type: 'room',
        price: 95,
        images: [
            '/img/paris-2-1.png',
            '/img/paris-2-2.png',
            '/img/paris-2-3.png',
            '/img/paris-2-4.png'
        ],
        city: {
            name: 'Paris',
            location: {
                latitude: 48.856663,
                longitude: 2.351556,
                zoom: 12
            }
        },
        location: {
            latitude: 48.886704,
            longitude: 2.343104,
            zoom: 14
        },
        goods: [
            'Wi-Fi',
            'Heating',
            'Towels'
        ],
        host: {
            isPro: false,
            name: 'Julien',
            avatarUrl: '/img/avatar-julien.jpg'
        },
        isPremium: false,
        isFavorite: false,
        rating: 4.1,
        bedrooms: 1,
        maxAdults: 1
    },
    {
        id: 'c44b9e12-72c9-4e61-9c7f-81d4b7e43210',
        title: 'Modern flat near Louvre',
        description: 'Modern and bright flat close to the Louvre Museum. Ideal for sightseeing.',
        type: 'apartment',
        price: 280,
        images: [
            '/img/paris-3-1.png',
            '/img/paris-3-2.png',
            '/img/paris-3-3.png',
            '/img/paris-3-4.png'
        ],
        city: {
            name: 'Paris',
            location: {
                latitude: 48.856663,
                longitude: 2.351556,
                zoom: 12
            }
        },
        location: {
            latitude: 48.860611,
            longitude: 2.337644,
            zoom: 14
        },
        goods: [
            'Wi-Fi',
            'Air conditioning',
            'Kitchen',
            'Dishwasher',
            'Washer',
            'Coffee machine'
        ],
        host: {
            isPro: true,
            name: 'Antoine',
            avatarUrl: '/img/avatar-antoine.jpg'
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.6,
        bedrooms: 2,
        maxAdults: 4
    },
    {
        id: 'd998fa22-11a4-4d63-9f0b-92b7c9a65432',
        title: 'Luxury penthouse with city view',
        description: 'Spacious luxury penthouse with panoramic views over Paris. Top-level comfort.',
        type: 'apartment',
        price: 520,
        images: [
            '/img/paris-4-1.png',
            '/img/paris-4-2.png',
            '/img/paris-4-3.png',
            '/img/paris-4-4.png',
            '/img/paris-4-5.png'
        ],
        city: {
            name: 'Paris',
            location: {
                latitude: 48.856663,
                longitude: 2.351556,
                zoom: 12
            }
        },
        location: {
            latitude: 48.873791,
            longitude: 2.295028,
            zoom: 14
        },
        goods: [
            'Wi-Fi',
            'Air conditioning',
            'Kitchen',
            'Dishwasher',
            'Washer',
            'Coffee machine',
            'Baby seat'
        ],
        host: {
            isPro: true,
            name: 'Camille',
            avatarUrl: '/img/avatar-camille.jpg'
        },
        isPremium: true,
        isFavorite: true,
        rating: 5.0,
        bedrooms: 3,
        maxAdults: 6
    },
    {
        'id': 'a12f3c9e-1b44-4e6d-8b21-92e8c1b0a101',
        'title': 'Modern apartment near the Rhine',
        'description': 'Stylish modern apartment close to the Rhine river. Quiet area, great transport connections.',
        'type': 'apartment',
        'price': 210,
        'images': [
            '/img/cologne-1-1.png',
            '/img/cologne-1-2.png',
            '/img/cologne-1-3.png',
            '/img/cologne-1-4.png'
        ],
        'city': {
            'name': 'Cologne',
            'location': {
                'latitude': 50.9375,
                'longitude': 6.9603,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 50.9481,
            'longitude': 6.9443,
            'zoom': 14
        },
        'goods': [
            'Wi-Fi',
            'Heating',
            'Kitchen',
            'Washer',
            'Dishwasher',
            'Coffee machine'
        ],
        'host': {
            'isPro': true,
            'name': 'Thomas',
            'avatarUrl': '/img/avatar-thomas.jpg'
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.7,
        'bedrooms': 2,
        'maxAdults': 4
    },
    {
        'id': 'b44d9a22-7e51-4c33-9f12-1f7a92debb55',
        'title': 'Quiet room close to city center',
        'description': 'Private room in a calm neighborhood, 10 minutes from Cologne city center by tram.',
        'type': 'room',
        'price': 95,
        'images': [
            '/img/cologne-2-1.png',
            '/img/cologne-2-2.png',
            '/img/cologne-2-3.png',
            '/img/cologne-2-4.png',
            '/img/cologne-2-5.png'
        ],
        'city': {
            'name': 'Cologne',
            'location': {
                'latitude': 50.9375,
                'longitude': 6.9603,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 50.9278,
            'longitude': 6.9731,
            'zoom': 14
        },
        'goods': [
            'Wi-Fi',
            'Heating',
            'Towels',
            'Breakfast'
        ],
        'host': {
            'isPro': false,
            'name': 'Laura',
            'avatarUrl': '/img/avatar-laura.jpg'
        },
        'isPremium': false,
        'isFavorite': false,
        'rating': 4.2,
        'bedrooms': 1,
        'maxAdults': 1
    },
    {
        'id': 'e88b2c10-9a3f-4f66-8d71-3a9b5e4c7722',
        'title': 'Luxury loft in downtown Düsseldorf',
        'description': 'Spacious loft in the heart of Düsseldorf. Panoramic windows, modern design, perfect for business trips.',
        'type': 'apartment',
        'price': 320,
        'images': [
            '/img/dusseldorf-1-1.png',
            '/img/dusseldorf-1-2.png',
            '/img/dusseldorf-1-3.png',
            '/img/dusseldorf-1-4.png',
            '/img/dusseldorf-1-5.png'
        ],
        'city': {
            'name': 'Dusseldorf',
            'location': {
                'latitude': 51.2277,
                'longitude': 6.7735,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 51.2321,
            'longitude': 6.7815,
            'zoom': 14
        },
        'goods': [
            'Wi-Fi',
            'Air conditioning',
            'Kitchen',
            'Washer',
            'Coffee machine',
            'Laptop friendly workspace'
        ],
        'host': {
            'isPro': true,
            'name': 'Alexander',
            'avatarUrl': '/img/avatar-alexander.jpg'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 1,
        'maxAdults': 2
    },
    {
        'id': 'a12f4c9e-8d31-4a6e-b2b7-1e8f6d8c9a01',
        'title': 'Modern loft near the harbor',
        'description': 'Spacious modern loft close to the Hamburg harbor. Panoramic windows, high ceilings and stylish interior.',
        'type': 'apartment',
        'price': 310,
        'images': [
            '/img/hamburg-1-1.png',
            '/img/hamburg-1-2.png',
            '/img/hamburg-1-3.png',
            '/img/hamburg-1-4.png',
            '/img/hamburg-1-5.png'
        ],
        'city': {
            'name': 'Hamburg',
            'location': {
                'latitude': 53.5511,
                'longitude': 9.9937,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 53.5452,
            'longitude': 9.9665,
            'zoom': 14
        },
        'goods': [
            'Wi-Fi',
            'Heating',
            'Kitchen',
            'Dishwasher',
            'Washer',
            'Coffee machine',
            'Laptop friendly workspace'
        ],
        'host': {
            'isPro': true,
            'name': 'Jonas',
            'avatarUrl': '/img/avatar-jonas.jpg'
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.7,
        'bedrooms': 1,
        'maxAdults': 2
    },
    {
        'id': 'b7e8d1c4-5a2f-4d9a-9f17-2c9b8e6f44ab',
        'title': 'Quiet room in green district',
        'description': 'A cozy private room in a calm green area of Hamburg. Ideal for students or business travelers.',
        'type': 'room',
        'price': 95,
        'images': [
            '/img/hamburg-2-1.png',
            '/img/hamburg-2-2.png',
            '/img/hamburg-2-3.png',
            '/img/hamburg-2-4.png'
        ],
        'city': {
            'name': 'Hamburg',
            'location': {
                'latitude': 53.5511,
                'longitude': 9.9937,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 53.5753,
            'longitude': 10.0158,
            'zoom': 14
        },
        'goods': [
            'Wi-Fi',
            'Heating',
            'Towels',
            'Breakfast'
        ],
        'host': {
            'isPro': false,
            'name': 'Klara',
            'avatarUrl': '/img/avatar-klara.jpg'
        },
        'isPremium': false,
        'isFavorite': false,
        'rating': 4.2,
        'bedrooms': 1,
        'maxAdults': 1
    },
    {
        'id': 'c3f9a8e2-71b4-4f9e-9f1b-6e9c3d0a5b9f',
        'title': 'Family house with garden',
        'description': 'Comfortable family house with a private garden. Perfect for long stays and trips with children.',
        'type': 'house',
        'price': 420,
        'images': [
            '/img/hamburg-3-1.png',
            '/img/hamburg-3-2.png',
            '/img/hamburg-3-3.png',
            '/img/hamburg-3-4.png',
            '/img/hamburg-3-5.png',
            '/img/hamburg-3-6.png'
        ],
        'city': {
            'name': 'Hamburg',
            'location': {
                'latitude': 53.5511,
                'longitude': 9.9937,
                'zoom': 12
            }
        },
        'location': {
            'latitude': 53.5619,
            'longitude': 9.9421,
            'zoom': 14
        },
        'goods': [
            'Wi-Fi',
            'Heating',
            'Kitchen',
            'Washer',
            'Dishwasher',
            'Baby seat',
            'Fridge',
            'Towels'
        ],
        'host': {
            'isPro': true,
            'name': 'Michael',
            'avatarUrl': '/img/avatar-michael.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 3,
        'maxAdults': 5
    }
];

export { offers };