import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data.json'
export const userSlice = createSlice({
    name: "users",
    initialState: { value: data },
    reducers: {
        addUser: (state, action) => {
            // code for adding a user
        }
    }
})