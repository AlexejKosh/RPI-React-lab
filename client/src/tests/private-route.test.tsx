import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';


import { PrivateRoute } from '../components/private-route/private-route';
import { AuthorizationStatus, AppRoute } from '../const';


type AuthStatus = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];


function renderPrivateRoute(status: AuthStatus) {
  return render(
    <MemoryRouter initialEntries={[AppRoute.Favorites]}>
      <Routes>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={status}>
              <div data-testid="protected">Избранное</div>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<div data-testid="login-page">Страница входа</div>}
        />
      </Routes>
    </MemoryRouter>
  );
}


describe('PrivateRoute', () => {
  it('показывает дочерний компонент для авторизованного пользователя', () => {
    renderPrivateRoute(AuthorizationStatus.Auth);


    expect(screen.getByTestId('protected')).toBeInTheDocument();
    expect(screen.queryByTestId('login-page')).not.toBeInTheDocument();
  });


  it('перенаправляет на /login для неавторизованного пользователя', () => {
    renderPrivateRoute(AuthorizationStatus.NoAuth);


    expect(screen.getByTestId('login-page')).toBeInTheDocument();
    expect(screen.queryByTestId('protected')).not.toBeInTheDocument();
  });


  it('перенаправляет на /login при статусе Unknown', () => {
    renderPrivateRoute(AuthorizationStatus.Unknown);


    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });
});