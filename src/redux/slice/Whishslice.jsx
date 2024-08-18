import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    whish:JSON.parse(localStorage.getItem("whish"))??[],
    error:null
}

const update = (wh)=>{
    localStorage.setItem("whish", JSON.stringify(wh))
}
// eslint-disable-next-line react-refresh/only-export-components
const Whishslice = createSlice({
    name:"Whish",
    initialState,
    reducers:{
        setWhish:(state,acyion)=>{
            const exists = state.whish.find((item)=>item.id === acyion.payload.id)
            if(exists){
                state.whish = state.whish.map((x)=>x.id === exists ? acyion.payload : x)
            }else{
                state.whish = [...state.whish, acyion.payload]
            }
            update(state.whish)
        },
        setError:(state,action)=>{
            state.error = action.payload
        }
    }
})
export const {setError,setWhish} = Whishslice.actions

export default Whishslice.reducer