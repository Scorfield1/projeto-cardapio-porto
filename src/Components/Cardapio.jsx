import { cardapio } from "../data.js";
import CardProduct from "./CardProduct.jsx";
export default function Cardapio() {
  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {cardapio.map(({ nome, id, categoria, preco, descricao, imagem }) => (
          <CardProduct
            nome={nome}
            id={id}
            categoria={categoria}
            preco={preco}
            descricao={descricao}
            imagem={imagem}
          />
        ))}
      </div>
    </>
  );
}
