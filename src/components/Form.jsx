import { useState } from "react";


function InputField({fieldName, type, value, setValue, placeholder}){
    return (
        <div className="input_container">
        <h6 className="text-m text-slate-900 font-medium">{fieldName}</h6>
        <input type={type} 
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                placeholder={placeholder}
                required/>
        </div>
    )
}


function Form({route, method}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const name = method === "login" ? "Login": "Register"

    return (
        <form className="items-center h-svh">
            <h3 className="text-2xl text-slate-900 font-bold m-4">{name}</h3>
            <InputField 
                fieldName="Username"
                value={username}
                setValue={setUsername}
                placeholder="User"/>
            
            <InputField 
                fieldName="Email"
                value={email}
                setValue={setEmail}
                placeholder="example@email.com"
                />
            
            <InputField 
                fieldName="Password"
                value={password}
                setValue={setPassword}
                placeholder="Secret password"/>
        

            <button
                type="submit"
                className="submitBtn"> 
                {name}
            </button>
        </form>
    );
}

export default Form