import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchProducts } from "../redux/action/productaction"
import { Link } from "react-router-dom"


const Laptops = () => {
    const { products } = useSelector((state) => state.Product);
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const [items, setItems] = useState([]);
    console.log(items)
    const [trend, setTrend] = useState([]);
    const [page, setPage] = useState(1);
    const [minprice, setMinprice] = useState(0);
    const [maxprice, setMaxprice] = useState(Infinity);
    const handlepage = (select)=>{
      setPage(select)
    }

    const totalpages = Math.ceil(items.length / 9)
  
    const categories = ["laptop", "mobile", "airpords"];
    // const prices = ["1000", "2000", "3000","4000","5000","6000"];
  
    const filtercate = (cate) => {
      if (product && product.length) {
        const filtered = cate ? product.filter((item) => item.category === cate) : product;
        setItems(filtered);
      }
    };
    
    // Fetch products only once when the component mounts
    useEffect(() => {
        dispatch(FetchProducts());
    }, [dispatch]);
    
    useEffect(()=>{
        const tren = product.filter((item)=>item.trending === "yes")
        setTrend(tren)
    },[product])

    // pricefilter

    // const pricefilter = (pricee) => {
    //   if (product && product.length) {
    //     const filtered = pricee ? product.filter((item) => item.price  <=pricee) : product;
    //     setItems(filtered);
    //   }
    // };
     // pricefilter

    // Update product and items when products change
    const pricefilter = (min, max) => {
      if (product && product.length) {
          const filtered = product.filter((item) => item.price >= min && (max === Infinity || item.price <= max));
          setItems(filtered);
      }
  };
    useEffect(() => {
     pricefilter(minprice,maxprice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minprice,maxprice,product]);
    useEffect(() => {
      setProduct(products);
      setItems(products);
    }, [products]);
  return (
    <div>
    <section className="py-10 relative">
  <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
   
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
        {/* first-grid */}
        <div className="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
          <h6 className="font-medium text-xl leading-7 text-black mb-5">Filters</h6>
          <div className="flex flex-col
           items-center mb-5 gap-1">
            {/* <Link onClick={()=>setItems(product)}><p className="px-4 py-2 rounded-full border  cursor-pointer">All Products({product.length})</p></Link> */}
           <select name="" id="" className="w-full gridd" onChange={(e)=>filtercate(e.target.value)}>
            <option value="">Select Category</option>
            {categories.map((x)=>{
                return <option key={x} value={x}>{x}</option>
            })}
           </select>
          </div>
          {/* <div className="relative w-full mb-4">
            <select onChange={(e)=>pricefilter(e.target.value)} id="FROM" className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
              <option value="">Select Price Range</option>
              {prices.map((x)=>{
                return <option key={x} value={x}>${x}</option>
              })}
              
            </select>
            <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div> */}
                <h2 className="mb-2">Filter by Price</h2>
            <div className="flex items-center gap-2">
                <input
                className="border w-1/2 h-8 p-1 rounded-lg"
                    type="number"
                    value={minprice}
                    onChange={(e) => setMinprice(Number(e.target.value))}
                    placeholder="Min Price"
                />
                <input
                className="border w-1/2 h-8 p-1 rounded-lg"
                    type="number"
                    value={maxprice}
                    onChange={(e) => setMaxprice(Number(e.target.value))}
                    placeholder="Max Price"
                />
            </div>
        </div>
          {/* first-grid */}
        <div className="mt-7 box rounded-xl border border-gray-300 bg-white p-2 w-full md:max-w-sm">
            <h2 className="text-center text-xl my-4 font-bold">Most Sales</h2>
      {trend.map((t)=>{
        return (
          <div key={t._id}>
           <Link to={`/detail/${t._id}`}>
           <div key={t._id} className="flex gap-2 overflow-hidden cursor-pointer my-2">
            <div className="w-24 h-24 shrink-0 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src={t.images[0]} alt="product1" className="h-full w-full object-contain" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-800">{t.title.slice(0,20)}...</h3>
              <h4 className="text-lg text-blue-600 font-bold mt-2">${t.price}</h4>
            </div>
          </div></Link>
          </div>
        )
      })}

        </div>
      </div>
      {/* products */}
      <div className="col-span-12 md:col-span-9 mx-1" >
    <div className="font-[sans-serif] bg-gray-100 rounded-lg">
  <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
    <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-12">Apple Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-xl:gap-4 gap-6">
     {items&&items.slice(page*9-9,page*9).map((x)=>{
        return(
           <div key={x._id}>
           <Link to={`/detail/${x._id}`}>
           <div  className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
           
            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={x.images[0]} alt="Product 1" className="h-full w-full object-contain" />
            </div>
         

            <div>
              <h3 className="text-lg font-extrabold text-gray-800">{x.title.slice(0,34)}...</h3>
             <div className="flex space-x-1.5 mt-4">
  <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
  </svg>
  <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
  </svg>
  <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
  </svg>
  <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
  </svg>
  <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
  </svg>
             </div>

             <div className="flex justify-between items-center">
             <h4 className="text-lg text-gray-800 font-bold mt-4 line-through">${x.price}</h4>
             <h4 className="text-lg text-gray-800 font-bold mt-4">${Math.ceil(x.price*(1-x.discountpercent/100))}</h4>
             </div>
            </div>
          </div></Link>
            </div>
        )
     })}
    </div>
    <ul className="flex space-x-4 justify-center my-10">
  <li onClick={()=>handlepage(page-1)} className={page>1 ?"flex items-center justify-center shrink-0 cursor-pointer text-base font-bold text-blue-500 w-10 h-10 rounded-lg":"hidden"}>
    Prev
  </li>
<li className=" flex items-center gap-2">
{[...Array(totalpages)].map((_,x)=>{
  return <li onClick={()=>handlepage(x+1)} key={x} className={page === x+1 ? "flex items-center justify-center shrink-0 bg-blue-500  border-2 border-blue-500 cursor-pointer text-base font-bold text-white w-10 h-10 rounded-lg":"flex items-center justify-center shrink-0 bg-gray-200  border-2 border-blue-500 cursor-pointer text-base font-bold text-white w-10 h-10 rounded-lg"}>
  {x+1}
</li>
})}
</li>

  <li onClick={()=>handlepage(page+1)} className={page<totalpages?"flex items-center justify-center shrink-0 cursor-pointer text-base font-bold text-blue-500 w-10 h-10 rounded-lg":"hidden"}>
    Next
  </li>
</ul>

  </div>
</div>

      </div>
    </div>
  </div>
</section>

                                            
    </div>
  )
}

export default Laptops