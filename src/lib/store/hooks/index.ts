import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppState, AppDispatch } from '@/lib/store/models';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
