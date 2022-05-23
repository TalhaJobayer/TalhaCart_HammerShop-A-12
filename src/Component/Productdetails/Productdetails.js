import React from 'react';
import { useParams } from 'react-router-dom';
import UseProductDetails from '../../UseHooks/UseProductDetails';

const Productdetails = () => {
        const {id}=useParams()
      const  [product,setproduct]=UseProductDetails(id)
    return (
        <div className='d-flex justify-content-center '>
           <div className='col-lg-4  mt-3  ' >
            <div className="card bg-base-100 shadow-xl ">
  <figure><img src={product.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <h4 className="card-title"><b>Price:</b>${product.price}</h4>
    <h5 className="card-title"><b>Quantity:</b>${product.quantity}</h5>
 
    <p><b>Description:</b>{product.description}</p>
    <div className="card-actions justify-end">
    <button  className="btn btn-primary">Purchase Now</button>
    </div>
  </div>
</div>
        </div>
           

            
        </div>
    );
};

export default Productdetails;