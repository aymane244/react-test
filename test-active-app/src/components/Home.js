import React, { useState } from "react";

export default function Home({color, home}){
    const[test, setTest] = useState({
        first_name : '',
        last_name : '',
    })
    function testFucntion(event){
        setTest(formData=>({
            ...formData,
            [event.target.name] : event.target.value
        }));
    }
    return(
        <div className={color ? "dark" : "light"}>
            {home}
            <input
                type="text"
                name="first_name"
                onChange={testFucntion}
                value={test.first_name}
            />
            <input
                type="text"
                name="last_name"
                onChange={testFucntion}
                value={test.last_name}
            />
        </div>
    )
}