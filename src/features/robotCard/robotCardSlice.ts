import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../App/store';

export interface CardState {
  isEditting: boolean;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CardState = {
  isEditting: false,
  status: 'idle',
};

const robotCardSlice = createSlice({
  name: 'robot',
  initialState,

  reducers: {
    toggleEdition: (state) => {
      state.isEditting = !state.isEditting;
    },
  },
});

export const { toggleEdition } = robotCardSlice.actions;
export const robotSelector = (state: RootState) => state.robot;

export default robotCardSlice.reducer;
