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
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            // code for deleting a user
            // maniupulating array to not include whichever userid is contained in state.value
            state.value = state.value.filter((user) => user.id !== action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addUser, deleteUser } = userSlice.actions;

// Can access value of state by using useSelector
export default userSlice.reducer;