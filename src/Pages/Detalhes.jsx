import { useParams, Link } from "react-router";
import { cardapio } from "../data.js";
import { useContext } from "react";
import { CartContext } from "../Contexto/CartProvider.jsx";
import { useNavigate } from "react-router";
export default function Detalhes() {
  const navigate = useNavigate();
  const { addToCard, isModal, setIsModal } = useContext(CartContext);
  const { id } = useParams();

  const handleAdd = () => {
    addToCard(produto);
    navigate("/carrinho");
  };
  const produto = cardapio.find((item) => item.id === Number(id));

  if (!produto) {
    return (
      <div className="p-4 text-white">
        <span>Produto não encontrado.</span>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white p-4 rounded-lg flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{produto.nome}</h1>
        <span>{produto.descricao}</span>
        <span className="text-2xl font-bold">
          {new Intl.NumberFormat("Pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(produto.preco)}
        </span>
      </div>
      <Link to="/">Home</Link>
      <button onClick={handleAdd}>Adicionar ao carrinho</button>
    </>
  );
}
