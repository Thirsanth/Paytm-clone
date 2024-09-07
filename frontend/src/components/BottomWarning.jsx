import { Link } from "react-router-dom"
export function BottomWarning({label, buttontext, to}){
    return <div className="py-1 text-sm flex justify-center font-semibold">
        <div>{label}</div>
        <Link className="pointer underline font-semibold px-1" to={to} >
        {buttontext}
        </Link>
    </div>
}