import { useContext } from "react";
import { CartContext } from "../Contexto/CartProvider";
import CardCarrinho from "../Components/CardCarrinho";
import { FaShoppingBag } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router";

export default function Carrinho() {
  const { cart, clearCart } = useContext(CartContext);
  const { newNome, newTelefone } = useAuth();
  const navigate = useNavigate();

  if (cart.length <= 0) {
    return (
      <div className="h-96 justify-center flex flex-col gap-2 items-center">
        <FaShoppingBag className="text-7xl text-white" />
        <h1 className="text-xl text-white font-bold">
          Seu Carrinho Está vazio
        </h1>
      </div>
    );
  }

  const idsUnicos = [...new Set(cart.map((item) => item.id))];

  const valorTotal = cart.reduce((acc, item) => acc + (item?.preco || 0), 0);

  const enviarPedido = () => {
    const telefone = `55${newTelefone}`;

    const resumoItens = idsUnicos
      .map((id) => {
        const item = cart.find((i) => i.id === id);
        const qtd = cart.filter((i) => i.id === id).length;
        return `${qtd}x ${item.nome}`;
      })
      .join("\n");

    const mensagem = encodeURIComponent(
      `*Novo Pedido!* 🍔\n\n` +
        `*Olá, ${newNome}:*\n\n` +
        `*Itens:* \n${resumoItens}\n\n` +
        `*Total:* ${new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(valorTotal)}`,
    );

    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
    clearCart();
    navigate("/sucesso", { state: { veioDoCheckout: true } });
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-white">
      {idsUnicos.map((id) => {
        const item = cart.find((i) => i.id === id);

        const quantidadePorItem = cart.filter((i) => i.id === id).length;

        return (
          <CardCarrinho
            key={id}
            item={item}
            nome={item.nome}
            preco={item.preco}
            id={item.id}
            quantidade={quantidadePorItem}
          />
        );
      })}

      <div className="mt-4 font-bold text-xl border-t pt-4">
        Valor total:{" "}
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(valorTotal)}
      </div>
      <div>
        <button
          className="bg-red-500 px-4 py-2 rounded-2xl"
          onClick={clearCart}
        >
          Limpar Carrinho
        </button>
      </div>
      <div>
        <button
          onClick={enviarPedido}
          className="w-full mt-4 bg-green-500 text-white font-bold py-4 rounded-xl"
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
}
