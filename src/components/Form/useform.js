import { useState } from 'react';
import {useForm} from 'react-hook-form';
import validator from 'validator';


function LoginForm(){
    const {register,handleSubmit,formstate:{errors}}=useForm();
    const [errorMessage,setErrorMessage]=useState('');
    const validate=(value)=>{
        if(validate.isStrongPassword(value),{
            minLength:8,minLowerCase: 1,
            minUpperCase: 1,minNumbers: 1,minSymbols: 1
        }){
            setErrorMessage('Is Strong Password')
        }
        else{
            setErrorMessage('Is Not Strong Password')
        }

    }

    const onSubmit=(data)=>{console.log(data)};


}
return(

    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type='email' {...register("email",{required:true,pattern:/^\S+@\S+$/i})}></input>
        {errors.email&&<p>Email is required and it must be valid</p>}
        <label>Password</label>
        <input type='password' {...register("password",{required:true})} onChange={(e)=>ValidityState(e.target.value)}></input><br/>
        {errorMessage===''?null:<span style={{fontWeight:'bold',color:'red'}}>{errorMessage}</span>}
        <button type='submit'>submit</button>
    </form>
)
export default LoginForm;