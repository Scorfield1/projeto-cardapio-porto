import { Outlet } from "react-router";
import Header from "../Components/Header";
import BottomNavigation from "../Components/BottomNavigation";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-orange-500">
      <header className="fixed top-0 left-0 right-0 z-50 shadow-2xl shadow-black bg-white/90 rounded-lg backdrop-blur-md border-b border-gray-100 py-2 w-full">
        <div className="max-w-7xl mx-auto">
          <Header />
        </div>
      </header>
      <main className="max-w-7xl mx-auto pt-24 pb-24 p-4">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 p-4 w-full">
        <div className="max-w-7xl mx-auto">
          <BottomNavigation />
        </div>
      </footer>
    </div>
  );
}
