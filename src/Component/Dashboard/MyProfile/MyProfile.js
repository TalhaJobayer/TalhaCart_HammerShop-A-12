import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user]=useAuthState(auth)
    return (
        <div className='flex justify-center mt-5 '>


            <div className="card  p-5 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"><b>User Name:</b> {user.displayName}</h2>
    <h3><b>User Email: </b>{user.email}</h3>
    
  </div>
</div>
        </div>
    );
};

export default MyProfile;