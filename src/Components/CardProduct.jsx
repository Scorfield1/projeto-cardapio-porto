import { Link } from "react-router";

export default function CardProduct({ nome, descricao, preco, imagem, id }) {
  return (
    <Link to={`/detalhes/${id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 active:scale-95 transition-all duration-300 cursor-pointer group">
        {/* Container com imagem e badge de preço */}
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-amber-100 to-orange-100">
          {imagem && (
            <img
              src={imagem}
              alt={nome}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          )}

          {/* Badge de Preço */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(preco)}
          </div>

          {/* Overlay hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        {/* Conteúdo */}
        <div className="p-4 flex flex-col gap-2">
          {/* Nome do Prato */}
          <h1 className="font-bold text-lg text-gray-800 leading-tight group-hover:text-orange-600 transition-colors">
            {nome}
          </h1>

          {/* Descrição */}
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {descricao}
          </p>

          {/* Call to Action */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
              📋 Ver detalhes
            </span>
            <span className="text-orange-500 font-bold text-lg group-hover:text-orange-600 transition-colors">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
