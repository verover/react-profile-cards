import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:true,
    data:false,
    error:false
}

const profileSlice = createSlice({
    name: "profiles",
    initialState,
    reducers: {
        addProfiles: (state, {payload}) => {
            return payload
        },
        clearProfiles: (state, {payload}) =>{
            return null
        }
    }
})

export const {addProfiles} = profileSlice.actions
export const {clearProfiles} = profileSlice.actions
export const getPayload = (state) => state.profiles
export default profileSlice.reducer;