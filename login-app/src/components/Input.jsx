import React from "react";

function Input(props){
    return <input type={props.type} name={props.name} id='email' className='my-2' placeholder={props.placeholder} />
}

export default Input;