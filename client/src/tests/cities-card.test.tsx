import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { CitiesCard } from '../components/cities-card/cities-card';
import { renderWithProviders } from './render-with-providers';
import { makeFakeOffer } from './mocks';

describe('CitiesCard', () => {
  it('заголовок объявления отображается на карточке', () => {
    const offer = makeFakeOffer();
    renderWithProviders(<CitiesCard {...offer} onHover={() => {}} />);
    expect(screen.getByText(offer.title)).toBeInTheDocument();
  });

  it('цена объявления присутствует в разметке', () => {
    const offer = makeFakeOffer();
    renderWithProviders(<CitiesCard {...offer} onHover={() => {}} />);
    expect(screen.getByText(`€${offer.price}`)).toBeInTheDocument();
  });

  it('метка "Premium" отображается когда isPremium = true', () => {
    const offer = { ...makeFakeOffer(), isPremium: true };
    renderWithProviders(<CitiesCard {...offer} onHover={() => {}} />);
    expect(screen.getByText(/premium/i)).toBeInTheDocument();
  });

  it('метка "Premium" отсутствует когда isPremium = false', () => {
    const offer = { ...makeFakeOffer(), isPremium: false };
    renderWithProviders(<CitiesCard {...offer} onHover={() => {}} />);
    expect(screen.queryByText(/premium/i)).toBeNull();
  });

  it('ссылка на страницу объявления содержит id в href (/offer/id)', () => {
    const offer = makeFakeOffer();
    renderWithProviders(<CitiesCard {...offer} onHover={() => {}} />);
    const link = screen.getByRole('link', { name: offer.title });
    expect(link.getAttribute('href')).toBe(`/offer/${offer.id}`);
  });
});
