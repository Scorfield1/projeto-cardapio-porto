import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { CartContext } from "../Contexto/CartProvider";
import useAuth from "../Hooks/useAuth";

export default function Header() {
  const { cart } = useContext(CartContext);
  const { newNome, numMesa } = useAuth();
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-3 place-items-center">
        <div className="flex flex-col">
          <span className="text-sm">Bem vindo - {newNome}</span>
          {numMesa ? (
            <span className="text-sm">Sua mesa: {numMesa}</span>
          ) : (
            <span className="text-sm">Não indentificada</span>
          )}
        </div>
        <h1>Restaurante</h1>
        <div className="flex gap-2">
          <Link to="/carrinho" className="text-black">
            <FaShoppingCart size={24} color="black" />
          </Link>
          {cart.length > 0 && cart.length}
        </div>
      </div>
    </>
  );
}
