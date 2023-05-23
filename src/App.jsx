import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container className="my-5 main">
        <h1>Lista de tareas</h1>
        <hr />
      </Container>
      <footer className="bg-dark text-center text-light py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
