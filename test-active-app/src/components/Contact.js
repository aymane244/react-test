import React from "react";

export default function Contact({color}){
    return(
        <div className={color ? "dark" : ""}>
            Contact
        </div>
    )
}