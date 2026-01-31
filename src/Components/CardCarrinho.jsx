import { CartContext } from "../Contexto/CartProvider";
import { useContext } from "react";

export default function CardCarrinho({ nome, preco, id, item, quantidade }) {
  const { addToCard, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex flex-col justify-between gap-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>{nome}</span>
          <span>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(preco)}
          </span>
        </div>
        <div>
          <div className="flex gap-4 items-center rounded-xl px-4 py-2 bg-amber-50">
            <button
              onClick={() => addToCard(item)}
              className="font-bold text-lg px-2 bg-green-500 text-white rounded-full"
            >
              +
            </button>

            <span>{quantidade}</span>

            <button
              className="font-bold text-lg px-2 bg-red-500 text-white rounded-full"
              onClick={() => removeFromCart(id)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
