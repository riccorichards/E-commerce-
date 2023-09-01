import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
	orders: [],
	status: null,
	error: null
}

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async (accessToken, thunkAPI) => {
	const { getState } = thunkAPI
	
	const orders = getState().data
	console.log({ orders })
	const { data } = await axios({
		method: "post",
		url: "http://localhost:8080/orders",
		data: orders,
		headers: {
			token: `Bearer ${accessToken}`
		}
	})
	return data
}) 

const OrderSlice = createSlice({
	name: "orders",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchOrders.pending, (state) => {
     state.status = "pending"
		}).addCase(fetchOrders.fulfilled, (state, action) => {
			state.status = "fulfilled"
			state.orders = action.payload
		 }).addCase(fetchOrders.rejected, (state, action) => {
			state.status = "rejected"
			state.error = action.error.message
		 })
	}
})

export default OrderSlice.reducer