import { useContext } from "react";
import { AuthContext } from "../Contexto/AuthProvider";

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
