import { useEffect, useState } from "react"

const UseProduct=(_id)=>{
    const [product,setproduct]=useState([])
   useEffect(()=>{
    fetch(`http://localhost:5000/products`)
    .then(res=>res.json())
    .then(data=>setproduct(data))
   },[])
    return   [product,setproduct]
}
export default UseProduct;