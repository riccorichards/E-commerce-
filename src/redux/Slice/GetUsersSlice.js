import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { userRequest } from "../../publicRequest";


const initialState = {
	users: [],
	status: null,
	error: null
}

export const fetchAllUsers = createAsyncThunk("/login/fetchAllUsers", async () => {
	const { data } = await userRequest({
		method: "get",
		url: "/user",
	})
	return data
})

const GetUsersSlice = createSlice({
	name: "users",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchAllUsers.pending, (state) => {
			state.status = "pending";
		})
			.addCase(fetchAllUsers.fulfilled, (state, action) => {
				state.status = "loaded";
				state.allUsers = action.payload;
			})
			.addCase(fetchAllUsers.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.error.message;
			});
	}
})

export default GetUsersSlice.reducer