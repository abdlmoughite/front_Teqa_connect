import { useState, useMemo } from "react";
import {
  Search,
  Package,
  Truck,
  Calendar,
  User,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock3,
} from "lucide-react";
import SaidbarConfirmation from "../components/Saidbar_confirmation";

const Liste_commandes_counfirmation = () => {
  const [search, setSearch] = useState("");

  const commandes = [
    {
      id: 1,
      client: "Ahmed",
      produit: "Power Bank 10000mAh",
      date: "2025-09-24",
      prix: 299,
      societe: "Ozon",
      statut: "Confirmer", // commande confirmée
      livraison: "Livrée",
    },
    {
      id: 2,
      client: "Sara",
      produit: "Écouteurs Bluetooth",
      date: "2025-09-20",
      prix: 199,
      societe: "Sendit",
      statut: "Confirmer",
      livraison: "Annulée",
    },
    {
      id: 3,
      client: "Hamza",
      produit: "Chargeur Rapide 22.5W",
      date: "2025-09-25",
      prix: 149,
      societe: "Amana",
      statut: "Confirmer",
      livraison: "Refusée",
    },
    {
      id: 4,
      client: "Yassine",
      produit: "Câble USB-C",
      date: "2025-09-28",
      prix: 79,
      societe: "Ozon",
      statut: "Confirmer",
      livraison: "En cours",
    },
  ];

  // 📌 Filtrer seulement commandes confirmées + recherche
  const commandesFiltrees = useMemo(() => {
    return commandes
      .filter((c) => c.statut === "Confirmer")
      .filter(
        (c) =>
          c.client.toLowerCase().includes(search.toLowerCase()) ||
          c.produit.toLowerCase().includes(search.toLowerCase())
      );
  }, [commandes, search]);

  // 📊 Statistiques
  const stats = {
    total: commandesFiltrees.length,
    revenu: commandesFiltrees.reduce((sum, c) => sum + c.prix, 0),
    societes: [...new Set(commandesFiltrees.map((c) => c.societe))].length,
  };

  return (
    <div className="flex min-h-screen bg-[#0B1220] text-white">
      {/* Sidebar */}
      <SaidbarConfirmation active="confirmees" />

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-white">
              ✅ Commandes Confirmées
            </h1>
            <p className="text-white/60">
              Liste des commandes confirmées et leur état de livraison
            </p>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <StatBox
            icon={<Package className="h-6 w-6 text-emerald-400" />}
            label="Total confirmées"
            value={stats.total}
            color="text-emerald-400"
          />
          <StatBox
            icon={<CheckCircle2 className="h-6 w-6 text-blue-400" />}
            label="Revenu estimé"
            value={`${stats.revenu} MAD`}
            color="text-blue-400"
          />
          <StatBox
            icon={<Truck className="h-6 w-6 text-yellow-400" />}
            label="Sociétés de livraison"
            value={stats.societes}
            color="text-yellow-400"
          />
        </div>

        {/* Recherche */}
        <div className="flex items-center gap-2 mb-4">
          <Search className="h-5 w-5 text-white/50" />
          <input
            type="text"
            placeholder="Rechercher par client ou produit..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#0F172A] border border-white/10 rounded-lg px-3 py-2 w-full outline-none"
          />
        </div>

        {/* Tableau commandes confirmées */}
        <div className="overflow-x-auto border border-white/10 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-[#0F172A] text-white/70">
              <tr>
                <th className="px-4 py-3 text-left">Client</th>
                <th className="px-4 py-3 text-left">Produit</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Prix</th>
                <th className="px-4 py-3 text-left">Société</th>
                <th className="px-4 py-3 text-left">Statut</th>
                <th className="px-4 py-3 text-left">État Livraison</th>
              </tr>
            </thead>
            <tbody>
              {commandesFiltrees.map((c) => (
                <tr
                  key={c.id}
                  className="border-t border-white/5 hover:bg-white/5 transition"
                >
                  <td className="px-4 py-3 flex items-center gap-2">
                    <User className="h-4 w-4 text-emerald-300" /> {c.client}
                  </td>
                  <td className="px-4 py-3">{c.produit}</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-300" /> {c.date}
                  </td>
                  <td className="px-4 py-3 font-semibold">{c.prix} MAD</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <Truck className="h-4 w-4 text-yellow-400" /> {c.societe}
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-emerald-600/20 text-emerald-400 rounded-lg text-xs font-semibold">
                      Confirmée
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {c.livraison === "Livrée" && (
                      <span className="px-2 py-1 bg-emerald-600/20 text-emerald-400 rounded-lg text-xs font-semibold">
                        ✔ Livrée
                      </span>
                    )}
                    {c.livraison === "Annulée" && (
                      <span className="px-2 py-1 bg-red-600/20 text-red-400 rounded-lg text-xs font-semibold">
                        ✘ Annulée
                      </span>
                    )}
                    {c.livraison === "Refusée" && (
                      <span className="px-2 py-1 bg-orange-600/20 text-orange-400 rounded-lg text-xs font-semibold">
                        ⚠ Refusée
                      </span>
                    )}
                    {c.livraison === "En cours" && (
                      <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded-lg text-xs font-semibold">
                        ⏳ En cours
                      </span>
                    )}
                  </td>
                </tr>
              ))}
              {commandesFiltrees.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-6 text-center text-white/50"
                  >
                    Aucune commande confirmée trouvée
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

function StatBox({ icon, label, value, color }) {
  return (
    <div className="flex items-center gap-3 bg-[#0F172A] border border-white/10 p-4 rounded-lg">
      <div>{icon}</div>
      <div>
        <p className={`text-lg font-bold ${color}`}>{value}</p>
        <p className="text-white/60 text-sm">{label}</p>
      </div>
    </div>
  );
}

export default Liste_commandes_counfirmation;