import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogin = createAsyncThunk(
  "/login/fetchLogin",
  async (params) => {
    const { data } = await axios.post(
      "http://localhost:8080/auth/login",
      params
    );
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  "/login/fetchRegister",
  async (params) => {
    const { data } = await axios.post(
      "http://localhost:8080/auth/register",
      params
    );
    return data;
  }
);

export const fetchUpdate = createAsyncThunk(
  "login/fetchUpdate",
  async ({ updateObj, token }) => {
    const { data } = await axios({
      method: "put",
      url: "http://localhost:8080/user",
      headers: {
        token: `Bearer ${token}`,
      },
      data: updateObj,
    });
    return data;
  }
);

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
