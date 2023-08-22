import { configureStore, combineReducers } from "@reduxjs/toolkit"
import CartSlice from "./Slice/CartSlice.js"
import UserSlice from "./Slice/UserSlice.js"
import { persistReducer, persistStore, REGISTER, REHYDRATE, PERSIST, FLUSH, PAUSE, PURGE } from "redux-persist";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
	key: "root",
	storage,
}

const rootReducer = combineReducers({
	cart: CartSlice,
	login: UserSlice
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