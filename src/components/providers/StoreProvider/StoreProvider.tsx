'use client';

import React, { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

import { setupStore, AppStore } from '@/lib/store';

const { store } = setupStore();

export function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
