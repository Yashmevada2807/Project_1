import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/product/productSlice";


export const store = configureStore({
    reducer: {
        users: userReducer
    }
})