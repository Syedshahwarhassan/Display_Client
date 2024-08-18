import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

const Search = () => {
    const {term} = useParams()
    const {products} = useSelector((state)=>state.Product)
    const [searchproduct, setSearchPpoducts] = useState([])
    console.log(searchproduct)

    useEffect(()=>{
        setSearchPpoducts(
          products && products.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()))
        )
    },[products,term])
  return (
    <div>
 <div className="font-[sans-serif] bg-gray-100">
  <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Premium Sneakers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
    {searchproduct.map((x)=>{
        return(
           <div key={x._id}>
          <Link to={`/detail/${x._id}`}>
          <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
           
           <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
             <img src={x.images[0]} alt="Product 1" className="h-full w-full object-contain" />
           </div>
           <div>
             <h3 className="text-lg font-extrabold text-gray-800">{x.title}</h3>
             <p className="text-gray-600 text-sm mt-2 uppercase">{x.brand}</p>
             <h4 className="text-lg text-gray-800 font-bold mt-4">${x.price}</h4>
           </div>
         </div></Link>
           </div>
        )
    })}
    </div>
  </div>
</div>


    </div>
  )
}

export default Search