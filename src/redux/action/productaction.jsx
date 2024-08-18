import axios from "axios"
import { setError, setProduct, setProducts } from "../slice/productslice"

export const FetchProducts = ()=>async(dispatch)=>{
    try {
        const {data} = await axios.get("http://localhost:4600/p1/products")
        dispatch(setProducts(data.products))
    } catch (error) {
        dispatch(
            setError(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : "An expected error has occured. Please try again later"
            )
          );
    }
}
export const FetchProduct = (id)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`http://localhost:4600/p1/product/${id}`)
        dispatch(setProduct(data.product))
    } catch (error) {
        dispatch(
            setError(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : "An expected error has occured. Please try again later"
            )
          );
    }
}