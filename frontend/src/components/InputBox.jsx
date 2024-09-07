export function InputBox({placeholder,label,type}){
    return <div className="flex flex-col text-left py-2">
        <label className="font-bold py-2">{label}</label>
        <input className=" rounded-md border shadow p-1" type={type} placeholder={placeholder} />
    </div>
}