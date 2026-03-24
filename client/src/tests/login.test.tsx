import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import { LoginPage } from '../pages/login-page/login-page';
import { renderWithProviders } from './render-with-providers';
import { AuthorizationStatus, AppRoute } from '../const';

describe('LoginPage — отрисовка формы', () => {
  it('отображает заголовок Sign in', () => {
    renderWithProviders(<LoginPage />);

    expect(
      screen.getByRole('heading', { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it('отображает поле email', () => {
    renderWithProviders(<LoginPage />);

    expect(
      screen.getByPlaceholderText(/email/i)
    ).toBeInTheDocument();
  });

  it('отображает поле password', () => {
    renderWithProviders(<LoginPage />);

    expect(
      screen.getByPlaceholderText(/password/i)
    ).toBeInTheDocument();
  });

  it('кнопка Submit присутствует', () => {
    renderWithProviders(<LoginPage />);

    expect(
      screen.getByRole('button', { name: /sign in/i })
    ).toBeInTheDocument();
  });
});

describe('LoginPage — ввод данных', () => {
  it('пользователь может ввести email и пароль', async () => {
    renderWithProviders(<LoginPage />);
    const user = userEvent.setup();

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    await user.type(emailInput, 'test@test.com');
    await user.type(passwordInput, 'Password1');

    expect(emailInput).toHaveValue('test@test.com');
    expect(passwordInput).toHaveValue('Password1');
  });
});

describe('LoginPage — перенаправление', () => {
  it('авторизованный пользователь перенаправляется с /login', () => {
    renderWithProviders(<LoginPage />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      initialEntries: [AppRoute.Login],
    });

    expect(
      screen.queryByPlaceholderText(/email/i)
    ).not.toBeInTheDocument();
  });

  it('неавторизованный пользователь видит форму', () => {
    renderWithProviders(<LoginPage />, {
      storeOverrides: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
      initialEntries: [AppRoute.Login],
    });

    expect(
      screen.getByPlaceholderText(/email/i)
    ).toBeInTheDocument();
  });
});