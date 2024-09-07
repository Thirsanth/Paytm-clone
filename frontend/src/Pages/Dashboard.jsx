import React from 'react'
import { AppBar } from '../components/AppBar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'

export default function Dashboard() {
  return (
    <div>
      <AppBar label={"Paytm"} username={"thirsanth"} />
      <Balance  value={10000} />
      <Users />
    </div>
  )
}
