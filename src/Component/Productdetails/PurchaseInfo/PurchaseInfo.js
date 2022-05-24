import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';

const PurchaseInfo = () => {
    const [user, loading, error] = useAuthState(auth);
   
    const handlePurchaseInfo=()=>{

    }
    return (
        <div className=' flex justify-center m-3 '>
            <div style={{width:'50%'}} className="card bg-base-100 shadow-5xl ">
  
  <div className="card-body ">
  
  <form onSubmit={handlePurchaseInfo} >
  <h2 className='text-xl'>Name:</h2>
   <input  type="text" value={user.displayName} readOnly className="input input-bordered input-warning text-xl w-full max-w-xl" required/>
   <h2 className='text-xl'>Email:</h2>
   <input  type="email" value={user.email} readOnly className="input input-bordered input-warning text-xl w-full max-w-xl" required/>
  
 
   <h2 className='text-xl'>Quantity:</h2>
   <input  name='Quantity' type="number"  placeholder="Minimum quantity 10 piece" className="input input-bordered input-warning w-full max-w-xl" required/>
   <h2 className='text-xl'>Address:</h2>
   <input  name='Quantity' type="text"  placeholder="Full Address" className="input input-bordered input-warning w-full max-w-xl" required/>
   <h2 className='text-xl'>Phone Number:</h2>
   <input  name='Quantity' type="number"  placeholder="Minimum quantity 10 piece" className="input input-bordered input-warning w-full max-w-xl" required/>
  <div className='flex justify-center mt-2'>
  <button type='submit' className="btn btn-outline btn-info ">Add Now</button>
  </div>
  </form>
   
  
    
  </div>
</div>
        </div>
    );
};

export default PurchaseInfo;