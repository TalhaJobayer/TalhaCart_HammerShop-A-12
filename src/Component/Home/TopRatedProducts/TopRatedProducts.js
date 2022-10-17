import React, { useState } from 'react';
import Product from '../Product/Product';

const TopRatedProducts = () => {
    const [Products,setProducts]=useState([])
    fetch('https://guarded-lake-94958.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    

    return (
        <div>
             <h1 className=' m-2 text-xl md:text-2xl  lg:text-4xl text-sky-500 flex justify-center ' style={{fontWeight: "800"}}>Best Selling Products</h1>
            <div className='row' >
            {
                Products.slice(2,5).map(product=><Product
                key={product._id}
                product={product}
                ></Product>)
            }
        </div>
        </div>
    );
};

export default TopRatedProducts;