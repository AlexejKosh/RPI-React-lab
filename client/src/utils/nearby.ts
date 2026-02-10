import type { FullOffer, OffersList } from "../types/offer";
import { getDistanceKm } from "./distance";

export const getNearbyOffers = (offers: FullOffer[], mainOffer: FullOffer, maxDistanceKm = 30): FullOffer[] => {
  return offers
    .filter((o) => o.id !== mainOffer.id)
    .map((o) => ({ offer: o, distance: getDistanceKm(mainOffer.location, o.location) }))
    .filter((o) => o.distance <= maxDistanceKm)
    .sort((a, b) => a.distance - b.distance)
    .map((p) => p.offer);
};

export const buildOffersList = (offers: FullOffer[]): OffersList[] =>
  offers.map((o) => ({
    id: o.id,
    title: o.title,
    type: o.type,
    price: o.price,
    city: o.city,
    location: o.location,
    isFavorite: o.isFavorite,
    isPremium: o.isPremium,
    rating: o.rating,
    previewImage: o.images && o.images.length ? o.images[0] : ''
  }));
