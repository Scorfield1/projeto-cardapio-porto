import { Link, useLocation } from "react-router";

export default function BottomNavigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-amber-700 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {/* Link Cardápio */}
          <Link
            to="/cardapio"
            className={`flex flex-row items-center justify-center gap-2 py-2 px-4 rounded-full transition-all duration-300 ${
              isActive("/cardapio")
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                : "text-gray-600 hover:text-orange-600"
            }`}
          >
            <span className="text-xl">🍽️</span>
            <span className="text-sm font-bold hidden sm:inline">Cardápio</span>
          </Link>

          {/* Link Carrinho */}
          <Link
            to="/carrinho"
            className={`flex flex-row items-center justify-center gap-2 py-2 px-4 rounded-full transition-all duration-300 ${
              isActive("/carrinho")
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                : "text-gray-600 hover:text-orange-600"
            }`}
          >
            <span className="text-xl">🛒</span>
            <span className="text-sm font-bold hidden sm:inline">Carrinho</span>
          </Link>

          {/* Link Configurações */}
          <Link
            to="/configuracoes"
            className={`flex flex-row items-center justify-center gap-2 py-2 px-4 rounded-full transition-all duration-300 ${
              isActive("/configuracoes")
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                : "text-gray-600 hover:text-orange-600"
            }`}
          >
            <span className="text-xl">⚙️</span>
            <span className="text-sm font-bold hidden sm:inline">Config.</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
