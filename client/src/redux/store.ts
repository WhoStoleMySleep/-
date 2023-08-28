import { configureStore } from '@reduxjs/toolkit';
import cakes from './reducers/cakes';

export default configureStore({
  reducer: {
    cakes
  }
});