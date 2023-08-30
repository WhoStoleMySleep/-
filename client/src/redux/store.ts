import { configureStore } from '@reduxjs/toolkit';
import cakes from './reducers/cakes';
import selectedCakes from './reducers/selectedCakes';

export default configureStore({
  reducer: {
    cakes,
    selectedCakes
  }
});