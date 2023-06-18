import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { championApi } from './services/champion';

export const store = configureStore({
  reducer: {
    [championApi.reducerPath]: championApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(championApi.middleware),
});

setupListeners(store.dispatch);
