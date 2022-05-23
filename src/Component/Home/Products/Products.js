import React, { useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [Products,setProducts]=useState([])
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    

    return (
        <div className='row' >
            {
                Products.slice(0,6).map(product=><Product
                key={product._id}
                product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;