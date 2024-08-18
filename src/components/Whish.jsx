import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Whish = () => {
    const {whish} = useSelector((state)=>state.Whish)
  return (
    <div>
       <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
  <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Your Favourites</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {whish && whish.map((x)=>{
        return(
           <div key={x.id}>
             <Link to={`/detail/${x.id}`}>
             <div className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
    
    <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
      <img src={x.images[0]} alt="Product 1" className="h-full w-full object-contain" />
    </div>
    <div className="p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-800">{x.title}</h3>
      <h4 className="text-lg text-gray-800 font-bold mt-2">${x.price}</h4>
      
    </div>
  </div></Link>
            </div>
        )
    })}
  </div>
</div>

    </div>
  )
}

export default Whish