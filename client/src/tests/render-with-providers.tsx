import { render } from '@testing-library/react';
import type { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';


import { reducer as rootReducer } from '../store/reducer';
import { makeFakeStore } from './mocks';


type RenderWithProvidersOptions = {
  initialEntries?: string[];
  storeOverrides?: Parameters<typeof makeFakeStore>[0];
};


export function renderWithProviders(
  ui: ReactElement,
  options: RenderWithProvidersOptions = {} ) {
  const {
    initialEntries = ['/'],
    storeOverrides = {},
  } = options;

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: makeFakeStore(storeOverrides),
  });

  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          {ui}
        </MemoryRouter>
      </Provider>
    ),
    store,
  };
}
