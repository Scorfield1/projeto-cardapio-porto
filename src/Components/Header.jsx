import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../Contexto/CartProvider";
import useAuth from "../Hooks/useAuth";

export default function Header() {
  const { cart } = useContext(CartContext);
  const { newNome, numMesa } = useAuth();

  return (
    <div className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-2 py-1">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5 min-w-fit">
            <div className="flex items-center gap-1.5 bg-gray-100 rounded px-2 py-1">
              <span className="text-xs">📋</span>
              <span className="text-xs font-bold text-gray-700">
                {numMesa ? `Mesa: ${numMesa}` : "Sem mesa"}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              Bem-vindo,{" "}
              <span className="font-bold text-gray-700">
                {newNome || "Visitante"}
              </span>
            </span>
          </div>

          <Link
            to="/cardapio"
            className=" gap-1.5 hover:opacity-80 transition flex-shrink-0"
          >
            <h1 className="text-lg font-black text-gray-900">
              <img
                src="https://papafrangoporto.deliverymercado.com.br/static/media/logo.bdc45b3a02f576813d93.png"
                alt="logo-restaurante"
                className="size-15"
              />
            </h1>
          </Link>

          {/* Carrinho - Direita */}
          <Link
            to="/carrinho"
            className="relative p-2 rounded-full bg-white border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 group flex-shrink-0"
          >
            <FaShoppingCart
              size={20}
              className="text-gray-800 group-hover:text-orange-600 transition-colors"
            />

            {/* Badge de quantidade */}
            {cart.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs shadow-lg border border-white">
                {cart.length}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
