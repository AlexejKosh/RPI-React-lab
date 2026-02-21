import type { FullOffer, OffersList } from "../types/offer";
import { getDistanceKm } from "./distance";

export const getNearbyOffers = (offers: FullOffer[] | OffersList[], mainOffer: FullOffer, maxDistanceKm = 30): FullOffer[] | OffersList[] => {
  return offers
    .filter((o) => o.id !== mainOffer.id)
    .map((o) => ({ offer: o, distance: getDistanceKm(mainOffer.location, o.location) }))
    .filter((o) => o.distance <= maxDistanceKm)
    .sort((a, b) => a.distance - b.distance)
    .map((p) => p.offer);
};

export const buildOffersList = (offers: Array<FullOffer | OffersList>): OffersList[] =>
  offers.map((o: any) => ({
    id: o.id,
    title: o.title,
    type: o.type,
    price: o.price,
    city: o.city,
    location: o.location,
    isFavorite: o.isFavorite,
    isPremium: o.isPremium,
    rating: o.rating,
    previewImage: o.previewImage ?? (o.images && o.images.length ? o.images[0] : '') ?? ''
  }));
