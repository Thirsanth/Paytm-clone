import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';
import { InputBox } from '../components/InputBox';
import { Button } from '../components/Button';
import { BottomWarning } from '../components/BottomWarning';

export default function Signup() {
    const navigate = useNavigate();
    function btncheck(){

    }
  return (
    // <div className='bg-gray-500 '>
    <div className='bg-slate-400 h-screen flex justify-center'>
    <div className='flex flex-col justify-center  '>
      <div className='rounded-lg bg-white w-80 text-center p-2  h-max px-4'>
      <Heading label={"Sign up"} />
      <SubHeading label={"Enter your information to create an account"} />
      <InputBox label={"First Name"} placeholder={"John"} type={"text"} />
      <InputBox label={"Last Name"} placeholder={"Doe"} type={"text"} />
      <InputBox label={"Email"} placeholder={"John@gmail.com"} type={"email"} />
      <InputBox label={"Password"} placeholder={""} type={"password"} />
      <div className='py-4'>
        <Button onClick={btncheck} label={"Sign Up"} />
      </div>
      <BottomWarning label={"Already Have an account?"} buttontext={"Sign in"} to={"/signin"} />


      </div>
    </div>
    </div>

  )
}
