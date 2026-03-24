import { describe, it, expect } from 'vitest';
import { getOffersByCity, sortOffersByType, getCity } from '../utils/utils';
import { getDistanceKm } from '../utils/distance';
import { getNearbyOffers, buildOffersList } from '../utils/nearby';
import { makeFakeOffer, makeFakeFullOffer } from './mocks';
import { SortOffersType, CITIES_LOCATION } from '../const';


describe('getOffersByCity', () => {
  it('возвращает только объявления указанного города', () => {
    const paris = CITIES_LOCATION[0];
    const cologne = CITIES_LOCATION[1];
    const parisOffer = { ...makeFakeOffer(), city: paris };
    const cologneOffer = { ...makeFakeOffer(), city: cologne };

    const result = getOffersByCity('Paris', [parisOffer, cologneOffer]);

    expect(result).toHaveLength(1);
    expect(result[0].city.name).toBe('Paris');
  });

  it('возвращает пустой массив, если город не найден', () => {
    const offers = [makeFakeOffer(), makeFakeOffer()];
    expect(getOffersByCity('Tokyo', offers)).toHaveLength(0);
  });

  it('возвращает пустой массив при пустом списке предложений', () => {
    expect(getOffersByCity('Paris', [])).toEqual([]);
  });
});

describe('getCity', () => {
  it('находит город по имени (регистр не важен)', () => {
    const cities = CITIES_LOCATION;
    const result = getCity('paris', cities as any);
    expect(result).toBeDefined();
    expect(result?.name).toBe('Paris');
  });

  it('возвращает undefined при пустом имени или неверном массиве', () => {
    expect(getCity('', CITIES_LOCATION as any)).toBeUndefined();
    // @ts-expect-error намеренно передаём не массив
    expect(getCity('Paris', null)).toBeUndefined();
  });
});

describe('getDistanceKm', () => {
  it('возвращает 0 для одинаковых координат', () => {
    const p = CITIES_LOCATION[0].location;
    expect(getDistanceKm(p as any, p as any)).toBeCloseTo(0, 5);
  });

  it('возвращает положительное расстояние между разными городами', () => {
    const paris = CITIES_LOCATION[0].location;
    const cologne = CITIES_LOCATION[1].location;
    const dist = getDistanceKm(paris as any, cologne as any);
    expect(dist).toBeGreaterThan(200);
  });
});

describe('nearby utilities', () => {
  it('getNearbyOffers фильтрует по id и по расстоянию', () => {
    const main = makeFakeFullOffer();
    main.location = { latitude: 48.856663, longitude: 2.351556, zoom: 12 };
    main.id = 'main-id';

    const sameId = { ...makeFakeFullOffer(), id: 'main-id', location: { latitude: 48.856663, longitude: 2.351556, zoom: 12 } };
    const near = { ...makeFakeFullOffer(), id: 'near-id', location: { latitude: 48.857, longitude: 2.352, zoom: 12 } };
    const far = { ...makeFakeFullOffer(), id: 'far-id', location: { latitude: 52, longitude: 4, zoom: 12 } };

    const offers = [sameId, near, far];

    const result = getNearbyOffers(offers, main as any, 5) as any[];

    expect(result.find((o) => o.id === 'main-id')).toBeUndefined();
    expect(result.find((o) => o.id === 'near-id')).toBeDefined();
    expect(result.find((o) => o.id === 'far-id')).toBeUndefined();
  });

  it('buildOffersList корректно мапит FullOffer в OffersList', () => {
    const full = makeFakeFullOffer();
    full.images = [];
    const list = buildOffersList([full as any]);
    expect(list).toHaveLength(1);
    expect(list[0]).toHaveProperty('id', full.id);
    expect(list[0]).toHaveProperty('title', full.title);
    expect(list[0].previewImage).toBeDefined();
  });
});

describe('sortOffersByType', () => {
  it('возвращает пустой массив при сортировке пустого массива', () => {
    const result = sortOffersByType([], SortOffersType.Popular);
    expect(result).toEqual([]);
  });
  it('сортирует от дешёвых к дорогим (PriceToHigh)', () => {
    const offers = [
      { ...makeFakeOffer(), price: 300 },
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 200 },
    ];

    const result = sortOffersByType([...offers], SortOffersType.PriceToHigh);

    expect(result[0].price).toBe(100);
    expect(result[2].price).toBe(300);
  });

  it('сортирует от дорогих к дешёвым (PriceToLow)', () => {
    const offers = [
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 300 },
    ];

    const result = sortOffersByType([...offers], SortOffersType.PriceToLow);

    expect(result[0].price).toBe(300);
  });

  it('сортирует по рейтингу (Popular)', () => {
    const offers = [
      { ...makeFakeOffer(), rating: 3 },
      { ...makeFakeOffer(), rating: 5 },
      { ...makeFakeOffer(), rating: 4 },
    ];

    const result = sortOffersByType([...offers], SortOffersType.Popular);

    expect(result[0].rating).toBe(5);
  });

  it('не изменяет исходный массив', () => {
    const offers = [
      { ...makeFakeOffer(), price: 100 },
      { ...makeFakeOffer(), price: 200 },
    ];

    const copy = [...offers];

    sortOffersByType(offers, SortOffersType.PriceToHigh);

    expect(offers).toEqual(copy);
  });
});