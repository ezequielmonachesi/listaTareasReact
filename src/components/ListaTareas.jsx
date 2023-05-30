import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, borrarTarea }) => {
  return (
    <ListGroup>
      {tareas.map((tarea, posicion) => (
        <ItemTarea tarea={tarea} key={posicion} borrarTarea={borrarTarea}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
