'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const {register , handleSubmit} = useForm()

    const handleLoginFunc = (data) =>{

        console.log(data , 'data')
        

    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center'>
            <div className='p-20 rounded-xl bg-black'>

<h1 className='font-bold text-2xl text-center mb-6'>Login Your Account</h1>

<form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>

    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input {...register("email")} type="email" className="input" placeholder="Your Email" />
</fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input {...register("password")} type="password" className="input" placeholder="Your Password" />
</fieldset>

<button className='btn w-full bg-slate-50 text-black'>Login</button>


</form>

<p className='mt-6'>Don't Have An Account ? <Link href={'/register'} className='text-red-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;