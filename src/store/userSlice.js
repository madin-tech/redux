import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user:{},
  open: false,
}

 export const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers: {
        loginName: (state, action)=>{
            state.user = action.payload;
           
        },
        loginPass: (state, action)=>{
            state.isAuth = action.payload;
           
        },
        logout:(state)=>{
            state.isAuth = false;
            state.user = "";
        },
        openDrawer:(state, action)=>{
             state.open = action.payload;
             console.log(state.open);
             
        }
    }
})
 
export const { loginName, logout, loginPass, openDrawer } = userSlice.actions;
export default userSlice.reducer;