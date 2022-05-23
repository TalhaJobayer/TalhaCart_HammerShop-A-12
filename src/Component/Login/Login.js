import React from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card p-5  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title flex  text-3xl justify-center">Login</h2>
    <div class="flex flex-col  border-opacity-50">
  <div class=" place-items-center">
  <input type="text" placeholder="Type here" class="input  flex  justify-center input-bordered input-info " />
  <input type="text" placeholder="Type here" class="input input-bordered  flex  justify-center mt-2 input-info " />


  </div>
  <button className="btn btn-outline flex  justify-center mt-2 ">Login</button>
  <div class="divider">OR</div>
  <div class="   place-items-center">
  <button onClick={()=>signInWithGoogle()} class="btn btn-outline">Login with google</button>
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Login;