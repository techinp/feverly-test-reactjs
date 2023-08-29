import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backdrop: false,
  value: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleBackDrop: (state, action) => {
      console.log('action.payload :', action.payload);
      state.backdrop = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleBackDrop } = appSlice.actions;

export default appSlice.reducer;
