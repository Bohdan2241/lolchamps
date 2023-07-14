/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import { App } from './App';
import store from './store';

describe('App', () => {
  it('should render not found page if invalid path', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const heading = await screen.findByRole('heading', {
      level: 1,
    });

    expect(heading).toHaveTextContent('error.404');
  });
});
