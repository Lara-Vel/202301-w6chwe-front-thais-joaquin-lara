import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteRobot } from '../../api/data';
import { RootState } from '../../App/store';
import { getRobotsList } from '../robotCardList/robotCardListSlice';
export interface CardState {
  isEditting: boolean;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CardState = {
  isEditting: false,
  status: 'idle',
};

const robotCardSlice = createSlice({
  name: 'robotCard',
  initialState,

  reducers: {
    toggleEdition: (state) => {
      state.isEditting = !state.isEditting;
    },
  },
});

export const removeRobot = createAsyncThunk(
  'robotCard/removeRobot',
  async (id: string) => {
    await deleteRobot(id);
    const newRobots = await getRobotsList();
    return newRobots;
  }
);

export const { toggleEdition } = robotCardSlice.actions;
export const robotSelector = (state: RootState) => state.robot;

export default robotCardSlice.reducer;
