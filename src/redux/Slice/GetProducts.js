import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getProducts: [],
  status: null,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "getProducts/fetchProducts",
  async () => {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:8080/products`,
    });
    return data;
  }
);


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
