import { Link } from "react-router";

export default function BottomNavigation() {
  return (
    <>
      <div className="flex justify-between">
        <Link to="/cardapio">Cardapio</Link>
        <Link to="/carrinho">Carrinho</Link>
        <Link to="/configuracoes">Configuração</Link>
      </div>
    </>
  );
}
