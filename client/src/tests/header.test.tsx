import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { Header } from '../components/header/header';
import { renderWithProviders } from './render-with-providers';
import { AuthorizationStatus } from '../const';
import { makeFakeOffer } from './mocks';


const fakeUser = {
  id: 'user-1',
  username: 'Test User',
  email: 'test@example.com',
  avatarUrl: 'https://example.com/avatar.jpg',
  isPro: false,
  token: 'fake-token',
};

describe('Header — неавторизованный пользователь', () => {
  it('отображает ссылку Sign in', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });


  it('не отображает Sign out', () => {
    renderWithProviders(<Header />);
    expect(screen.queryByText(/sign out/i)).not.toBeInTheDocument();
  });
});

describe('Header — авторизованный пользователь', () => {
  it('показывает имя пользователя, количество избранных и Sign out', () => {
    const favOffer = { ...makeFakeOffer(), isFavorite: true };
    const otherOffer = { ...makeFakeOffer(), isFavorite: false };

    renderWithProviders(<Header />, { storeOverrides: { authorizationStatus: AuthorizationStatus.Auth, user: fakeUser, offers: [favOffer, otherOffer] } });

    expect(screen.getByText(/test user/i)).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
  });
});
