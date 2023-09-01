import { configureStore, combineReducers } from "@reduxjs/toolkit"
import CartSlice from "./Slice/CartSlice.js"
import UserSlice from "./Slice/UserSlice.js"
import { persistReducer, persistStore, REGISTER, REHYDRATE, PERSIST, FLUSH, PAUSE, PURGE } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import GetUsersSlice from "./Slice/GetUsersSlice.js";
import OrderSlice from "./Slice/OrderSlice.js";
import GetProducts from "./Slice/GetProducts.js";


const persistConfig = {
	key: "E-commerce",
	storage,
}

const rootReducer = combineReducers({
	cart: CartSlice,
	login: UserSlice,
	allUsers: GetUsersSlice,
	orders: OrderSlice,
	products: GetProducts
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoreActions: [REGISTER, REHYDRATE, PERSIST, FLUSH, PAUSE, PURGE]
		}
	})

})

export const persistor = persistStore(store)