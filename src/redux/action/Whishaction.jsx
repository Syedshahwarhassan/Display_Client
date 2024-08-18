import axios from "axios"
import { setError, setWhish } from "../slice/Whishslice";

export const FetchWhish = (id)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`http://localhost:4600/p1/product/${id}`)
        const {product} = data;

        const addwhish = {
        id: product._id,
		title: product.title,
		description: product.description,
		images: product.images,
		price: product.price,
		stock: product.stock,
		brand: product.brand,
		discountpercent: product.discountpercent,
        }
        dispatch(setWhish(addwhish))
    } catch (error) {
        dispatch(setError(
            error.response && error.response.data.message ?
            error.response.data.message : 
            error.message ? 
            error.message :
            "An expected error has occured. Please try again later"
        ))
    }
}