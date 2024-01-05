import { useState } from "react";
import { handleChange } from "../ToDo/functions";

function ControlledComponent(){
const [inputValue,setInputValue]=useState('');
const [selectedOption,setSelectedOption]=useState('calicut');
const [isChecked,setIsChecked]=useState(false);
const [selected,isSelected]=useState('male');
const handleRadioChange=(event)=>{
    isSelected(event.target.value);
}
const handleCheckChange=(event)=>{
    setIsChecked(event.target.value);
}
const handleDropdownChange=(event)=>{
    setSelectedOption(event.target.value);
}

const handleChange=(event)=>{
    setInputValue(event.target.value);
}


    return(

        <form>
            <label>inputvalue
            <input type="text" value={inputValue} onChange={handleChange}></input>
            </label>
            <p>Input Value:{inputValue}</p>
            <label>select district:
                <select value={selectedOption} onChange={handleDropdownChange}>
                    <option value='calicut'>Calicut</option>
                    <option value='idukki'>Idukki</option>
                    <option value='trivandrum'>Trivandrum</option>
                    <option value='thrissur'>Thrissur</option>
                </select>
                <p>selected Option:{selectedOption}</p>
            </label>
            <label htmlFor="color">
                <input type="checkbox" name="color" checked={isChecked} onChange={handleCheckChange}></input>
                Blue
            </label>
            {isChecked &&<div>Blue is selected!</div>}
            <br/>
            <label >Gender:
            <label>
            
        <input type="radio" value="male" checked={selected} onChange={handleRadioChange} />
        Male
        </label>
        <br />
        <label>
        <input type="radio" value="female" checked={selected} onChange={handleRadioChange} />
        Female
        </label>
        <p>selected value:{selected}</p>
            </label>
        </form>
    )

}

export default ControlledComponent;
