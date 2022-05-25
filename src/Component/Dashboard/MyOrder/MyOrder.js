import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';


const MyOrder = () => {
  const navigate=useNavigate()
    const [Order,setOrder]=useState([])
    const [user,loading]=useAuthState(auth)
    useEffect(()=>{
           if(user){
                   fetch(`http://localhost:5000/orderProductss?email=${user.email}`,{
                      method:"GET",
                      headers:{
                        "authorization":`beaerer ${localStorage.getItem('accessToken')}`
                      }
                   })
                   .then(res=>{
                     if(res.status===401||res.status===403){
                            signOut(auth)
                            localStorage.removeItem('accessToken')
                            navigate('/')
                      }
                        return res.json()})
                   .then(data=>{
                       console.log(data);
                    setOrder(data)
                   })
           }
    },[user])
    const handleDelete=(id)=>{
        const procced=window.confirm('Are you sure?')
           if(procced){
            fetch(`http://localhost:5000/orderProductss/${id}`,{
                method:"DELETE",
 
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('success',data)
                const remaining=Order.filter(singelproduct=>singelproduct._id !==id)
                console.log(remaining);
                setOrder(remaining)
            })
           }
    }
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
        <th>Quantity</th>
        <th></th>
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
            <td>{singleOrder.quantity}</td>
            <td><button onClick={()=>handleDelete(singleOrder._id)} class="btn btn-outline">Delete</button></td>
          </tr>)
      }
     
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;