import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";

const FormularioTarea = () => {
  
  let tareasDelLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(tareasDelLocalStorage);

  //ciclo de vida
  useEffect(()=>{
    localStorage.setItem('listaTareas', JSON.stringify(tareas))
  },[tareas]);
//con corchetes vacio solo se ejectura en montaje
// sin corchetes se ejecuta en montaje y actualizacion
// cuando se asigna una variable se ejecuta el montaje y actualizacion en esa variable
  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    let copiaTareas = tareas.filter((itemTarea) => itemTarea !== nombreTarea);
    setTareas(copiaTareas);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea} />
    </>
  );
};

export default FormularioTarea;
