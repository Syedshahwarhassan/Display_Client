import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { removeuser } from "../redux/slice/userslice";
import { toast } from "react-toastify";
import { Favorite, Search } from "@mui/icons-material";

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const {cart} = useSelector((state)=>state.Cart)
    const {user} = useSelector((state)=>state.Auth)
    const {whish} = useSelector((state)=>state.Whish)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Logout = ()=>{
        dispatch(removeuser())
        toast.success("user lohout successfull")
    }
    const [search, setSearch] = useState(" ")

    const handlesearch = (e)=>{
      e.preventDefault()
      navigate(`/search/${search}`)
      setSearch("")
    }
    
  return (
    <div className=" z-20 bg-white top-0 fixed left-0 right-0">
        <nav className="navbar flex justify-between items-center h-[70px] px-4">
            <ul className="logo">
                <Link to="/"><h2 className=" text-2xl font-bold cursor-pointer">APPLE-STORE</h2></Link>
            </ul>
            <ul id="menu" className={menu ? "open":"close"}>
                <li className=" hover:text-cyan-400 duration-200"><Link to="/">Home</Link></li>
                <li className=" hover:text-cyan-400 duration-200"><Link to="/laptop">Shop</Link></li>
                <li className=" hover:text-cyan-400 duration-200"><Link to="/about">About</Link></li>
                <li className=" hover:text-cyan-400 duration-200"><a href=""> Contact</a></li>
                <li className=" hover:text-cyan-400 duration-200"><a href="">FAQS</a></li>
                
              <li className="md:hidden">
                <form action="" onSubmit={handlesearch}>
                <div className="bg-white flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
  <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Something..." className="w-full text-black outline-none  pl-4 text-sm" />
  {/* <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-all text-sm rounded-full px-5 py-2.5">Search</button> */}
    <Search/>
</div>

                </form>
              </li>
            </ul>
            <ul className=" flex justify-center items-center gap-4">
              <li className="max-sm:hidden">
                <form action="" onSubmit={handlesearch}>
                <div className="bg-white flex px-1 py-1 w-[200px] h-35px] rounded-full border border-blue-500 overflow-hidden mx-auto font-[sans-serif]">
  <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Something..." className="w-full outline-none text-black bg-white pl-4 text-sm" />
  <Search/>
 {/* <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5">Search</button> */}
</div>

                </form>
              </li>
              {user && user.user ? (
                <div className="flex items-center gap-2">
                      <li>
                <Link to='/shoppingcart'>
                <Badge badgeContent={cart.length} max={10} color="primary">
                <ShoppingCartIcon color="action" />
                </Badge>
                </Link>
                </li>
                      <li>
                <Link to='/whish'>
                <Badge badgeContent={whish.length} max={10} color="primary">
                <Favorite color="action" />
                </Badge>
                </Link>
                </li>
                <li><i onClick={Logout} className="fa-solid fa-right-from-bracket text-2xl text-gray-500 hover:text-black duration-500"></i></li>
                </div>
              ):(
                <div className=" flex items-center gap-2">
                    <li className=""><Link to="/login"><i className="fa-solid fa-user-plus text-xl text-gray-500 hover:text-black duration-500"></i></Link></li>
                </div>
              )}
                <li className="" onClick={()=>setMenu(!menu)}><Link to="#"><i className="fa-solid fa-bars text-xl lg:hidden"></i></Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar