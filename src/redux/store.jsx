import { configureStore } from "@reduxjs/toolkit";
import Product from "./slice/productslice"
import Cart from "./slice/CartSlice"
import Auth from "./slice/userslice"
import Whish from "./slice/Whishslice"

const store = configureStore({
    reducer:{
        Product,
        Cart,
        Auth,
        Whish
    }
})

export default store