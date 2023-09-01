import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	products: [],
	quantity: 0,
	total: 0,
	wishlist: []
}

const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProducts: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload)
			state.total += action.payload.price * action.payload.quantity
		},
		removeProduct: (state, action) => {
			state.products = state.products.filter(product => product._id !== action.payload)
		},
		reset: (state) => {
			state.products = []
			state.quantity = 0
			state.total = 0
			state.wishlist = []
		},
		addWishlist: (state, action) => {
			state.wishlist.push(action.payload)
		},
		removeFromWishlist: (state, action) => {
			state.wishlist = state.wishlist.filter(product => product._id !== action.payload)
		},
	}
})

export const { addProducts, addWishlist, removeFromWishlist, removeProduct, reset } = CartSlice.actions

export default CartSlice.reducer