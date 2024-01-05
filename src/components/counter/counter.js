import { useState } from "react";


const Counter=()=>{
    const[count,setcount]=useState(0);

    return(


        <div>
            <p> you clicked {count} times</p>
            <button onClick={()=> setcount(count +  1)}>click me</button>
        </div>
    );
    };


 export default Counter;