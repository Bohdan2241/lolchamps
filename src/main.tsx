// import './utils/wdyr';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import { WrappedApp } from './App';
import { GlobalStyle } from './assets/styles/style';
import store from './store';

import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <HelmetProvider>
        <WrappedApp />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
