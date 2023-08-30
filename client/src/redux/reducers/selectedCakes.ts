import { createSlice } from '@reduxjs/toolkit';

export const selectedCakes = createSlice({
  name: 'selectedCakes',
  initialState: {
    selectedCakes: [],
  },
  reducers: {
    setSelectedCakes: (state, action) => {
      state.selectedCakes = action.payload;
    },
  },
});

export const { setSelectedCakes } = selectedCakes.actions;

export default selectedCakes.reducer;