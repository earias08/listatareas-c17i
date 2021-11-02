import React, { Component } from 'react';
// si escribo rcc se crea el classComponent
class Titulo extends Component {
    render() {
        return (
            <h1 className='display-3 text-light text-center my-5'>Lista de tareas</h1>
        );
    }
}

export default Titulo;