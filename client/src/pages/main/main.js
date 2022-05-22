import React, {useState, useEffect, useRef} from 'react'
import env from "react-dotenv";


function MainPage() {
    const [userData, setUserData] = useState([{}]);
    useEffect(() => {
        //fetch request
        fetch("/alpha/users/profile", {
            method: 'GET', //define type, in this case it is a GET
            headers: {
                //headers very important!!!
                'Content-Type': 'application/json',
                'api_key' : env,
            },
             })
        .then(res => 
            res.json()).then(json => {
            setUserData(json);
            console.log(json);
        })}, []);

  return (
    <div>{userData.userName ? userData.userName : "User Gay, Does not Exist stay away!"}</div>
  )
}

export default MainPage