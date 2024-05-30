import { useState } from "react"

export default function Team(){

    const [count,setcount]=useState(11);

    const teamStyle={
        
        margin: '50px'

    };

    const addPlayer=()=>{
        setcount(count+1);
    }


    return(
        <div style={teamStyle}>
            <h3>Player:{count}</h3>
            <button onClick={addPlayer}>Add Player</button>

        </div>
    )
}