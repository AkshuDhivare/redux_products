import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      return [...state, action.payload];
    },
    removefromcart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTocart, removefromcart } = cartSlice.actions;
export default cartSlice.reducer;
