import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import robotCardSlice from '../features/RobotCard/robotCardSlice';
import robotCardListSlice from '../features/RobotCardList/robotCardListSlice';

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
