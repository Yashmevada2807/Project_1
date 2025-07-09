import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: JSON.parse(localStorage.getItem('users')) || [],
        currentuser: JSON.parse(localStorage.getItem('currentuser')) || null,
        isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    },
    reducers: {
        setUsers: (state, action) => {
            state.users.push(action.payload)
        },
        setCurrentUser: (state, action) => {
            state.currentuser = action.payload
        },
        setIsAuthenticated: (state,action) => {
            state.isAuthenticated = action.payload
        },
        logout: (state) => {
            state.currentuser = null
            state.isAuthenticated = false
            localStorage.removeItem('currentuser')
            localStorage.setItem('isAuthenticated', false)
        }
    }
})

export const {setUsers, setCurrentUser, setIsAuthenticated, logout} = userSlice.actions

export const userReducer = userSlice.reducer