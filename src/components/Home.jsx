import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FetchProducts } from "../redux/action/productaction";

const Home = () => {
  const {products} = useSelector((state)=>state.Product)
  const [feature, setFeature] = useState([])
  const dispatch = useDispatch()
  useEffect(()=>{

    dispatch(FetchProducts())
  },[products,dispatch])
  useEffect(()=>{
    const feat = products.filter((item)=>item.feature_product === "yes")
    setFeature(feat)
  },[products,dispatch])

    // const images=[
    //     "https://frankfurt.apollo.olxcdn.com/v1/files/2p53zys5iwa42-KZ/image;s=600x0;q=50",
    //     "https://itrentalsdubai.com/wp-content/uploads/2023/09/Macbook-pro.png",
    //     "https://maytinhanphat.vn/img/n/tim-hieu-chi-tiet-ve-thuong-hieu-laptop-dell-truoc-khi-lua-chon.jpg",
    //     "https://mywishboard.com/thumbs/wish/r/r/n/600x0_pkvvzpwoabgbmveg_jpg_d9b9.jpg",
    //     "https://avatars.mds.yandex.net/i?id=fad0a46752d678ef6a641f9d5f672dbe325d7521-12937750-images-thumbs&n=13",
    //     "https://avatars.mds.yandex.net/i?id=67bd1102896936af3f6e85f2dd42c13755f114f8-9245043-images-thumbs&n=13"
    //   ];
    
      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
        <div className="hero-section relative">
            <div className=" absolute top-0 left-0 right-0 bottom-0 w-full bg-[rgba(0,0,0,0.2)]">

            </div>
            <div className="hero absolute top-[16%] max-lg:w-[70%] w-[40%] max-md:w-[80%] max-sm:w-[90%] left-[10%] max-sm:left-[4%]">
                <div className="hero-content">
                    <h2 className=" text-white text-4xl font-bold max-md:text-2xl">Welcome To Brand New <br />Apple Store</h2>
                    <p className="text-white font-bold text-2xl my-8 max-md:text-xl">Discount For Opening Shop</p>
                    <p className="text-white font-bold text-2xl my-8 max-md:text-xl">Apple offers exclusive discounts on select products, making premium tech more affordable. Check out their website for current deals.</p>

                    <div>
                        <Link to='/laptop'>
                        <button className="px-4 py-1 bg-black hover:shadow-2xl hover:shadow-lime-200 text-white text-lg hover:bg-transparent duration-500">See Store</button></Link>
                    </div>
                </div>
            </div>
        </div>

        {/* slider */}
        <div className="sliderr my-8 mx-20">
        <Carousel responsive={responsive}
          autoPlay
          autoPlaySpeed={2000}
          
          transitionDuration={500}
          infinite={true}
        >
           {feature.length > 0 && feature.map((x) => (
            <Link to={`/detail/${x._id}`} key={x._id}><img src={x.images[0]} className='m-auto w-[240px] h-[240px] px-2' alt='' /></Link>
          ))}
        </Carousel>
      </div>
      {/* slider */}

      {/* brands */}
    <div className=" my-20">
    <div className="home-brands mx-20 max-lg:mx-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="card-1 w-[80%] my-4 m-auto relative">
          <img src="https://images.pexels.com/photos/19546266/pexels-photo-19546266/free-photo-of-young-woman-using-a-laptop-and-smartphone-sitting-on-sofa.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-[450px]" alt="" />
          <div className=" absolute top-0 hover:bg-[rgba(0,0,0,0.3)] duration-500 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)] flex flex-col justify-end px-4 pb-4">
            <h2 className=" text-white text-2xl font-bold mb-2">Apple Discounted Laptops</h2>
            <p className=" text-white font-bold text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, doloribus!</p>
           <Link to='/laptop'> <button className="w-[100px] px-4 py-1 text-base bg-white text-black hover:text-white hover:bg-black duration-500 my-4">See Shop</button></Link>
          </div>
        </div>
        <div className="card-1 w-[80%] my-4 m-auto relative">
          <img src="https://images.pexels.com/photos/10421300/pexels-photo-10421300.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-[450px]" alt="" />
          <div className=" absolute top-0 hover:bg-[rgba(0,0,0,0.3)] duration-500 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)] flex flex-col justify-end px-4 pb-4">
            <h2 className=" text-white text-2xl font-bold mb-2">Apple Discounted Mobiles</h2>
            <p className=" text-white font-bold text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, doloribus!</p>
            <Link to='/laptop'> <button className="w-[100px] px-4 py-1 text-base bg-white text-black hover:text-white hover:bg-black duration-500 my-4">See Shop</button></Link>
          </div>
        </div>
        <div className="card-1 w-[80%] my-4 m-auto relative">
          <img src="https://images.pexels.com/photos/7240941/pexels-photo-7240941.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-[450px]" alt="" />
          <div className=" absolute top-0 hover:bg-[rgba(0,0,0,0.3)] duration-500 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)] flex flex-col justify-end px-4 pb-4">
            <h2 className=" text-white text-2xl font-bold mb-2">Apple Discounted Airpods</h2>
            <p className=" text-white font-bold text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, doloribus!</p>
            <Link to='/laptop'> <button className="w-[100px] px-4 py-1 text-base bg-white text-black hover:text-white hover:bg-black duration-500 my-4">See Shop</button></Link>
          </div>
        </div>
      </div>
    </div>
      {/* brands */}


      {/* Feature */}
      <div className="feature-wrapper my-20">
        <div className="feature">
        <div className="font-sans bg-gray-50 px-4 py-16">
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
  <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">Feature Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
    {feature.map((x)=>{
      return(
        <div key={x._id} className="bg-white overflow-hidden relative py-2 cursor-pointer ">
      <Link to={`/detail/${x._id}`}>
      <div className="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
        <img src={x.images[0]} alt="product1" className="h-full w-full object-contain" />
      </div></Link>
     
 
  <div className="bg-yellow-200 py-2 px-8 rounded-full absolute top-4 -right-6 rotate-45">
    <p tabIndex={0} className="focus:outline-none text-xs text-yellow-700">Featured</p>
  </div>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-bold text-gray-800">{x.title.slice(0,20)}</h3>
      </div>
      <div className=" flex justify-evenly items-center">
        <h4 className="text-lg text-blue-600 font-bold mt-3">${x.price}</h4>
      <div className="flex justify-center space-x-1 mt-3">
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
      </div>
    </div>
      )
    })}
  </div>
</div>

</div>

        </div>
      </div>
      {/* Feature */}

      {/* banner */}
      <div className="banner-wrapper relative my-10">
        <div className="content-bann absolute top-[20%] left-[10%] w-[50%] max-lg:w-[60%] max-md:top-[22%] max-md:left-[6%] max-md:w-[70%] max-sm:w-[80%]">
          <p className="text-white mb-4 text-lg">Limited time Offer</p>
          <p className=' text-4xl text-white font-bold max-md:text-xl'>The Best Quality Laptops</p>
          <p className=' pp text-lg text-white  my-4'>Discover the best quality laptops that excel in performance, reliability, and innovation. From powerful processors to stunning displays, these laptops redefine productivity and ensure a seamless computing experience.</p>
          <p className=' text-lg  my-4 text-white'>Buy Laptops At some Discount</p>
          <Link to='/laptop'><button className="py-2 my-2 text-black hover:bg-black hover:text-white duration-500 px-4 bg-white">Shop Now</button></Link>

        </div>
      </div>
      {/* banner */}


      {/* delivery */}
    <div className="my-12 font-[sans-serif] max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-4 max-md:gap-12 max-md:justify-center text-center max-md:max-w-lg mx-auto mt-16">
    <div className="rounded-md my-2">
      <div className="flex flex-col items-center">
      <i className="fa-solid fa-globe text-8xl"></i>
        <div className="mt-4">
          <h4 className="text-sm font-extrabold text-gray-800">Worldwide Shipping</h4>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm leading-relaxed text-gray-800">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
      </div>
    </div>
    <div className="rounded-md my-2">
      <div className="flex flex-col items-center">
      <i className="fa-solid fa-person-dress text-8xl"></i>
        <div className="mt-4">
          <h4 className="text-sm font-extrabold text-gray-800">Best Quality</h4>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm leading-relaxed text-gray-800">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
      </div>
    </div>
    <div className="rounded-md my-2">
      <div className="flex flex-col items-center">
      <i className="fa-solid fa-money-bill-1-wave text-8xl"></i>
        <div className="mt-4">
          <h4 className="text-sm font-extrabold text-gray-800">Simon Konecki</h4>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm leading-relaxed text-gray-800">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
      </div>
    </div>
    <div className="rounded-md my-2">
      <div className="flex flex-col items-center">
      <i className="fa-solid fa-lock text-8xl"></i>
        <div className="mt-4">
          <h4 className="text-sm font-extrabold text-gray-800">Simon Konecki</h4>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm leading-relaxed text-gray-800">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
      </div>
    </div>
  </div>
</div>

      {/* delivery */}


      {/* Blog */}
      <div className="bg-white font-[sans-serif] my-10 mt-20">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">LATEST BLOGS</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
      <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-60 object-cover" />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
          <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
        </div>
      </div>
      <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-60 object-cover" />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
          <h3 className="text-xl font-bold text-[#333]">Hacks to Supercharge Your Day</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
        </div>
      </div>
      <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
        <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-60 object-cover" />
        <div className="p-6">
          <span className="text-sm block text-gray-400 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
          <h3 className="text-xl font-bold text-[#333]">Trends and Predictions</h3>
          <hr className="my-6" />
          <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
        </div>
      </div>
    </div>
  </div>
  <div className=" text-center my-6">
  <button type="button" className="px-6 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-purple-700 outline-none bg-transparent hover:bg-purple-700 text-purple-700 hover:text-white transition-all duration-500">See More Blog</button>
  </div>

</div>


      {/* Blog */}
    </div>
  )
}

export default Home