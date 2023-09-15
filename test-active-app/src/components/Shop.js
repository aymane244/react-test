import React from "react";

export default function Shop({color, test}){
    return(
        <div className={color ? "dark" : ""}>
            Shop <br></br>
            {test}
        </div>
    )
}