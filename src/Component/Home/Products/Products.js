import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import Product from '../Product/Product';

const Products = () => {
    const navigate=useNavigate()
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
            <h1 className=' text-4xl md:text-4xl  lg:text-6xl text-sky-500 flex justify-center '>Hammers Are Here</h1>
            {
                loading ? <Loading></Loading> : <div className='row  m-3' >
                {
                    Products.slice(0,6).map(product=><Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
            }
       <div onClick={()=>navigate('ShowAll')} className="btn btn-primary flex justify-center "> View More</div>
        </div>
    );
};

export default Products;