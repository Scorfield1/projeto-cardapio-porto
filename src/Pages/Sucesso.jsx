import { useNavigate, useLocation, Navigate } from "react-router";
import useAuth from "../Hooks/useAuth";

export default function Sucesso() {
  const navigate = useNavigate();
  const location = useLocation();
  const { numMesa } = useAuth();
  if (!location.state?.veioDoCheckout) {
    return <Navigate to="/cardapio" />;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center pb-44">
      <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-6 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-gray-800">Pedido Enviado!</h1>
        <p className="text-gray-600 mt-2">
          Agora é só aguardar no WhatsApp. O restaurante já recebeu suas
          informações.
        </p>
        <span>{numMesa}</span>
        <button
          onClick={() => navigate("/cardapio")}
          className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg"
        >
          Fazer outro pedido
        </button>
      </div>
    </div>
  );
}
