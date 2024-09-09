import React, { useEffect, useState } from 'react'
import { AppBar } from '../components/AppBar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
export default function Dashboard() {
  // const [searchParams] = useSearchParams();

  const [balance,setBalance] = useState();
  useEffect(()=>{
    const fetchbalance = async()=>{
      const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
        headers:{
          Authorization:"Bearer " + localStorage.getItem("token")
        }
        });
        // setBalance(response.data.balance);
        const bal = Math.round(response.data.balance*100)/100;
        setBalance(bal);

    }
    fetchbalance();
  },[balance])

  return (
    <div>
      <AppBar label={"Paytm"} username={localStorage.getItem("firstName")} />
      <Balance  value={balance} />
      <Users />
    </div>
  )
}
