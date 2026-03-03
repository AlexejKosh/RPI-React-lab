import { SortOffersType } from '../const';
import type { CityOffer, OffersList } from '../types/offer';
import type { SortOffer } from '../types/sort';

export function getCity(name: string, cities: CityOffer[]): CityOffer | undefined {
  if (!name || !Array.isArray(cities)) {
    return undefined;
  }
  const lowerName = name.toLowerCase();
  return cities.find((city) => city.name.toLowerCase() === lowerName);
}

export function getOffersByCity(cityName: string, offers: OffersList[]): OffersList[] {
  if (!cityName || !Array.isArray(offers)) {
    return [];
  }
  const lowerName = cityName.toLowerCase();
  return offers.filter((offer) => offer.city.name.toLowerCase() === lowerName);
}

export function sortOffersByType (offers: OffersList[], type: SortOffer): OffersList[] {
  switch (type) {
    case SortOffersType.Popular:
      return offers.sort((a, b) => b.rating - a.rating);
    case SortOffersType.PriceToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortOffersType.PriceToLow:
      return offers.sort((a, b) => b.price - a.price);
    default:
      return offers;
  } 
}