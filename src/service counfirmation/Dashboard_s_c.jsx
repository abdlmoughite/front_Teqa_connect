// src/pages/Dashboard_s_c.jsx
import { useState } from "react";
import {
  LayoutDashboard,
  ClipboardList,
  CheckCircle2,
  XCircle,
  Clock3,
  Truck,
  Bell,
  User,
  Search,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardServiceConfirmation() {
  const navigate = useNavigate();

  const commandes = [
    { id: 1, client: "Ahmed", produit: "Power Bank 10000mAh", statut: "Confirmée", livraison: "Livrée", date: "2025-10-01" },
    { id: 2, client: "Sara", produit: "Écouteurs Bluetooth", statut: "Confirmée", livraison: "Annulée", date: "2025-10-01" },
    { id: 3, client: "Hamza", produit: "Chargeur Rapide", statut: "Confirmée", livraison: "Refusée", date: "2025-10-02" },
    { id: 4, client: "Yassine", produit: "Câble USB-C", statut: "Confirmée", livraison: "En cours", date: "2025-10-02" },
  ];

  // 📊 Statistiques
  const stats = {
    total: commandes.length,
    livrees: commandes.filter((c) => c.livraison === "Livrée").length,
    annulees: commandes.filter((c) => c.livraison === "Annulée").length,
    refusees: commandes.filter((c) => c.livraison === "Refusée").length,
  };

  // 📅 Commandes reportées aujourd'hui
  const today = new Date().toISOString().split("T")[0];
  const commandesReporter = commandes.filter((c) => c.statut === "Reporter" && c.date === today);

  return (
    <div className="flex min-h-screen bg-[#0B1220] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F172A] border-r border-white/10 p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-6 flex items-center gap-2">
          <LayoutDashboard className="h-5 w-5" /> Service Confirmation
        </h1>
        <nav className="flex-1 space-y-2">
          <NavItem icon={<ClipboardList className="h-4 w-4" />} label="Toutes les commandes" />
          <NavItem icon={<CheckCircle2 className="h-4 w-4" />} label="Confirmées" />
          <NavItem icon={<XCircle className="h-4 w-4" />} label="Annulées" />
          <NavItem icon={<Clock3 className="h-4 w-4" />} label="Reportées" />
          <NavItem icon={<Truck className="h-4 w-4" />} label="Livraisons" />
        </nav>
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
          className="flex items-center gap-2 text-red-400 hover:text-red-300"
        >
          <LogOut className="h-4 w-4" /> Déconnexion
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Tableau de bord</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="h-4 w-4 text-white/50 absolute left-2 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-8 pr-3 py-1.5 rounded-lg bg-[#0B1220] border border-white/10 text-sm"
              />
            </div>
            <button className="relative">
              <Bell className="h-5 w-5 text-white/70" />
              {commandesReporter.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {commandesReporter.length}
                </span>
              )}
            </button>
            <div className="flex items-center gap-2 bg-[#0F172A] px-3 py-1.5 rounded-lg">
              <User className="h-4 w-4 text-emerald-400" />
              <span className="text-sm">Service</span>
            </div>
          </div>
        </div>

        {/* Alertes */}
        {commandesReporter.length > 0 && (
          <div className="mb-6 p-4 bg-yellow-600/20 border border-yellow-600 rounded-lg">
            ⚠ {commandesReporter.length} commande(s) reportée(s) pour aujourd’hui
          </div>
        )}

        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <StatBox label="Total" value={stats.total} color="text-blue-400" />
          <StatBox label="Livrées" value={stats.livrees} color="text-emerald-400" />
          <StatBox label="Annulées" value={stats.annulees} color="text-red-400" />
          <StatBox label="Refusées" value={stats.refusees} color="text-orange-400" />
        </div>

        {/* Liste des commandes */}
        <div className="overflow-x-auto border border-white/10 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-[#0F172A] text-white/70">
              <tr>
                <th className="px-4 py-3 text-left">Client</th>
                <th className="px-4 py-3 text-left">Produit</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Statut</th>
                <th className="px-4 py-3 text-left">État Livraison</th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((c) => (
                <tr key={c.id} className="border-t border-white/5 hover:bg-white/5">
                  <td className="px-4 py-3">{c.client}</td>
                  <td className="px-4 py-3">{c.produit}</td>
                  <td className="px-4 py-3">{c.date}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-emerald-600/20 text-emerald-400 rounded-lg text-xs font-semibold">
                      {c.statut}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {c.livraison === "Livrée" && <span className="text-emerald-400">✔ Livrée</span>}
                    {c.livraison === "Annulée" && <span className="text-red-400">✘ Annulée</span>}
                    {c.livraison === "Refusée" && <span className="text-orange-400">⚠ Refusée</span>}
                    {c.livraison === "En cours" && <span className="text-yellow-400">⏳ En cours</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

/* 📦 Petit composant pour les stats */
function StatBox({ label, value, color }) {
  return (
    <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6 flex flex-col items-start">
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-white/60 text-sm">{label}</p>
    </div>
  );
}

/* 📦 Lien Sidebar */
function NavItem({ icon, label }) {
  return (
    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
      {icon} {label}
    </button>
  );
}
