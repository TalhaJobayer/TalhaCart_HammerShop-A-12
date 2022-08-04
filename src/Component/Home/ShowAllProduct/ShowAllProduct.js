import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import Product from '../Product/Product';



const AllProducts = () => {

    
    const [Products,setProducts]=useState([])
    const [loading, setLoading] = useState(true);
    
  
  useEffect(()=>{
   fetch('https://guarded-lake-94958.herokuapp.com/products')
   .then(res=>res.json())
  .then(data=>{
        setProducts(data)
         setLoading(false)
    })
   
  },[])

    return (
        <div>
            <h1 className=' m-3 text-4xl md:text-4xl  lg:text-6xl text-sky-500 flex justify-center '>All Hammers Are Here</h1>
            {
                loading ? <Loading></Loading> : <div className='row  m-3' >
                {
                    Products.map(product=><Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
            }
       
        </div>
    );
};

export default AllProducts;