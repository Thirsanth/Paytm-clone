import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { Button } from '../components/Button'
import { InputBox } from '../components/InputBox'
export default function SendMoney() {
  return (

    <div className='flex justify-center h-screen bg-gray-100'>
      <div className="flex flex-col justify-center h-full  ">
        <div className='border h-min p-4 bg-white shadow-lg rounded-lg w-96'>
        <div className='flex flex-col justify-center items-center'>
            <Heading  label={"Send Money"} />
        </div>
        <div className="flex items-start py-10 ">
        <div className="  rounded-full h-12 w-12  bg-slate-200 flex justify-center mt-1 mr-2  ">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
        </div>
            <div className="flex flex-col justify-center h-full mr-2 py-4">
            Hello
            </div>
        </div>
        {/* <div>
          <SubHeading  label={"Amount (in Rs)"} />
        </div> */}
         <div className="text-slate-500 text-md pt-1 ">
         Amount (in Rs)
    </div>

        <div>
          <InputBox placeholder={"Enter Amount"} type={"number"} />
        </div>
        <div className='py-3'>
          <Button label={"Initiate Transfer"} />
        </div>
        </div>
    </div>
    </div>
  )
}
