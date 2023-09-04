import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
  wishlist: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total =
        state.total - action.payload.price * action.payload.quantity;
      state.quantity -= 1;
    },
    updateProductQuantity: (state, action) => {
      const updatedProducts = state.products.map((product) => {
        if (product._id === action.payload._id) {
          return {
            ...product,
            quantity: action.payload.quantity,
          };
        }
        return product;
      });

      const totalChange =
        (action.payload.quantity -
          state.products.find((p) => p._id === action.payload._id).quantity) *
        action.payload.price;

      return {
        ...state,
        products: updatedProducts,
        total: state.total + totalChange,
      };
      
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    updateWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const {
  addProducts,
  updateWishlist,
  removeFromWishlist,
  removeProduct,
  reset,
  updateProductQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
