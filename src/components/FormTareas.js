import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareas')) || [];
  // crear los state
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tareas, setTareas] = useState(tareasLocalStorage);

  // const altaTarea = (e) => {
  //   // console.log(e.target.value);
  //   // como guardamos dentro del state
  //   setTareaIndividual(e.target.value);
  // };

  // usar el ciclo de vida de un componente
  useEffect(()=>{
    // esta logica se ejecuta en montaje y actualizacion
    console.log('desde useEffect');
    localStorage.setItem('arregloTareas', JSON.stringify(tareas))
  },[tareas]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    // guardar una tarea en el arreglo de tareas
    setTareas([...tareas, tareaIndividual]);
    //limpiar el input
    setTareaIndividual('');
  }

  const borrarTarea = (nombre) =>{
    let arregloModificado = tareas.filter((item)=> item !== nombre);
    // console.log(arregloModificado);
    setTareas(arregloModificado);
  }

  return (
    <>
      <Form className="container my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTareaIndividual(e.target.value)}
            value={tareaIndividual}
          />
          <Button variant="secondary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
        <ListaTareas arregloTareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
      </section>
    </>
  );
};

export default FormTareas;
