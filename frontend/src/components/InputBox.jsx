export function InputBox({placeholder,label,type,onChange}){
    return <div className="flex flex-col text-left py-2">
        <label className="font-bold py-2">{label}</label>
        <input onChange={onChange} className=" rounded-md border shadow p-1" type={type} placeholder={placeholder} />
    </div>
}