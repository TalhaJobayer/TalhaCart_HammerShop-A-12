import React, { useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [Products,setProducts]=useState([])
    fetch('fakedata.json')
    .then(res=>res.json())
    .then(data=>{
       
        setProducts(data)
    })

    return (
        <div className='row' >
            {
                Products.map(product=><Product
                key={product.price}
                product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;