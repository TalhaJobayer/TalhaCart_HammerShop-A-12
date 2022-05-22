import React from 'react';

const Product = ({product}) => {
    const {name,price,description,image}=product
    return (
        <div className='col-lg-4  mt-3 ' >
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h4 className="card-title"><b>Price:</b>${price}</h4>
 
    <p><b>Description:</b>{description.slice(0,60)}....</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;