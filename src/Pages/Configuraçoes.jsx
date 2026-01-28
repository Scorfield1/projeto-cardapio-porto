import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router";
export default function Configuraçoes() {
  const { handleLogout } = useAuth();

  const Sair = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <>
      <button onClick={Sair}>Sair</button>
    </>
  );
}
