import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../App/store';
import getRobot from './headerAPI';

export interface Robot {
  id: string;
  name: string;
  img: string;
  speed: number;
  resistance: number;
  dateOfCreation: string;
}

export interface CardState {
  isClicking: boolean;
  status: 'idle' | 'loading' | 'failed';
  robots: Robot[];
}

const initialState: CardState = {
  isClicking: false,
  status: 'idle',
  robots: [],
};

export const robotAsync = createAsyncThunk('header/getRobot', async () => {
  const response = await getRobot();

  return response;
});

export const headerSlice = createSlice({
  name: 'header',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(robotAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(robotAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isClicking = action.payload;
      })
      .addCase(robotAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const header = headerSlice;
export const selectNumber = (state: RootState) => state.getAllRobot.isClicking;
export const selectStatus = (state: RootState) => state.getAllRobot.status;

export default headerSlice.reducer;
