import { faker } from '@faker-js/faker';
import { AuthorizationStatus, CITIES_LOCATION } from '../const';
import type { InitialState } from '../store/reducer';
import type { FullOffer, OffersList } from '../types/offer';
import type { Review } from '../types/review';

export function makeFakeOffer(): OffersList {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    type: 'apartment',
    price: faker.number.int({ min: 50, max: 500 }),
    city: CITIES_LOCATION[0],
    location: {
      latitude: faker.number.float({ min: 48, max: 49 }),
      longitude: faker.number.float({ min: 2, max: 3 }),
      zoom: 13,
    },
    isFavorite: faker.datatype.boolean(),
    isPremium: faker.datatype.boolean(),
    rating: faker.number.float({ min: 1, max: 5 }),
    previewImage: faker.image.url(),
  };
}

export function makeFakeFullOffer(): FullOffer {
  return {
    ...makeFakeOffer(),
    description: faker.lorem.paragraph(),
    bedrooms: faker.number.int({ min: 1, max: 5 }),
    goods: [faker.commerce.productName(), faker.commerce.productName()],
    host: {
      name: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.datatype.boolean(),
    },
    images: [faker.image.url(), faker.image.url()],
    guests: faker.number.int({ min: 1, max: 10 }),
  };
}

export function makeFakeReview(): Review {
  return {
    id: faker.string.uuid(),
    comment: faker.lorem.sentence(),
    rating: faker.number.int({ min: 1, max: 5 }),
    date: new Date().toISOString(),
    user: {
      name: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.datatype.boolean(),
    },
  };
}

export function makeFakeStore(
  overrides: Partial<InitialState> = {}
): InitialState {
  return {
    city: CITIES_LOCATION[0],
    offers: [],
    currentOffer: null,
    offerReviews: [],
    authorizationStatus: AuthorizationStatus.NoAuth,
    user: null,
    error: null,
    isOffersDataLoading: false,
    ...overrides,
  };
}