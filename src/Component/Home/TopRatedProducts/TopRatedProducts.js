import React, { useState } from 'react';
import Product from '../Product/Product';

const TopRatedProducts = () => {
    const [Products,setProducts]=useState([])
    fetch('https://guarded-lake-94958.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    

    return (
        <div>
             <h1 className=' text-4xl md:text-4xl mt-3  lg:text-6xl text-sky-500 flex justify-center '>Top Most Searched Products</h1>
            <div className='row' >
            {
                Products.slice(2,6).map(product=><Product
                key={product._id}
                product={product}
                ></Product>)
            }
        </div>
        </div>
    );
};

export default TopRatedProducts;