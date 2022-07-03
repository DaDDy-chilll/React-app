import React from "react";
import Input from "./Input";
function Login(){
    return(
        <div className="container">
        <h1 className='mt-2'>Login & SignUp</h1>
        <Input 
        type='email'
        name='email'
        placeholder='Enter Your Email'
        />
        <Input 
        type='password'
        name='pass'
        placeholder='Enter Your Password'
        />
       
        <button type="submit" className='mb-2 submit-cs'>Submit</button>
    </div>
    )
}

export default Login;