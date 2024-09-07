import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
export default function Signin() {
  function btncheck(){

  }
  return (
  
      <div className='bg-slate-400 h-screen flex justify-center'>
    <div className='flex flex-col justify-center  '>
        <div className='rounded-lg bg-white w-80 text-center p-2  h-max px-4'>
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your accouunt"} />
        <InputBox label={"Email"} placeholder={"John@gmail.com"} type={"email"} />
        <InputBox label={"Password"} placeholder={""} type={"password"} />
        <div className='py-4'>
        <Button onClick={btncheck} label={"Sign in"} />
      </div>
      <BottomWarning label={"Dont have an account?"} buttontext={"Sign up"} to={"/signup"} />

        </div>
    </div>
    </div>
  
  )
}
