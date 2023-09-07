import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin, fetchRegister, fetchUpdate } from "./apiCalled";

const initialState = {
  currentUser: null,
  token: null,
  status: null,
  error: null,
};

const UserSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "loaded";
        state.currentUser = action.payload.currentUser;
        state.token = action.payload.token;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = "loaded";
        state.currentUser = action.payload;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchUpdate.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUpdate.fulfilled, (state, action) => {
        state.status = "loaded";
        state.currentUser = action.payload;
      })
      .addCase(fetchUpdate.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { logout } = UserSlice.actions;
export default UserSlice.reducer;
