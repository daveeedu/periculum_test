import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './customer/customerSlice';


export const store = configureStore({
  reducer: {
    customer: customerSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});