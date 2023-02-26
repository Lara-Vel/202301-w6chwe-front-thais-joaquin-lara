import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../App/store';
import { Robot } from '../../types/interfaces';
import { getAllRobots } from '../../api/data';

export interface RobotCardListState {
  robots: Robot[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: RobotCardListState = {
  robots: [],
  status: 'idle',
};

export const getRobotsList = createAsyncThunk(
  'robotCardList/getRobotsList',
  async () => {
    const robots = await getAllRobots();
    return robots;
  }
);

export const robotCardListSlice = createSlice({
  name: 'robotCardList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRobotsList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getRobotsList.fulfilled,
        (state, action: PayloadAction<Robot[]>) => {
          state.status = 'idle';
          state.robots = action.payload;
        }
      )
      .addCase(getRobotsList.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const robotsListSelector = (state: RootState) => state.robots;

export default robotCardListSlice.reducer;
