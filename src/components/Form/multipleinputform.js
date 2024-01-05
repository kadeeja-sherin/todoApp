import { useState } from "react";


function Multiple(){

    const [FormData,setFormData]=useState({name:"",email:"",message:""});
    const [inputValue,setInputValue]=useState('');
    const [inputError,setInputError]=useState('null');

    const handleInputChange=(event)=>{
        const value=event.target.value;
        setInputValue(value);

        if(value.length<5){
            setInputError('input value must be atleast 5 character');
        }
        else{
            setInputError(null);
        }
    }
    const handleFormChange=(event)=>{
        const{name,value}=event.target;
        setFormData((prevFormData)=>({...prevFormData,[name]:value}));
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Name: ${FormData.name},Email:${FormData.email},Message:${FormData.message}`);
        if(inputValue.length>=5){
            //submit form

        }
        else{
            setInputError('input must be atleast 5 charecters');
        }
    }



return(
    <form onSubmit={handleSubmit}> 
        {/* <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={FormData.name} onChange={handleFormChange}></input>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={FormData.email} onChange={handleFormChange} ></input>
        <label htmlFor="message">Message:</label>
        <textarea  id="message" name="message" value={FormData.message} onChange={handleFormChange}></textarea> */}
        <label>Fruit:<input type="text" value={inputValue} onChange={handleInputChange}></input></label>
        {inputError && <div style={{color:'red'}}>{inputError}</div>}
        <button type="submit">Submit</button>
    </form>
);
}

export default Multiple;