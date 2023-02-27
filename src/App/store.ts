import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import robotCardListSlice from '../features/robotCardList/robotCardListSlice';
import robotCardSlice from '../features/robotCard/robotCardSlice';

export const store = configureStore({
  reducer: {
    robots: robotCardListSlice,
    robot: robotCardSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
