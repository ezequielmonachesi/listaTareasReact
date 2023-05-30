import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas }) => {
  return (
    <ListGroup>
      {tareas.map((tarea, posicion) => (
        <ItemTarea tarea={tarea} key={posicion}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
