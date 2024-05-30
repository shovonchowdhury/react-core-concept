import { useEffect, useState } from "react"
import './friends.css'
import Friend from "./Friend";

export default function Friends(){

    const [friends,setfriends]=useState([]);

    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>res.json())
        .then(data=>setfriends(data))

    },[])


    return(
        <div className="friends-main">
            <h3>Number Of Friends:{friends.length}</h3>
            {
                friends.map(friend=><Friend name={friend.name} city={friend.address.city}></Friend>)
            }
        </div>
    )
}