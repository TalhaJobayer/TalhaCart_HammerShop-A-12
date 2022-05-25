import React from 'react';

const AllProductsDetails = ({singleProduct,handleDelete}) => {
  


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
  <div className='flex'>
  <button  className="btn btn-primary " style={{marginRight:'5px'}}>Update Quantity</button>
  <button onClick={()=>handleDelete(singleProduct._id)} className="btn btn-primary">Delete</button>
  </div>
</from>
</div>
</div>
    </div>
      
    );
};

export default AllProductsDetails;