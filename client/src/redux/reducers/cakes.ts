import { createSlice } from '@reduxjs/toolkit';

export const cakes = createSlice({
  name: 'cakes',
  initialState: {
    cakes: [],
  },
  reducers: {
    setCakes: (state, action) => {
      state.cakes = action.payload;
    },
  },
});

export const { setCakes } = cakes.actions;

export default cakes.reducer;