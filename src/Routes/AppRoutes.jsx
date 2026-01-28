import { Routes, Route } from "react-router";
import Sucesso from "../Pages/Sucesso";
import Login from "../Pages/Login";
import MainLayout from "../Layout/MainLayout";
import Cardapio from "../Components/Cardapio";
import Carrinho from "../Pages/Carrinho";
import Detalhes from "../Pages/Detalhes";
import PrivateRoutes from "./PrivateRoutes";
import Configuracoes from "../Pages/Configuraçoes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/:mesa" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
