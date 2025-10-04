import { User, Mail, Phone, MapPin, Package, CheckCircle2, XCircle, Clock3 } from "lucide-react";
import SaidbarConfirmation from "../components/Saidbar_confirmation";

const ProfilConfirmation = () => {
  const client = {
    id: 1,
    nom: "Ahmed Benali",
    email: "ahmed.benali@email.com",
    phone: "+212 6 12 34 56 78",
    adresse: "Casablanca, Maroc",
    commandes: [
      { id: "CMD001", produit: "Power Bank 10000mAh", date: "2025-09-20", statut: "Confirmer" },
      { id: "CMD002", produit: "Écouteurs Bluetooth", date: "2025-09-22", statut: "Annuler" },
      { id: "CMD003", produit: "Chargeur Rapide 22.5W", date: "2025-09-25", statut: "Reporter" },
    ],
  };

  // Statistiques commandes
  const stats = {
    total: client.commandes.length,
    confirmer: client.commandes.filter((c) => c.statut === "Confirmer").length,
    annuler: client.commandes.filter((c) => c.statut === "Annuler").length,
    reporter: client.commandes.filter((c) => c.statut === "Reporter").length,
  };

  return (
    <div className="flex min-h-screen bg-[#0B1220] text-white">
      {/* Sidebar */}
      <SaidbarConfirmation active="profil" />

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-white">👤 Profil Client</h1>
          <p className="text-white/60">Informations et historique des commandes</p>
        </div>

        {/* Infos personnelles */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2"><User className="h-5 w-5 text-emerald-400" /> {client.nom}</li>
              <li className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-400" /> {client.email}</li>
              <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-yellow-400" /> {client.phone}</li>
              <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-red-400" /> {client.adresse}</li>
            </ul>
          </div>

          {/* Statistiques commandes */}
          <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Résumé des commandes</h2>
            <div className="grid grid-cols-2 gap-4">
              <StatBox icon={<Package className="h-6 w-6 text-white" />} label="Total" value={stats.total} color="text-white" />
              <StatBox icon={<CheckCircle2 className="h-6 w-6 text-emerald-400" />} label="Confirmées" value={stats.confirmer} color="text-emerald-400" />
              <StatBox icon={<XCircle className="h-6 w-6 text-red-400" />} label="Annulées" value={stats.annuler} color="text-red-400" />
              <StatBox icon={<Clock3 className="h-6 w-6 text-yellow-400" />} label="Reportées" value={stats.reporter} color="text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Liste commandes */}
        <div className="overflow-x-auto border border-white/10 rounded-xl">

        </div>
      </main>
    </div>
  );
};

// Petit composant pour résumé
function StatBox({ icon, label, value, color }) {
  return (
    <div className="flex items-center gap-3 bg-[#1E293B] p-4 rounded-lg">
      <div>{icon}</div>
      <div>
        <p className={`text-lg font-bold ${color}`}>{value}</p>
        <p className="text-white/60 text-sm">{label}</p>
      </div>
    </div>
  );
}

export default ProfilConfirmation;
