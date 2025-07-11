import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchedProducts = createAsyncThunk('/products/fetchedProducts', async ({ page, limit }, thunkAPI) => {

    const offset = (page - 1) * limit
    const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`)
    return res.data

})


export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        totalProduct: 0,
        productPerPage: 20,
        isLoading: true,
        status: 'idle',
        hasMore: true,
        currentPage: 1,
        errors: {}
    },
    reducers: {
        removeProductsAfterLogout: (state) => {
                state.products = []
                state.totalProduct = 0,
                state.isLoading = true,
                state.status = 'idle',
                state.hasMore = true,
                state.currentPage = 1,
                state.errors = {}

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchedProducts.pending, (state) => {
                state.status = 'loading',
                    state.isLoading = true
            })
            .addCase(fetchedProducts.fulfilled, (state, action) => {
                state.status = 'success',
                    state.isLoading = false,
                    state.products.push(...action.payload.products)
                state.currentPage += 1
                if (action.payload.products.length < state.productPerPage) {
                    state.hasMore = false;
                }
                state.isLoading = false;
            })
            .addCase(fetchedProducts.rejected, (state, action) => {
                state.status = 'error'
                state.errors = action.error?.message || 'something went wrong'
                state.isLoading = false
            })
    }
})

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users:[],
        currentuser:  null,
        isAuthenticated:  false,
    },
    reducers: {
        setUsers: (state, action) => {
            state.users.push(action.payload)
        },
        setCurrentUser: (state, action) => {
            state.currentuser = action.payload
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
        logout: (state) => {
            state.currentuser = null
            state.isAuthenticated = false
            // localStorage.removeItem('currentuser')
            // localStorage.setItem('isAuthenticated', false)
        }
    }
})

export const { setUsers, setCurrentUser, setIsAuthenticated, logout } = userSlice.actions
export const { removeProductsAfterLogout} = productSlice.actions
export const productReducer = productSlice.reducer
export const userReducer = userSlice.reducer