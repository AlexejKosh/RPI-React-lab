import { SortOffersType } from "../const";

export type SortOffer = typeof SortOffersType[keyof typeof SortOffersType];