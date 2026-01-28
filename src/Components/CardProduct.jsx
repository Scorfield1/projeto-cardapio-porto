import { Link } from "react-router";

export default function CardProduct({ nome, descricao, preco, imagem, id }) {
  return (
    <>
      <Link to={`/detalhes/${id}`}>
        <div className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm border border-gray-100 active:scale-[0.98] transition-transform cursor-pointer">
          {/* Texto do Prato */}
          <div className="flex flex-col gap-1 flex-1 pr-4">
            <h1 className="font-bold text-lg text-gray-800 leading-tight">
              {nome}
            </h1>
            <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
              {descricao}
            </p>
            <span className="font-bold text-orange-500 text-xl mt-2">
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(preco)}
            </span>
          </div>

          {/* Imagem do Prato */}
          {imagem && (
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={imagem}
                alt={nome}
                className="w-full h-full object-cover rounded-xl shadow-inner"
              />
            </div>
          )}
        </div>
      </Link>
    </>
  );
}
