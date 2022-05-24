import React from 'react';
import UseProduct from '../../UseHooks/UseProduct';
import AllProductsDetails from './AllProductsDetails/AllProductsDetails';

const AllProducts = () => {
    const [product,setproduct]=UseProduct([])
    return (
        <div>
            

            <div className='row container'>
    
    {
        product.map(singleProduct=><AllProductsDetails
        key={singleProduct._id}
        singleProduct={singleProduct}
        ></AllProductsDetails>)
    }
</div>
        </div>
    );
};

export default AllProducts;