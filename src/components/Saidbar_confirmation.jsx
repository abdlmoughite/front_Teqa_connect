
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  FileWarning,
  ClipboardList,
  User,
  LogOut,
} from "lucide-react";

export default function SaidbarConfirmation({ active }) {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" />, to: "/dashboard_counfirmation" },
    { name: "Commandes", icon: <Package className="h-5 w-5" />, to: "/commandes_counfirmation" },
    { name: "Réclamation", icon: <FileWarning className="h-5 w-5" />, to: "/reclamation_counfirmation" },
    { name: "Liste commandes", icon: <ClipboardList className="h-5 w-5" />, to: "/liste_commandes_counfirmation" },
    { name: "Profil", icon: <User className="h-5 w-5" />, to: "/profil_counfirmation" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <aside className="w-64 min-h-screen bg-[#0F172A] border-r border-white/10 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-xl font-bold text-white">⚡ Confirmation</h1>
        <p className="text-sm text-white/50">Espace partenaire</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
              ${
                active === item.name.toLowerCase()
                  ? "bg-emerald-600 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition"
        >
          <LogOut className="h-5 w-5" />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}
