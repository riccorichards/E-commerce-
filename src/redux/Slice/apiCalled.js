import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (accessToken, thunkAPI) => {
    const { getState } = thunkAPI;
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8080/carts",
      headers: {
        token: `Bearer ${accessToken}`,
      },
      data: getState(),
    });
    return data;
  }
);
