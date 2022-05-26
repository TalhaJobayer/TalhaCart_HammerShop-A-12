import React from 'react';
import { Link } from 'react-router-dom';
import UseProduct from '../../UseHooks/UseProduct';
import AllProductsDetails from './AllProductsDetails/AllProductsDetails';

const AllProducts = () => {
    const [product,setproduct]=UseProduct([])
    const handleDelete=(id)=>{
        const procced=window.confirm('Are you sure?')
       if(procced){
        fetch(`https://guarded-lake-94958.herokuapp.com/products/${id}`,{
            method:"DELETE",
           
        })
        .then(res=>res.json())
        .then(data=>{

            const remaining=product.filter(product._id!== id)
            setproduct(remaining)
            console.log(data)
        })
       }
   }
    return (
        <div>
             <div className='flex justify-center mt-2'>
         <Link to={'/addProduct'}> <button className="btn btn-outline btn-info">Add Products</button></Link>
          </div>
        <div className='row container  '>
    
    {
        product.map(singleProduct=><AllProductsDetails
        key={singleProduct._id}
        handleDelete={handleDelete}
        singleProduct={singleProduct}
        ></AllProductsDetails>)
    }
</div>
        </div>
    );
};

export default AllProducts;