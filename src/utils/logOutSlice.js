import { createSlice } from "@reduxjs/toolkit";

const logOutSlice = createSlice({
    name:'logout',
    initialState:{
        isLogout: false

    },
    reducers:{
        destroyCookies:(state)=>{
            state.isLogout=true
        }

    }
});

export const {destroyCookies} = logOutSlice.actions;

export default logOutSlice.reducer;