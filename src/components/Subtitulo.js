import React from 'react';
// para crear un componente funcional uso rsc
const Subtitulo = (props) => {
    // aqui va la logica
    return (
        // aqui va el maquetado y un poquito de logica
            <h2 className='text-light text-center'>Tareas de la comision {props.comision}</h2>
    );
};

export default Subtitulo;