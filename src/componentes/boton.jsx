import React from "react";
import '../stylesheets/boton.css'

function Boton({texto, esCLick, manejarClic}){
    return(
        <button
        className={esCLick ? "click" : "reiniciar"}
        onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Boton