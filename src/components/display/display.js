import { useState } from "react";
import React from "react";

function Display(){

    const [serviceList, setServiceList] = useState([{service : ""}]);
    console.log(serviceList);

    const handleServiceAdd = () => {
        setServiceList([...serviceList,{service : ""}])
    }

    const handleServiceChange = (e, index) => {
        const {name , value } = e.target
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);

    }
    return(
        <form className="Display" autoComplete="off">
            <div className="form-field">
                <label htmlFor="service"><h2>DATA</h2></label>

{serviceList.map((singleService,index) => (               
                <div key={index} className="services">
                    <div className="first-division">
                        <input name="service" type="text" id="service" required
                        value={singleService.service}
                        onChange={(e) => handleServiceChange(e, index)}
                        ></input>
                        {serviceList.length - 1 === index && serviceList.length < 4 && 
                        (
                        <button type="button" className="add-btn"
                        onClick={handleServiceAdd}
                        >
                        <span>ADD</span>
                    </button>
                        )}
                        
                    </div>
                </div>
                ))} 
            </div>

            <div className="output">
            <h2>output</h2> 
                {
                    serviceList.map((singleService, index) => (
                        <ul key={index}>
                            {singleService.service && <li>{singleService.service}</li>}
                        </ul>
                    ))
                }
            </div>
        </form>
    );
}

export default Display;