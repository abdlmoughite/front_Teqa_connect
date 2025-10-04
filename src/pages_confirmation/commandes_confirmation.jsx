import { useState } from "react";
import { Plus, Pencil, Trash2, Check, X, AlertTriangle } from "lucide-react";
import SaidbarConfirmation from "../components/Saidbar_confirmation";

const ListeCommandes_confirmation = () => {
  const [commandes, setCommandes] = useState([
    {
      id: 1,
      client: "Ahmed",
      produit: "Power Bank 10000mAh",
      date: "2025-09-24",
      statut: "Confirmer",
      livraison: false,
      reportDate: "",
    },
    {
      id: 2,
      client: "Sara",
      produit: "Écouteurs Bluetooth",
      date: "2025-09-20",
      statut: "Reporter",
      livraison: true,
      reportDate: "2025-10-01", // Exemple : commande reportée à aujourd'hui
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCommande, setNewCommande] = useState({
    client: "",
    produit: "",
    date: "",
    statut: "Confirmer",
    livraison: false,
    reportDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCommande((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newId = commandes.length + 1;
    setCommandes((prev) => [...prev, { id: newId, ...newCommande }]);
    setNewCommande({
      client: "",
      produit: "",
      date: "",
      statut: "Confirmer",
      livraison: false,
      reportDate: "",
    });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setCommandes((prev) => prev.filter((c) => c.id !== id));
  };

  const handleStatusChange = (id, statut) => {
    setCommandes((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, statut, reportDate: statut !== "Reporter" ? "" : c.reportDate }
          : c
      )
    );
  };

  const handleReportDate = (id, date) => {
    setCommandes((prev) =>
      prev.map((c) => (c.id === id ? { ...c, reportDate: date } : c))
    );
  };

  const handleLivraison = (id) => {
    setCommandes((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, livraison: true } : c
      )
    );
  };

  // 📌 Vérifier commandes reportées pour aujourd'hui
  const today = new Date().toISOString().split("T")[0];
  const commandesReporterAuj = commandes.filter(
    (c) => c.statut === "Reporter" && c.reportDate === today
  );

  return (
    <div className="flex min-h-screen bg-[#0B1220] text-white">
      {/* Sidebar */}
      <SaidbarConfirmation active="commandes" />

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-white">
              📋 Liste Commandes
            </h1>
            <p className="text-white/60">
              Gérez vos commandes et leurs statuts
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg font-medium"
          >
            <Plus className="h-4 w-4" /> Ajouter commande
          </button>
        </div>

        {/* 🔔 Alerte commandes à reporter aujourd'hui */}
        {commandesReporterAuj.length > 0 && (
          <div className="mb-6 p-4 bg-yellow-600/20 border border-yellow-600 rounded-lg flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1" />
            <div>
              <p className="font-semibold text-yellow-300">
                {commandesReporterAuj.length} commande(s) doivent être traitées aujourd'hui
              </p>
              <ul className="list-disc list-inside text-yellow-200 mt-1">
                {commandesReporterAuj.map((c) => (
                  <li key={c.id}>
                    <span className="font-medium">{c.client}</span> – {c.produit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tableau commandes */}
        <div className="overflow-x-auto border border-white/10 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-[#0F172A] text-white/70">
              <tr>
                <th className="px-4 py-3 text-left">Client</th>
                <th className="px-4 py-3 text-left">Produit</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Statut</th>
                <th className="px-4 py-3 text-left">Livraison</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((c) => (
                <tr
                  key={c.id}
                  className="border-t border-white/5 hover:bg-white/5 transition"
                >
                  <td className="px-4 py-3">{c.client}</td>
                  <td className="px-4 py-3">{c.produit}</td>
                  <td className="px-4 py-3">{c.date}</td>
                  <td className="px-4 py-3">
                    <select
                      value={c.statut}
                      onChange={(e) =>
                        handleStatusChange(c.id, e.target.value)
                      }
                      className="bg-[#0B1220] border border-white/10 rounded-lg px-2 py-1"
                    >
                      <option>Confirmer</option>
                      <option>Annuler</option>
                      <option>Reporter</option>
                      <option>Pas réponse</option>
                      <option>Boîte vocale</option>
                    </select>
                    {c.statut === "Reporter" && (
                      <input
                        type="date"
                        value={c.reportDate}
                        onChange={(e) =>
                          handleReportDate(c.id, e.target.value)
                        }
                        className="mt-2 bg-[#0B1220] border border-white/10 rounded-lg px-2 py-1"
                      />
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {c.livraison ? (
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Check className="h-4 w-4" /> Ajouté
                      </span>
                    ) : (
                      <button
                        onClick={() => handleLivraison(c.id)}
                        className="text-blue-400 hover:underline"
                      >
                        Ajouter
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-3 flex items-center justify-center gap-2">
                    <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30">
                      <Pencil className="h-4 w-4 text-blue-400" />
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30"
                    >
                      <Trash2 className="h-4 w-4 text-red-400" />
                    </button>
                  </td>
                </tr>
              ))}
              {commandes.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-6 text-center text-white/50"
                  >
                    Aucune commande trouvée
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal Ajouter commande */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#0F172A] w-full max-w-lg rounded-xl border border-white/10 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Ajouter commande</h2>
              <button onClick={() => setShowModal(false)}>
                <X className="text-white/60 hover:text-white" />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-4">
              <Field
                label="Client"
                name="client"
                value={newCommande.client}
                onChange={handleChange}
              />
              <Field
                label="Produit"
                name="produit"
                value={newCommande.produit}
                onChange={handleChange}
              />
              <Field
                label="Date"
                name="date"
                type="date"
                value={newCommande.date}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 py-2 rounded-lg font-medium"
              >
                Enregistrer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

function Field({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm text-white/70 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-3 py-2 outline-none"
      />
    </div>
  );
}

export default ListeCommandes_confirmation;
