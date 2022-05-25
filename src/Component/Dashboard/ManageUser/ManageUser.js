import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Loading/Loading';

const ManageUser = () => {

  const {data:users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/user',{
    method:"GET",
    headers:{
      authorization:`bearer ${localStorage.getItem('accessToken')}`
    }

  }).then(res=>res.json()))
      
  const handleAdmin=(email)=>{
    
    console.log(email);
        fetch(`http://localhost:5000/user/admin/${email}`,{
          method:"PUT",
          headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>{
          if(res.status === 403){
            toast.error('Failed to Make an admin');
        }
          return res.json()
        })
        .then(data=>{
          if(data.modifiedCount>0){
            refetch()
          toast('admin added succesfully')
          console.log(data)
          }
         
        })
  }
  
  const handleDelete=()=>{

  }
  if(isLoading){
    return <Loading></Loading>
  }
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index)=><tr
        key={user._id}>
          <th>{index+1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role !=='admin'&&<button onClick={()=>handleAdmin(user.email)} className="btn btn-outline">Admin</button>}</td>
          <td><button onClick={()=>handleDelete(users._id)} className="btn btn-outline">delete</button></td>
        </tr>)
      }
      
     
     
      
    </tbody>
  </table>
</div>
    );
};

export default ManageUser;