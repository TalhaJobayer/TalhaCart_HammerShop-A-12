import React, { useEffect } from 'react';
import {useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading'
import UseGetToken from '../../UseHooks/UseGetToken';

const Login = () => {
  const navigate=useNavigate()
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
   

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [Token]=UseGetToken(user||gUser)
    let signError;
  
     useEffect( () =>{
      if (Token) {
          navigate(from, { replace: true });
      }
  }, [Token, from, navigate])
   
    if (error||gError) {
      signError= <p className='text-red-500'>{error?.message||gError.message}</p>
       
    }
    if (loading||gLoading) {
      return <Loading></Loading>;
    }
    
   
    const onSubmit= async(data)=>{
     console.log(data);
   await signInWithEmailAndPassword(data.email,data.password)
    }
    
    return (
        <div className='flex mt-3 mb-3  justify-center items-center'>
            <div style={{padding:'10px 80px 10px 80px'}} className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title flex  text-3xl justify-center">Login</h2>
    <div className="flex flex-col  border-opacity-50">
        
  <div className=" place-items-center">
  <form onSubmit={handleSubmit(onSubmit)}>
  <input
   type="email"
    placeholder="Write Your email"
     className="input input-bordered  flex  justify-center mt-2 input-info "
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
   className="input input-bordered  flex  justify-center mt-2 input-info "
   {...register("password", {
        required: {
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
    
    <button style={{marginLeft:"20px",width:'80%'}} type='submit' className="btn btn-outline flex  justify-center mt-2 ">Login</button>
  </form>
  {signError}

  </div>
  <span>Didn't Have an account ?</span>
  <span > <b className='ml-8'><Link to="/signUp">Please Register</Link></b> </span>
 
  <div className="divider">OR</div>
  <div className="   place-items-center">
  <button onClick={()=>signInWithGoogle()} className="btn btn-outline">Login with google</button>
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Login;