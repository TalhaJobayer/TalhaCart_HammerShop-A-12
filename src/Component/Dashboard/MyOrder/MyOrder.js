import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';


const MyOrder = () => {
    const [Order,setOrder]=useState([])
    const [user,loading]=useAuthState(auth)
    useEffect(()=>{
           if(user){
                   fetch(`http://localhost:5000/orderProductss?email=${user.email}`)
                   .then(res=>res.json())
                   .then(data=>{
                       console.log(data);
                    setOrder(data)
                   })
           }
    },[user])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
           
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
       <th></th>
        <th>Buyer Name</th>
        <th>Product Name</th>
        <th>Address</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
     
      {
          Order.map((singleOrder,index)=> <tr key={singleOrder._id} >
            <th>{index + 1}</th>
            <td>{singleOrder.email}</td>
            <td>{singleOrder.productName}</td>
            <td>{singleOrder.address}</td>
            <td>{singleOrder.price}</td>
          </tr>)
      }
     
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;