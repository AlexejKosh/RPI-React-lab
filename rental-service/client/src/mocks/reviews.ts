import { Review } from '../types/review';

const reviews : Review[] = [
    {
        'id': '463623e8-eecc-42a2-b2fc-797a299b5230',
        'comment': 'The room was spacios and clean. The Pool looked like the photos.',
        'date': '2025-06-29T21:00:00.465Z',
        'rating': 4,
        'user': {
            'name': 'Isaac',
            'avatarUrl': '/img/avatar-isaac.jpg',
            'isPro': true
        }
    },
    {
        'id': 'a1b2c3d4-5e6f-47a8-9b0c-1234567890ab',
        'comment': 'Lovely location, friendly host, but the heater was a bit noisy at night.',
        'date': '2025-07-05T09:15:00.000Z',
        'rating': 3,
        'user': {
            'name': 'Mariya',
            'avatarUrl': '/img/avatar-mariya.jpg',
            'isPro': false
        }
    },
    {
        'id': 'f0e1d2c3-b4a5-6789-0abc-def123456789',
        'comment': 'Fantastic apartment — stylish, very clean and close to the tram. Highly recommend!',
        'date': '2025-05-18T14:30:00.000Z',
        'rating': 5,
        'user': {
            'name': 'Liam',
            'avatarUrl': '/img/avatar-liam.jpg',
            'isPro': false
        }
    },
    {
        'id': '9f8e7d6c-5b4a-3210-ffed-cba987654321',
        'comment': 'Good value for money. Check-in was quick and the neighbourhood felt safe.',
        'date': '2025-08-01T19:45:00.000Z',
        'rating': 4,
        'user': {
            'name': 'Olga',
            'avatarUrl': '/img/avatar-olga.jpg',
            'isPro': true
        }
    }
];

export { reviews };