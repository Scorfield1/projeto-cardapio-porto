import useAuth from "../Hooks/useAuth";
import { Navigate, Outlet } from "react-router";
export default function PrivateRoutes({ children }) {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
