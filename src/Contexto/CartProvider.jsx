import { createContext, useState } from "react";
export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const addToCard = (produto) => {
    setCart((prev) => [...prev, produto]);
    setIsModal(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index !== -1) {
        const novoCarrinho = [...prev];
        novoCarrinho.splice(index, 1);
        return novoCarrinho;
      }
      return prev; // Se não achar o item, retorna o carrinho como estava
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCard,
        removeFromCart,
        clearCart,
        isModal,
        setIsModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
