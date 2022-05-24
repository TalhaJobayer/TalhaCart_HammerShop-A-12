import React from 'react';

const AllProductsDetails = ({singleProduct}) => {
   


    return (
       
            <div className='col-lg-4  mt-3  ' >
        <div className="card bg-base-100 shadow-xl">
<figure><img src={singleProduct.image} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">{singleProduct.name}</h2>
<h4 className="card-title " ><b>Price:</b>${singleProduct.price}</h4>
<h4 className="card-title "><b>Quantity:</b>${singleProduct.quantity}</h4>

<p><b>Description:</b>{singleProduct.description?.slice(0,60)}<b>....</b></p>
<from className="card-actions justify-center">
   
    <input name='quantity' type="number" placeholder="add Quantity" className="input input-bordered input-success  max-w-xs" />
  <button  className="btn btn-primary">Update Quantity</button>
</from>
</div>
</div>
    </div>
      
    );
};

export default AllProductsDetails;