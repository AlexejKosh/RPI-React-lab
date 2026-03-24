import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from './render-with-providers';
import { LoadingPage } from '../components/loading-page/loading-page';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { AppRoute } from '../const';


describe('LoadingPage', () => {
  it('отображает текст загрузки', () => {
    render(<LoadingPage />);
    expect(screen.getByText(/загрузка/i)).toBeInTheDocument();
  });
});


describe('NotFoundPage', () => {
  const renderPage = () => renderWithProviders(<NotFoundPage />);

  it('отображает заголовок 404 и текст о том, что страница не найдена', () => {
    renderPage();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/страница не найдена/i)).toBeInTheDocument();
  });

  it('ссылка на главную страницу присутствует', () => {
    renderPage();
    expect(screen.getByRole('link', { name: /главную/i })).toBeInTheDocument();
  });

  it('ссылка ведет на "/"', () => {
    renderPage();
    const link = screen.getByRole('link', { name: /главную/i });
    expect(link.getAttribute('href')).toBe(AppRoute.Main);
  });
});
