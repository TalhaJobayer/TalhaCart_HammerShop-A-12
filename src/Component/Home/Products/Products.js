import React, { useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [Products,setProducts]=useState([])
    fetch('https://guarded-lake-94958.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    

    return (
        <div>
            <h1 className=' text-4xl md:text-4xl  lg:text-6xl text-sky-500 flex justify-center '>Hammers Are Here</h1>
            <div className='row' >
            {
                Products.slice(0,6).map(product=><Product
                key={product._id}
                product={product}
                ></Product>)
            }
        </div>
        </div>
    );
};

export default Products;