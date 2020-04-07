import React from "react"
function ChangeButton(props){
    let buttonText;
    if(props.language === "espanol"){
        buttonText = "English"
    } else {
        buttonText = "Espanol"
    }
    return(
        <button onClick={() => props.buttonClick()}>{buttonText}</button>
        )
}

export default ChangeButton;
