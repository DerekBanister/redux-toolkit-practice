import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data.js'


export const userSlice = createSlice({
    name: "users",
    // Can access value of state by using useSelector 
    // with this key value pair
    initialState: { value: data },
    reducers: {
        addUser: (state, action) => {
            // code for adding a user
        }
    }
})

export default userSlice.reducer;