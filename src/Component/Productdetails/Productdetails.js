import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import UseProductDetails from '../../UseHooks/UseProductDetails';

const Productdetails = () => {
        const {id}=useParams()
      const  [product,setproduct]=UseProductDetails(id)
      // =============for form==============
      const [user, loading, error] = useAuthState(auth);
      const handlePurchaseInfo=(event)=>{
        event.preventDefault()
        const name=event.target.name.value
        const email=event.target.email.value
        const productName=event.target.productName.value
        const address=event.target.address.value
        const price=event.target.price.value
        const quantity=event.target.quantity.value
        const phoneNumber=event.target.phoneNumber.value
        const orderedProducts={name,email,productName,address,price,quantity,phoneNumber}
        console.log(orderedProducts);

        fetch(`http://localhost:5000/orderProducts`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(orderedProducts) 
    
        })
        .then(res=>res.json())
       .then(data=>{
        toast('added succesfully')
        // alert('added succesfully')
       
        event.target.reset()
      console.log('Success:', data);
      
    })
      }
      // =============for form==============


    return (

        <div className='flex container '>
         
         
           <div className='col-lg-4  mt-3  ' >
            <div className="card bg-base-100 shadow-xl ">
  <figure><img src={product.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <h4 className="card-title"><b>Price:</b>${product.price}</h4>
    <h5 className="card-title"><b>Quantity:</b>${product.quantity}</h5>
 
    <p><b>Description:</b>{product.description}</p>
    
  </div>
</div>
        </div>
      
    
        {/* form */}
      <div className=' m-3 '>
            <div className="card bg-base-100 shadow-5xl ">
  
  <div className="card-body ">
  
  <form onSubmit={handlePurchaseInfo} >
  <h2 className='text-xl'> User Name:</h2>
   <input name='name'  type="text" value={user.displayName} readOnly className="input input-bordered input-warning text-xl w-full max-w-xl" required/>
  <h2 className='text-xl'> Product Name:</h2>
   <input name='productName'  type="text" value={product.name} readOnly className="input input-bordered input-warning text-xl w-full max-w-xl" required/>
   <h2 className='text-xl'>Email:</h2>
   <input  name='email' type="email" value={user.email} readOnly className="input input-bordered input-warning text-xl w-full max-w-xl" required/>
   <h2 className='text-xl'>Price:</h2>
   <input  name='price'  type="number" value={product.price} readOnly className="input input-bordered input-warning text-xl w-full max-w-xl" required/>
  
 
   <h2 className='text-xl'>Quantity:</h2>
   <input  name='quantity' type="number"  placeholder="Minimum quantity 10 piece" className="input input-bordered input-warning w-full max-w-xl" required/>
   <h2 className='text-xl'>Address:</h2>
   <input  name='address' type="text"  placeholder="Full Address" className="input input-bordered input-warning w-full max-w-xl" required/>
   <h2 className='text-xl'>Phone Number:</h2>
   <input  name='phoneNumber' type="number"  placeholder="Write your Phone Number" className="input input-bordered input-warning w-full max-w-xl" required/>
  <div className='flex justify-center mt-2'>
  <button type='submit' className="btn btn-outline btn-info ">Purchase Now</button>
  </div>
  </form>
   
  
    
  </div>
</div>
        </div>
     
        </div>
    );
};

export default Productdetails;