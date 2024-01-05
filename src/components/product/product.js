import React from "react";
import {innova} from './innova.jpeg'
 
function Product(props){
    return(

    <div>
        
        <img src={props.image}/>
        <h2>{props.name}</h2>
        <h3>{props.company}</h3>
        <p>{props.desc}</p>
        <h4>{props.price}</h4>
    </div>

)
}

export default Product;