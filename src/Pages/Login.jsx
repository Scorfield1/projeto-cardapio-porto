import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { useParams } from "react-router";

export default function Login() {
  const { mesa } = useParams();
  const navigate = useNavigate();
  const { handleLogin, setNewNome, setNewTelefone, setNumMesa } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("@PortoZap: user", JSON.stringify(data));
    setNewNome(data.nome);
    setNewTelefone(data.telefone);
    setNumMesa(mesa);
    handleLogin();
    navigate("/cardapio");
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-amber-900 via-red-900 to-orange-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decoração de fundo - Padrão de tijolos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🍷</div>
        <div className="absolute bottom-20 right-10 text-9xl">🍽️</div>
        <div className="absolute top-1/2 left-1/4 text-8xl">🔪</div>
        <div className="absolute bottom-1/3 right-1/4 text-8xl">🍴</div>
      </div>

      {/* Overlay com textura */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Conteúdo */}
      <div className="w-full max-w-md relative z-10">
        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-amber-700">
          {/* Header com gradiente quente */}
          <div className="bg-gradient-to-r from-amber-700 via-red-700 to-orange-700 p-8 text-white relative">
            <div className="absolute -top-2 -left-2 text-6xl opacity-20">
              🍽️
            </div>
            <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">
              Bem-vindo
            </h1>
            <p className="text-amber-100 text-sm drop-shadow">
              Identifique-se para continuar
            </p>
          </div>

          {/* Conteúdo */}
          <div className="p-8 bg-gradient-to-b from-white to-amber-50">
            {/* Status da Mesa */}
            <div
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 font-semibold transition-all ${
                mesa
                  ? "bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-400 shadow-md"
                  : "bg-gradient-to-r from-red-100 to-red-50 border-2 border-red-400 shadow-md"
              }`}
            >
              <span className="text-3xl animate-pulse">
                {mesa ? "🍽️" : "❌"}
              </span>
              <div>
                <p className="text-sm font-bold text-gray-800">
                  {mesa ? `Mesa ${mesa}` : "Sem Identificação"}
                </p>
                <p className="text-xs text-gray-600">
                  {mesa
                    ? "✓ Identificação confirmada"
                    : "✗ Erro ao identificar mesa"}
                </p>
              </div>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Campo Nome */}
              <div className="space-y-2">
                <label
                  htmlFor="nome"
                  className="block text-sm font-bold text-gray-800"
                >
                  👤 Nome Completo
                </label>
                <input
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition bg-white ${
                    errors.nome
                      ? "border-red-400 shadow-lg shadow-red-200"
                      : "border-amber-300 shadow-md shadow-amber-100"
                  }`}
                  type="text"
                  id="nome"
                  placeholder="Ex: João Silva"
                  {...register("nome", { required: "Nome é obrigatório." })}
                />
                {errors.nome && (
                  <span className="text-sm text-red-600 flex items-center gap-1 font-semibold">
                    ⚠️ {errors.nome.message}
                  </span>
                )}
              </div>

              {/* Campo Telefone */}
              <div className="space-y-2">
                <label
                  htmlFor="telefone"
                  className="block text-sm font-bold text-gray-800"
                >
                  ☎️ Telefone com DDD
                </label>
                <input
                  type="tel"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition bg-white ${
                    errors.telefone
                      ? "border-red-400 shadow-lg shadow-red-200"
                      : "border-amber-300 shadow-md shadow-amber-100"
                  }`}
                  id="telefone"
                  placeholder="(11) 98765-4321"
                  {...register("telefone", {
                    required: "Telefone é obrigatório",
                    minLength: {
                      value: 11,
                      message: "Telefone deve ter 11 dígitos",
                    },
                    maxLength: {
                      value: 11,
                      message: "Telefone deve ter 11 dígitos",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Digite apenas números",
                    },
                  })}
                />
                {errors.telefone && (
                  <span className="text-sm text-red-600 flex items-center gap-1 font-semibold">
                    ⚠️ {errors.telefone.message}
                  </span>
                )}
              </div>

              {/* Botão Submit */}
              <button
                disabled={!isValid}
                type="submit"
                className={`w-full mt-8 py-3 px-4 rounded-lg font-bold text-white transition transform shadow-lg ${
                  isValid
                    ? "bg-gradient-to-r from-amber-600 to-red-600 hover:shadow-xl hover:scale-105 cursor-pointer hover:from-amber-700 hover:to-red-700"
                    : "bg-gray-400 cursor-not-allowed opacity-60"
                }`}
              >
                {isValid ? "✓ Continuar para Cardápio" : "Preencha os campos"}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-amber-700 to-orange-700 px-8 py-4 border-t-4 border-amber-800">
            <p className="text-xs text-center text-amber-100 font-semibold">
              ✓ Seus dados são seguros e protegidos 🔒
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
