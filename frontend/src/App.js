import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Header from "./components/Header";
import TableInfo from "./components/TableInfo";
import FormModal from "./components/FormModal";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleCloseFormModal = () => setShowForm(false);
  const handleFormModal = () => setShowForm(true);

  return (
    <div className="App">
      <Container>
        <Header />

        <Button
          className="buttons"
          variant="danger"
          href="accounts/logout"
        >SAIR</Button>
        <Button
          className="buttons"
          variant="primary"
          onClick={handleFormModal}
        >
          ADICIONAR +
        </Button>
        <FormModal ativarModal={showForm} fecharModal={handleCloseFormModal} />

        <TableInfo />
      </Container>
    </div>
  );
}

export default App;
