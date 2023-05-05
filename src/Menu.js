import React from "react";
function Menu(){
const [ fundo, setFundo ] = React.useState("black")
    const estilo = {
    backgroundColor: fundo,
    color: "white"
}
    return(
        <div style={ estilo }>
            <p> Lojinha <button onClick={ ()=> setFundo(fundo == "black" ? "red" : "black") }> </button> </p>
        </div>
    )
    
}
export default Menu;