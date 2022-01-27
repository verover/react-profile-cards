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
        }
    }
})

export const {addProfiles} = profileSlice.actions
export const getPayload = (state) => state.profiles
export default profileSlice.reducer;