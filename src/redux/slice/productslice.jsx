import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[],
    product:[],
    error:null
}

const productslice = createSlice({
    name:"Product",
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products = action.payload
        },
        setProduct:(state,action)=>{
            state.product = action.payload
        },
        setError:(state,action)=>{
            state.error = action.payload
        }
    }
})

export const {setProduct,setProducts,setError} = productslice.actions

export default productslice.reducer