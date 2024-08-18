import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:JSON.parse(localStorage.getItem("user")),
    loading:false,
    error:null
}

 
const userslice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        setUser:(state,action)=>{
           state.loading = false
           state.error = null
           state.user = action.payload
        },
        setError:(state,action)=>{
            state.error = action.payload
        },
        setLoading:(state)=>{
            state.loading = true
        },
        removeuser:(state)=>{
            state.user = null,
            localStorage.removeItem("user")
        }
    }
})

export const {setLoading,setUser, setError,removeuser} = userslice.actions

export default userslice.reducer