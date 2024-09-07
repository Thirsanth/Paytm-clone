import { useState } from "react";
import { Button } from "./Button";
import { InputBox } from "./InputBox";

export function Users(){
    const [users,setUsers] = useState([{
        firstName:"Thirsanth",
        LastName:"Giridhar",
        _id:1
    }]);
    function checkerbtn(){

    }
    return <div className="flex flex-col">
        <div>
            Users
        </div>
        <div>
            <InputBox placeholder={"Search users"} label={""} />
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>

    </div>
}

function User({user}){

    return         <div className="py-2">
    <div className="flex justify-between px-2">
        <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
        <div className="flex flex-col justify-center h-full  text-xl">
            {user.firstName[0]}
        </div>
       </div>
        <div className="flex flex-col justify-center h-full  mr-4">
        {user.firstName} {user.LastName}
        </div>
        </div>
        <div className="flex">
            <Button label={"Send money"}   />
        </div>
        

    </div>
    </div>

}