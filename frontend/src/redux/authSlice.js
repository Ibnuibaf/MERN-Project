import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState ={
    userInfo :  null,
    adminInfo : null
}
// const direct=useNavigate()
const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        setCredentials : (state,action) =>{
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state,action)=>{
            state.userInfo = null
            localStorage.clear()
            window.location.href='/'
        },
        setAdminCredentials : (state,action) =>{
            state.adminInfo = action.payload
            localStorage.setItem('adminInfo', JSON.stringify(action.payload))
        },
        Adminlogout: (state,action)=>{
            state.adminInfo = null
            localStorage.clear()
            window.location.href='/'
        }
    }
})

export const {setCredentials,logout,setAdminCredentials,Adminlogout} = authSlice.actions

export default authSlice.reducer