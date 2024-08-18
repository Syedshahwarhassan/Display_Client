import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Laptops from "./components/Laptops"
import Detail from "./components/Detail"
import Scroll from "./components/Scroll"
import {ToastContainer} from "react-toastify"
import ShoppingCart from "./components/ShoppingCart"
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import About from "./components/About"
import Whish from "./components/Whish"
import { useSelector } from "react-redux"
import Page404 from "./components/Page404"
import Forgotpassword from "./components/ForgotPassword"
import Resetpassword from "./components/Reset_password"
import Search from "./components/Search"

const App = () => {
  const {user} = useSelector((state)=>state.Auth)
  return (
    <div>
      <Scroll/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/laptop" element={<Laptops/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/forgot" element={<Forgotpassword/>}></Route>
        <Route path="/reset-password/:token" element={<Resetpassword/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/search/:term" element={<Search/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        {user && user.user ? (
          <>
          <Route path="/shoppingcart" element={<ShoppingCart />}>
          </Route><Route path="/whish" element={<Whish />}></Route>
          </>
        ):(<Route path="*" element={<Page404/>}></Route>)}
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default App