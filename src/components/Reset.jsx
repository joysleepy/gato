// import React, { Component} from 'react'
import React from 'react'

// Lo Anterior puede ser un componente puro
// creamos el jsx que rendeara el boton que reseteara el juego, como propiedad viene la funcion a disparar
const Reset = props => {
    const { eventoClick } = props; 
    return (
        <>
            <br />
            <button className="" onClick={eventoClick}>
                {/* el evento onClick dispara la funcion que viene como parametro, esta funcion esta en el board...  */}
                ¿Wanna play a game?
            </button>
        </>
    );
}

export default Reset;

