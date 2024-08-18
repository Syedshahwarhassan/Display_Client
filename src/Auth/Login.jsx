import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setError, setLoading, setUser } from "../redux/slice/userslice"
import { toast } from "react-toastify"
import Loader from "../components/Loader"


const Login = () => {
  const {loading} = useSelector((state)=>state.Auth)
  const [form, setForm] = useState({
    email:"",
    password:""
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {email, password} = form;

  const handlelogin = async (e)=>{
    e.preventDefault()
    dispatch(setLoading())
    const data = {email, password}
    try {
      const res = await fetch('http://localhost:4600/u1/login',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data)
      })
      const response = await res.json()
      dispatch(setUser(response))
      localStorage.setItem("user", JSON.stringify(response))
      if(response.success === true){
        toast.success(response.message)
        navigate("/")
      }
      if(response.success === false){
        toast.error(response.message)
        dispatch(setError(response.message))
      }
      return response;
    } catch (error) {
      dispatch(setError(error))
    }
  }
  return (
    <div>
        <h2 className="text-center text-4xl font-bold mt-10">Login</h2>
     {loading ? (<Loader/>):(
        <form className="space-y-6 font-[sans-serif] my-10 mb-40 border p-4 max-w-lg mx-auto" onSubmit={handlelogin}>
        <div className="relative flex items-center">
          <input type="email" placeholder="Enter Email" name="email" onChange={(e)=>setForm({...form, email:e.target.value})} className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-blue-500 outline-none" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 682.667 682.667">
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0Z" data-original="#000000" />
              </clipPath>
            </defs>
            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
              <path fill="none" strokeMiterlimit={10} strokeWidth={40} d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000" />
              <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000" />
            </g>
          </svg>
        </div>
        <div className="relative flex items-center">
          <input type="password" placeholder="Enter Password" name="password" onChange={(e)=>setForm({...form, password:e.target.value})} className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-blue-500 outline-none" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000" />
          </svg>
        </div>
        <div>
          <Link to='/forgot' className=" underline">forgot-password</Link>
        </div>
        <div className="flex">
          <input type="checkbox" className="w-4" />
          <label className="text-sm ml-4 ">Remember me</label>
        </div>
        <div className="flex">
          <p>If your are not registered then <Link to='/register' className=" underline hover:text-blue-400">Register</Link></p>
        </div>
        <button type="submit" className="!mt-8 px-8 py-2.5 bg-blue-500 text-sm text-white hover:bg-blue-600 rounded-sm">Submit</button>
      </form>
     )}

    </div>
  )
}

export default Login