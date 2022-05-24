import React from 'react';
import { Link } from 'react-router-dom';
import UseProduct from '../../UseHooks/UseProduct';
import AllProductsDetails from './AllProductsDetails/AllProductsDetails';

const AllProducts = () => {
    const [product,setproduct]=UseProduct([])
    return (
        <div>
             <div className='flex justify-center mt-2'>
         <Link to={'/addProduct'}> <button className="btn btn-outline btn-info">Add Products</button></Link>
          </div>
        <div className='row container  '>
    
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