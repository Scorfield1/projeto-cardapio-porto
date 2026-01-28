import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [newNome, setNewNome] = useState("");
  const [newTelefone, setNewTelefone] = useState("");
  const [numMesa, setNumMesa] = useState("");
  const [isLogged, setIsLogged] = useState(
    Boolean(localStorage.getItem("token")),
  );

  useEffect(() => {
    const userSalvo = localStorage.getItem("@PortoZap: user");

    if (userSalvo) {
      const dadosSalvos = JSON.parse(userSalvo);

      setNewNome(dadosSalvos.nome);
      setNewTelefone(dadosSalvos.telefone);
      setNumMesa(dadosSalvos.local || dadosSalvos.mesa);
      console.log("Dados salvos: ", dadosSalvos);
    }
  }, []);

  const handleLogin = (token) => {
    setIsLogged(true);
    localStorage.setItem(
      "token",
      token || Math.random().toString(36).substring(2),
    );
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.removeItem("@PortoZap: user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogged(Boolean(token));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        handleLogin,
        handleLogout,
        setNewNome,
        newNome,
        newTelefone,
        setNewTelefone,
        numMesa,
        setNumMesa,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
