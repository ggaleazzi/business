import React from "react"
import "./Menu.css"

function Menu(props){
    let comidas
    if (props.language === "espanol"){
        comidas = ["pollo", "res", "vegetables"]
    } else {
        comidas = ["chicken", "beef", "vegetales"]
    }
    let listItems = comidas.map(
        (comida) => <li key={comida}>{comida}</li>
        )
    return (
        <ul>
            {listItems}
        </ul>
        )
}

export default Menu;