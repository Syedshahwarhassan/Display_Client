import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart:JSON.parse(localStorage.getItem("cart")) ?? [],
    shipping:JSON.parse(localStorage.getItem("shipcost")) ?? Number(10),
    error:null
}
const update = (cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart))
}

// eslint-disable-next-line react-refresh/only-export-components
const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        setCart:(state,action)=>{
            const exist = state.cart.find((item)=>item.id === action.payload.id)
            if(exist){
                state.cart = state.cart.map((item)=>item.id === exist.id ? action.payload : item)
            }else{
                state.cart = [...state.cart, action.payload]
            }
            update(state.cart)
        },
        setShipping:(state,action)=>{
            state.shipping = action.payload
            localStorage.setItem("shipcost",JSON.stringify(state.shipping))
        },
        setError:(state,action)=>{
            state.error = action.payload
        },
        removecart:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
            update(state.cart)
        }
    }
})

export const {setCart,setShipping, setError,removecart} = CartSlice.actions

export default CartSlice.reducer