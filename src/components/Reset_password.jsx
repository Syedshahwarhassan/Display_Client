import { useState } from "react"
// import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
// import { toast } from "react-toastify"
// import Loader from "../components/Loader"
import axios from "axios"
import { toast } from "react-toastify"


const Resetpassword = () => {
  const [password, setPassword] = useState()
  const {token} = useParams()
//   const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlelogin = async (e)=>{
    e.preventDefault()
  try {
    const {data} = await axios.post(`http://localhost:4600/u1/reset-password/${token}`, {password})
    if(data.success === true){
     toast.success(data.message)
     navigate('/login')
    }
    if(data.success === false){
     toast.success(data.message)
    }
  } catch (error) {
    toast.error("An error occurred: " + error.response?.data?.message || error.message);
  }
   
  }
  return (
    <div>
        <h2 className="text-center text-4xl font-bold mt-10">Reset Password</h2>
     
        <form className="space-y-6 font-[sans-serif] my-10 mb-40 border p-4 max-w-lg mx-auto" onSubmit={handlelogin}>
        <div className="relative flex items-center">
          <input type="password" placeholder="Enter New Password" name="password" onChange={(e)=>setPassword(e.target.value)} className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-blue-500 outline-none" />
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
        <div className="flex">
          <input type="checkbox" className="w-4" />
          <label className="text-sm ml-4 ">Remember me</label>
        </div>
        <button type="submit" className="!mt-8 px-8 py-2.5 bg-blue-500 text-sm text-white hover:bg-blue-600 rounded-sm">Submit</button>
      </form>
     

    </div>
  )
}

export default Resetpassword