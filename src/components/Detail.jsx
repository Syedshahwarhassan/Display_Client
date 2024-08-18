import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { FetchProduct } from "../redux/action/productaction"
import { AddToCart } from "../redux/action/CartAction"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FetchWhish } from "../redux/action/Whishaction"
import { Favorite } from "@mui/icons-material"

const Detail = () => {
    const { id } = useParams()
    const { product } = useSelector((state) => state.Product)
    const { user } = useSelector((state) => state.Auth)
    const [main, setMain] = useState("")
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(FetchProduct(id))
    }, [dispatch, id])

    useEffect(() => {
        if (product && product.images && product.images.length > 0) {
            setMain(product.images[0])
        }
    }, [product])

const access = ()=>{
    toast.error("please login to access this role")
    navigate("/login")
}
    const addtocart = ()=>{
        if(product.stock>=1){
            dispatch(AddToCart(id,quantity))
            toast.success("add to cart successfull")
        }else{
            toast.error("product out of stock")
        }
    }  
    const addtofav = ()=>{
        dispatch(FetchWhish(id))
        toast.success("add to whishlist successfull")
    }  
    
    const increase = ()=>{
        if(product.stock <=quantity) return;
            setQuantity(quantity + 1)
        
    }
    const decrease = ()=>{
        if(quantity <=1) return;
            setQuantity(quantity - 1)
        
    }
     // Early return if product is not loaded yet
    if (!product) {
        return <div>Loading...</div>
    }
      

    return (
        <div className="">
              <div className="laptop_detail_wrapper flex justify-around items-center gap-6 py-28 max-lg:flex-col">
      <div className="image-detail flex justify-center items-center gap-4 p-4">
      <div className="2img">
        {product && product.images && product.images.map((x,index)=>{
          return <img key={index} src={x} onClick={()=>setMain(x)} className=' w-[100px] border-2 border-black p-2 h-[100px]' alt='' />
        })}
      </div>
      <div className="1img">
        <img src={main} className=' w-[400px] border-2 border-black p-2 h-[400px] max-sm:w-[200px] max-sm:h-[200px]' alt="" />
      </div>
      </div>
      <div className="laptop-content-detail w-1/3 max-xl:w-1/2 max-lg:w-3/4">
      <p className=' my-4 text-6xl cursor-pointer uppercase'>{ product.category}</p>
      <div className="rating flex justify-start my-4 items-center">
      <div className="feat-icons my-2">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  </div>
                  <p>(24 Customer reviews)</p>
      </div>
      <div className="price flex justify-start items-center my-4">
     <span className=' text-green-600'>Big Discount <span className=' text-red-600'>{product.discountpercent}%</span> : </span>
     <p className=' line-through'>${product.price}</p>
   </div>
      <div className="price flex justify-start items-center my-4">
      
        <span className=' text-green-600'>The Best Today Deal : </span>
        <p>${Math.round( product.price*(1- product.discountpercent/100))}</p>
      </div>
      <p className=' text-xl font-bold'>{product.title}</p>
      <p className=' my-4'>{ product.description}</p>
     
        <div className="des flex my-8 border-b-2 border-black max-sm:hidden  gap-10">
        <div className="de w-40">
        <i className="fa-solid fa-percent text-2xl max-sm:text-lg text-gray-400"></i>
        <p className=' text-base my-2 '>Big Discounts</p>
        </div>
        <div className="de w-40">
        <i className="fa-solid fa-truck text-2xl max-sm:text-lg text-gray-400"></i>
        <p className=' text-base my-2 '>Free Shipping</p>
        </div>
        <div className="de w-40">
        <i className="fa-regular fa-credit-card text-2xl max-sm:text-lg text-gray-400"></i>
        <p className=' text-base my-2 '>Secure Payment</p>
        </div>
        <div className="de w-40">
        <i className="fa-solid fa-map-location-dot text-2xl max-sm:text-lg text-gray-400"></i>
        <p className=' text-base my-2 '>Order Tracking</p>
        </div>
        </div>
      
      <p className=' my-4 text-xl uppercase'><span  className=' font-bold'>Brand :</span >{product.brand}</p>
      <p className=' my-4 text-xl'><span className=' font-bold'>Warranty :</span>{product.warranty}</p>
      <p className=' my-4 text-xl'><span className=' font-bold'>Stock :</span>{product.stock}</p>
     <div className='addtocarrrt flex justify-start items-center gap-6'>
     <div className=' flex gap-2'>
        <span className='p-4 cursor-pointer border' onClick={decrease}>-</span>
        <span className='p-4 cursor-pointer border'>{quantity}</span>
        <span className='p-4 cursor-pointer border' onClick={increase}>+</span>
      </div>
      <button className=' py-2 px-4 bg-blue-600 text-white hover:bg-blue-800 duration-200' onClick={user && user.user ? addtocart : access}>Add To Cart</button>
      <button className=' py-2 px-4 bg-blue-600 text-white hover:bg-blue-800 duration-200' onClick={user && user.user ? addtofav : access}><Favorite/></button>
     </div>
      </div>
     </div>
            {/* <div className="font-sans tracking-wide max-w-7xl mx-auto">
                <div className="bg-white md:min-h-[600px] grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="h-full">
                        <div className="p-4 h-full flex items-center max-md:flex-col">
                        <div className=" mx-auto max-md:flex max-md:items-center">
                                {product.images && product.images.length > 0 && product.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index}`}
                                        className="w-[100px] max-md:w-[60px] border p-1 mix-blend-multiply cursor-pointer"
                                        onClick={() => setMain(image)}
                                    />
                                ))}
                            </div>
                            <img
                                src={main || fallbackImage}
                                alt="Product"
                                className="lg:w-4/5 w-full h-full rounded-xl object-contain"
                            />
                           
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-600 via-gray-600 to-gray-700 py-6 px-8 h-full">
                        <div>
                            <h2 className="text-3xl font-semibold text-white">
                                {product.title || 'Product Title'}
                            </h2>
                            <p className="text-lg text-gray-400 mt-2">{product.category}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 justify-between mt-8">
                            <h3 className="text-white text-4xl line-through">${product.price}</h3>
                            <div className="flex justify-center text-xl text-green-400 items-center gap-4">
                                <p>Discount({product.discountpercent}%)</p>
                                <p className="text-white">${Math.ceil(product.price * (1 - product.discountpercent / 100))}</p>
                            </div>
                        </div>
                        <h2 className="text-xl text-white my-8">{product.title}</h2>
                        <h2 className="text-xl text-white my-8">{product.description}</h2>
                        <div className="mt-8 flex items-center justify-start gap-6">
                            <h3 className="text-lg font-semibold text-white">Quantity</h3>
                            <div className="flex mt-4 rounded-full overflow-hidden bg-gray-800 py-2.5 px-4 w-32">
                                <button type="button" className="bg-transparent w-full text-white font-semibold flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current inline" viewBox="0 0 124 124">
                                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                                    </svg>
                                </button>
                                <span className="bg-transparent w-full px-4 font-semibold flex items-center justify-center text-white text-base">
                                    1
                                </span>
                                <button type="button" className="bg-transparent w-full text-white font-semibold flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current inline" viewBox="0 0 42 42">
                                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button type="button" className="min-w-[200px] px-4 py-3.5 bg-gray-800 hover:bg-gray-900 text-white text-base rounded">Buy now</button>
                            <button type="button" className="min-w-[200px] px-4 py-3.5 border border-gray-800 bg-transparent text-white text-base rounded">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Detail
