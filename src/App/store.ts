import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import robotCardSlice from '../features/robotCard/robotCardSlice';
import headerSlice from '../features/header/headerSlice';

export const store = configureStore({
  reducer: {
    robot: robotCardSlice,
    getAllRobot: headerSlice,
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
