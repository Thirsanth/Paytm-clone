import { useEffect, useState } from "react";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export function Users(){
    const [users,setUsers] = useState([]);
    const [search,setSearch] = useState("");
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${search}`)
        .then(response=>{
            setUsers(response.data.user)
        })
    },[users])

    return <div className="flex flex-col">
        <div>
            Users
        </div>
        <div>
            <InputBox onChange={e=>{setSearch(e.target.value)}} placeholder={"Search users"} label={""} />
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>

    </div>
}

function User({user}){
    const navigate = useNavigate();

    return         <div className="py-2">
    <div className="flex justify-between px-2">
        <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
        <div className="flex flex-col justify-center h-full  text-xl">
            {user.firstName[0].toUpperCase()}
        </div>
       </div>
        <div className="flex flex-col justify-center h-full  mr-4">
        {user.firstName} {user.LastName}
        </div>
        </div>
        <div className="flex">
            <Button onClick={()=>{
                navigate("/send?id="+user._id+"&name="+user.firstName);
            }} label={"Send money"}  />
        </div>
        

    </div>
    </div>

}