import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
   <>
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese una tarea" />
        <Button variant="primary">Agregar</Button>
      </Form.Group>
    </Form>
    <ListaTareas/>
   </>
  );
};

export default FormularioTarea;
