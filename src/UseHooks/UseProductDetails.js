import { useEffect, useState } from "react"

const UseProductDetails=(_id)=>{
    const [product,setproduct]=useState({})
   useEffect(()=>{
    fetch(`https://guarded-lake-94958.herokuapp.com/products/${_id}`)
    .then(res=>res.json())
    .then(data=>setproduct(data))
   },[_id])
    return   [product,setproduct]
}
export default UseProductDetails;