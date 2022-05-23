import React from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate=useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit=(data)=>{
         console.log(data);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card p-5  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title flex  text-3xl justify-center">Register Here</h2>
    <div class="flex flex-col  border-opacity-50">
    <div class=" place-items-center">
  <form onSubmit={handleSubmit(onSubmit)}>
  <input
   type="text"
    placeholder="Write Your Name"
     class="input input-bordered  flex  justify-center mt-2 input-info "
     {...register("displayName", { required: true })}
      />
      <label className='label'>
      {errors.displayName?.type === 'required' && "Name is required"}
      </label>
      
  <input
   type="email"
    placeholder="Write Your Email"
     class="input input-bordered  flex  justify-center mt-2 input-info "
     {...register("email", { required:{
       value: true,
       message:'email is requierd'
     } })}
      />
       <label className='label'>
      {errors.email?.type === 'required' && <span className='text-red-500' >{errors.email.message}</span>}
      </label>
       <input type="password"
   placeholder="Write Your password" 
   class="input input-bordered  flex  justify-center mt-2 input-info "
   {...register("password", { required: {
       value:true,
       message:'password is required'
   },
    minLength:{
        value:6,
        message:'password must be 6 charecters or more'
    }
})}
   
   />
   <label className='label'>
      {errors.password?.type === 'required' && <span className='text-red-500' >{errors.password.message}</span>}
      {errors.password?.type === 'minLength' && <span className='text-red-500' >{errors.password.message}</span>}
      </label>
    <button style={{marginLeft:"20px",width:'80%'}} type='submit' className="btn btn-outline flex  justify-center mt-2 ">Register</button>
  </form>

  </div>
  <span>Already Have an account ?</span>
  <span > <b className='ml-8'><Link to="/logIn">Please Log In</Link></b> </span>
 
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

export default SignUp;