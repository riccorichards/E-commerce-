import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./apiCalled";

const initialState = {
  getProducts: [],
  status: null,
  error: null,
};

const GetProducts = createSlice({
  name: "getProducts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "fultfilled";
        state.getProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default GetProducts.reducer;
