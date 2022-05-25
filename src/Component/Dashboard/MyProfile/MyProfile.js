import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import UseAdmin from '../../../UseHooks/UseAdmin';

const MyProfile = () => {
    const [user]=useAuthState(auth)

    const [admin]=UseAdmin(user)
    return (
        <div className='flex justify-center mt-5 '>


            <div className="card  p-5 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"><b>User Name:</b> {user.displayName}</h2>
    <h3><b>User Email: </b>{user.email}</h3>
    {admin &&<h3><b>you are Admin </b></h3>}
    
  </div>
</div>
        </div>
    );
};

export default MyProfile;