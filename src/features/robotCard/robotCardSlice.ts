import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../App/store';

export interface Robot {
  id: string;
  name: string;
  img: string;
  speed: number;
  resistance: number;
  dateOfCreation: string;
}

export interface CardState {
  isEditting: boolean;
  status: 'idle' | 'loading' | 'failed';
  robots: Robot[];
}

const initialState: CardState = {
  isEditting: false,
  status: 'idle',
  robots: [],
};

// export const fetchRobot = createAsyncThunk('robot/fetchRobot', async () => {
//   const response = await getRobot();
//   const renderRobot = response.json();
//   return renderRobot;
// });

const robotCardSlice = createSlice({
  name: 'robot',
  initialState,

  reducers: {
    toggleEdition: (state) => {
      state.isEditting = !state.isEditting;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchRobot.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchRobot.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.status = action.payload;
  //     })
  //     .addCase(fetchRobot.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  // },
});

export const { toggleEdition } = robotCardSlice.actions;
export const robotSelector = (state: RootState) => state.robot;

export default robotCardSlice.reducer;
