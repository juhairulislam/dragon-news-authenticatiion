'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const {register , handleSubmit , formState : {errors} , watch} = useForm()

    const handleRegisterFunc = (data) =>{

        console.log(data , 'data')
        
        const {email , name , password} = data ;
        console.log(email , name , password)
    }

    console.log(watch('email'))

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center'>
            <div className='p-20 rounded-xl bg-black'>

<h1 className='font-bold text-2xl text-center mb-6'>Register Your Account</h1>

<form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  <input {...register("name" , {required:"Name is required"})} type="name" className="input" placeholder="Your Name" />

  
  {
    errors.name && (
        <p className='text-red-500'>{errors.name.message}</p>
    )
     }
</fieldset>



    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input {...register("email", {required:"Email is required"})} type="email" className="input" placeholder="Your Email" />

  {
    errors.email && (
        <p className='text-red-500'>{errors.email.message}</p>
    )
     }
</fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input {...register("password" , {required:"Password is required"})} type="password" className="input" placeholder="Your Password" />

  
  {
    errors.password && (
        <p className='text-red-500'>{errors.password.message}</p>
    )
     }
</fieldset>

<button className='btn w-full bg-slate-50 text-black'>Register</button>


</form>

            </div>
        </div>
    );
};

export default RegisterPage;