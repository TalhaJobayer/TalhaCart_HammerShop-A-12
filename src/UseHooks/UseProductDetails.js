import { useEffect, useState } from "react"

const UseProductDetails=(_id)=>{
    const [product,setproduct]=useState({})
   useEffect(()=>{
    fetch(`http://localhost:5000/products/${_id}`)
    .then(res=>res.json())
    .then(data=>setproduct(data))
   },[_id])
    return   [product,setproduct]
}
export default UseProductDetails;