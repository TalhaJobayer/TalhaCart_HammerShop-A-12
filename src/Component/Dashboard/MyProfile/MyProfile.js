import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <div class="card = bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{user.name}</h2>
    <h3>If a dog chews shoes whose shoes does he choose?</h3>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProfile;