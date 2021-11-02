import React from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  return (
    <>
      <Form className='container my-5'>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant='secondary' type='submit'>Agregar</Button>
        </Form.Group>
      </Form>
      <section className='container'>
          <ListaTareas></ListaTareas>
      </section>
    </>
  );
};

export default FormTareas;
