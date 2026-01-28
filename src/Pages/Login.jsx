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
    <div className="p-4 w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-7xl flex flex-col gap-4 bg-white p-4 rounded-2xl"
      >
        <h1 className="font-bold text-4xl">
          Indentificação Mesa - {mesa ? mesa : "Mesa não indentificada"}
        </h1>
        <span className="text-sm">
          Insira o número do seu telefone com DDD para realizar o login.
        </span>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="nome">Nome</label>
            <input
              className="border p-2"
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              {...register("nome", { required: "Campo obrigatório." })}
            />
            {errors.nome && (
              <span className="text-sm text-red-500">
                {errors.nome.message}
              </span>
            )}
          </div>

          {/* Telefone */}
          <div className="flex flex-col">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              className="border p-2 placeholder:text-sm"
              id="telefone"
              placeholder="(DDD) 9XXXX-XXXX"
              {...register("telefone", {
                required: "Campo obrigatório",
                minLength: {
                  value: 11,
                  message: "Campo obrigatório mínimo de 8 caracteres",
                },
                maxLength: {
                  value: 11,
                  message: "Campo obrigatório máximo de 8 caracteres",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Digite apenas números",
                },
              })}
            />
            {errors.telefone && (
              <span className="text-red-500 text-sm">
                {errors.telefone.message}
              </span>
            )}
          </div>
        </div>

        <button
          disabled={!isValid}
          type="submit"
          className="p-2 bg-green-500 text-white rounded disabled:opacity-50 disabled:cursor-context-menu"
        >
          Logar
        </button>
      </form>
    </div>
  );
}
