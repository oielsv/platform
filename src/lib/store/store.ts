import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '@/lib/store/rootReducer';

import { api } from '@/features/core';

export const setupStore = (preloadedState: Partial<ReturnType<typeof rootReducer>> = {}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(api.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });

  return { store };
};

export type AppStore = ReturnType<typeof setupStore>['store'];
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
