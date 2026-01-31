import { useState } from "react";
import { cardapio } from "../data.js";
import CardProduct from "./CardProduct.jsx";

export default function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const categorias = [
    "Todos",
    ...new Set(cardapio.map((item) => item.categoria)),
  ];

  const produtosFiltrados = () => {
    return cardapio.filter(({ categoria }) => {
      if (categoriaAtiva === "Todos") return true;
      return categoria === categoriaAtiva;
    });
  };

  const produtos = produtosFiltrados();

  return (
    <div className="min-h-screen rounded-2xl bg-gradient-to-br from-amber-900 via-red-900 to-orange-800 p-6 relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🍷</div>
        <div className="absolute bottom-20 right-10 text-9xl">🍽️</div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            🍽️ Nosso Cardápio
          </h1>
          <p className="text-amber-100 text-lg drop-shadow">
            Escolha seus pratos favoritos
          </p>
        </div>

        {/* Filtro de Categorias */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg ${
                categoriaAtiva === cat
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105 shadow-xl"
                  : "bg-white text-gray-700 hover:shadow-lg hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        {produtos.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {produtos.map(
              ({ nome, id, categoria, preco, descricao, imagem }) => (
                <CardProduct
                  key={id}
                  nome={nome}
                  id={id}
                  categoria={categoria}
                  preco={preco}
                  descricao={descricao}
                  imagem={imagem}
                />
              ),
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <span className="text-8xl mb-4">🔍</span>
            <p className="text-white text-2xl font-bold mb-2">
              Nenhum produto encontrado
            </p>
            <p className="text-amber-100 text-lg">Tente outra categoria</p>
          </div>
        )}

        {/* Informação de produtos */}
        {produtos.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-amber-100 text-sm">
              📦 {produtos.length}{" "}
              {produtos.length === 1 ? "produto" : "produtos"} encontrados
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
