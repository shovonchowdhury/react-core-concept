import { useState } from "react"

export default function Counter(){

    const [count,setcount]=useState(0);
    const addCounter=()=>{

        const newCount=count+1;
        setcount(newCount);
    }

    const reduceCount=()=>{
        const newCount=count-1;
        setcount(newCount);
    }

    return(

        <div style={{padding:'50px'}}>
            <h3>Counter:{count}</h3>
            <button onClick={addCounter}>Add</button>
            <button onClick={reduceCount}>Reduce</button>
        </div>
    )
}