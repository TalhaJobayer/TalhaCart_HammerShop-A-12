import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const navigate=useNavigate()
    const {name,price,description,image,_id}=product
    const handledetails=(_id)=>{
      navigate(`/hammer/${_id}`)
    }
    return (
        <div className='col-lg-4  mt-3 ' >
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h4 className="card-title " style={{marginTop:'-10px 0 -10px 10px'}}><b>Price:</b>${price}</h4>
 
    <p><b>Description:</b>{description.slice(0,75)}<b>....</b></p>
    <div className="card-actions justify-end">
      <button onClick={()=>handledetails(_id)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;