import React from 'react'
import { useState } from 'react'
import { Heading } from '../components/Heading'
import { Button } from '../components/Button'
import { InputBox } from '../components/InputBox'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
export default function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount,setAmount] = useState(0);
  const navigate = useNavigate();
  // const notify = () => toast.success('Transaction Successfull');\
  // function notify(success){
  //   if(success){
  //  toast.success("Transferred Successfully");
  //   }
  //   else{
  //     toast.error("Transaction failed");
  //   }
  // }
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
                    {name[0].toUpperCase()}
                </div>
        </div>
            <div className="flex flex-col justify-center h-full mr-2 py-4">
            {name}
            </div>
        </div>
        {/* <div>
          <SubHeading  label={"Amount (in Rs)"} />
        </div> */}
         <div className="text-slate-500 text-md pt-1 ">
         Amount (in Rs)
    </div>

        <div>
          <InputBox onChange={e=>{setAmount(e.target.value)}} placeholder={"Enter Amount"} type={"number"} />
        </div>
        <div className='py-3'>
          <Button onClick={async ()=>{
            try{
            const response = await axios.post("http://localhost:3000/api/v1/account/transfer",{
              to:id,
              amount:amount
            },{
              headers:{
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            })
            if(response.status===200){
              // notify(true);
              // navigate("/dashboard");
              toast.success("Transaction successfull");
              setTimeout(()=>{
                navigate("/dashboard")
              },2000);
            }
          }
          catch{
              toast.error("Transaction failed/Insufficient balance");
          }     
          }} label={"Initiate Transfer"} />
          <Toaster />
        </div>
        </div>
    </div>
    </div>
  )
}
