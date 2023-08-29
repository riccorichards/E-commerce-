import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { publicRequest, userRequest } from "../../publicRequest"

export const fetchLogin = createAsyncThunk("/login/fetchLogin", async (params) => {
	const { data } = await publicRequest.post("/auth/login", params)
	return data
})

export const fetchRegister = createAsyncThunk("/login/fetchRegister", async (params) => {
	const { data } = await publicRequest.post("/auth/register", params)
	return data
})


export const fetchUpdate = createAsyncThunk("/login/fetchUpdate", async (params) => {
	const { data } = await userRequest({
		method: "put",
		url: "/user",
		data: params
	})
	return data
})


const initialState = {
	currentUser: null,
	status: null,
	error: null
}


const UserSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		logout: (state) => {
			state.currentUser = null
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLogin.pending, (state) => {
				state.status = "pending";
			})
			.addCase(fetchLogin.fulfilled, (state, action) => {
				state.status = "loaded";
				state.currentUser = action.payload;
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
			})
	}
})

export const { logout } = UserSlice.actions
export default UserSlice.reducer