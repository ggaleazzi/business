import React from "react"

function Historia(props){
    let message;
    if(props.language === "espanol"){
        message = "hola"
    } else {
        message = "hello"
    } 
    return (
        <p>{message}</p>
    )
}

export default Historia;