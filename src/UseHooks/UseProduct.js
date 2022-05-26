import { useEffect, useState } from "react"

const UseProduct=(_id)=>{
    const [product,setproduct]=useState([])
   useEffect(()=>{
    fetch(`https://guarded-lake-94958.herokuapp.com/products`)
    .then(res=>res.json())
    .then(data=>setproduct(data))
   },[])
    return   [product,setproduct]
}
export default UseProduct;