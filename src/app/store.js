import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cartSlice"; // Correct import path

const store = configureStore({
  reducer: {
    cart: cartReducer, // Use cartReducer, not the entire cartSlice
  },
});

export default store;
