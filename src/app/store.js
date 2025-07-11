import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer, userReducer } from "../features/product/productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const usersPersistConfig = {
    key: 'users',
    storage,
}

const rootReducer = combineReducers({
    users: persistReducer(usersPersistConfig, userReducer),
    products: productReducer,
})




export const store = configureStore({
    reducer: rootReducer,
})
export const persistor = persistStore(store)