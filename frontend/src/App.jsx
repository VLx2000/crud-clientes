import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Clientes,
  NovoCliente,
  EditarCliente,
} from "./pages";
import { Layout } from "./layouts";

// uso de react router dom para mudança de pags
function App() {
  // rotas
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Clientes />
            }
          />
          <Route
            path="/editar/:idCliente"
            element={
              <EditarCliente />
            }
          />
          <Route
            path="/adicionar"
            element={
              <NovoCliente />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
