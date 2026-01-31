import { useParams, Link } from "react-router";
import { cardapio } from "../data.js";
import { useContext, useState } from "react";
import { CartContext } from "../Contexto/CartProvider.jsx";
import { useNavigate } from "react-router";

export default function Detalhes() {
  const navigate = useNavigate();
  const { addToCard } = useContext(CartContext);
  const { id } = useParams();
  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);

  const produto = cardapio.find((item) => item.id === Number(id));

  const handleAdd = () => {
    addToCard({ ...produto, quantidade });
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2000);
  };

  const handleVoltar = () => {
    navigate("/cardapio");
  };

  if (!produto) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-red-900 to-orange-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
          <span className="text-3xl mb-4 block">😕</span>
          <p className="text-gray-700 font-semibold text-lg">
            Produto não encontrado
          </p>
          <button
            onClick={handleVoltar}
            className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
          >
            Voltar ao Cardápio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen rounded-2xl0 bg-gradient-to-br from-amber-900 via-red-900 to-orange-800 p-4 relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🍷</div>
        <div className="absolute bottom-20 right-10 text-9xl">🍽️</div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header com botão voltar */}
        <button
          onClick={handleVoltar}
          className="mb-6 flex items-center gap-2 text-white font-semibold hover:text-amber-200 transition"
        >
          ← Voltar
        </button>

        {/* Card Principal - Layout Horizontal */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-700 flex flex-col lg:flex-row">
          {/* Imagem do Produto - Lado Esquerdo */}
          <div className="lg:w-2/5 relative bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden h-64 lg:h-auto">
            {produto.imagem && (
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-full object-cover"
              />
            )}

            {/* Badge de Preço */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full font-bold shadow-lg text-lg">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(produto.preco)}
            </div>
          </div>

          {/* Conteúdo - Lado Direito */}
          <div className="lg:w-3/5 p-6 lg:p-8 bg-gradient-to-b from-white to-amber-50 flex flex-col justify-between">
            {/* Nome e Descrição */}
            <div>
              {/* Nome */}
              <h1 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-2">
                {produto.nome}
              </h1>

              {/* Divisor */}
              <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4"></div>

              {/* Descrição */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
                {produto.descricao}
              </p>

              {/* Informações adicionais */}
              <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b-2 border-amber-200">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 font-semibold mb-1">
                    👨‍🍳 Categoria
                  </p>
                  <p className="text-base font-bold text-amber-900">
                    {produto.categoria || "Especial"}
                  </p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 font-semibold mb-1">
                    ⭐ Avaliação
                  </p>
                  <p className="text-base font-bold text-amber-900">4.8/5</p>
                </div>
              </div>
            </div>

            {/* Controles - Quantidade e Botão */}
            <div>
              {/* Controle de Quantidade */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  📦 Quantidade
                </label>
                <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                    className="w-9 h-9 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 transition"
                  >
                    −
                  </button>
                  <span className="text-xl font-bold text-amber-900 w-8 text-center">
                    {quantidade}
                  </span>
                  <button
                    onClick={() => setQuantidade(quantidade + 1)}
                    className="w-9 h-9 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Botão Adicionar */}
              <button
                onClick={handleAdd}
                className={`w-full py-3 px-6 rounded-lg font-bold text-white text-base transition transform shadow-lg ${
                  adicionado
                    ? "bg-gradient-to-r from-green-500 to-green-600 scale-105"
                    : "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 hover:scale-105"
                }`}
              >
                {adicionado
                  ? "✓ Adicionado ao Carrinho!"
                  : "🛒 Adicionar ao Carrinho"}
              </button>

              {/* Informação de segurança */}
              <div className="mt-4 pt-4 border-t border-amber-200 text-center">
                <p className="text-xs text-gray-500 font-semibold">
                  🔒 Pedido seguro e rastreado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
