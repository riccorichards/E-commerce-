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
		addWishlist: (state, action) => {
			state.wishlist.push(action.payload)
		}
	}
})

export const { addProducts, addWishlist } = CartSlice.actions

export default CartSlice.reducer