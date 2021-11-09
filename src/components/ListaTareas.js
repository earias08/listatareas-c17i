import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <ListGroup className='my-5'>
      {
        props.arregloTareas.map((item, posicion)=><ItemTarea key={posicion} tarea={item} borrarTarea={props.borrarTarea}></ItemTarea> )
      }
    </ListGroup>
  );
};

export default ListaTareas;
