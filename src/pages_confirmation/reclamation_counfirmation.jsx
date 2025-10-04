import { useState } from "react";
import { Plus, MessageCircle, CheckCircle2, X } from "lucide-react";
import SaidbarConfirmation from "../components/Saidbar_confirmation";

const Reclamation_counfirmation = () => {
  const [reclamations, setReclamations] = useState([
    {
      id: 1,
      client: "Ahmed",
      titre: "Produit non livré",
      message: "J’ai commandé une power bank mais je n’ai pas encore reçu la livraison.",
      statut: "En attente",
      reponse: "",
    },
    {
      id: 2,
      client: "Sara",
      titre: "Produit défectueux",
      message: "Les écouteurs Bluetooth ne fonctionnent pas après 2 jours.",
      statut: "Répondu",
      reponse: "Nous allons remplacer votre produit sous 48h.",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newRec, setNewRec] = useState({
    client: "",
    titre: "",
    message: "",
    statut: "En attente",
    reponse: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRec((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newId = reclamations.length + 1;
    setReclamations((prev) => [...prev, { id: newId, ...newRec }]);
    setNewRec({ client: "", titre: "", message: "", statut: "En attente", reponse: "" });
    setShowModal(false);
  };

  const handleReponse = (id, reponse) => {
    setReclamations((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, reponse, statut: "Répondu" } : r
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-[#0B1220] text-white">
      {/* Sidebar */}
      <SaidbarConfirmation active="reclamations" />

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-white">📢 Réclamations</h1>
            <p className="text-white/60">
              Gérez et répondez aux réclamations de vos clients
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg font-medium"
          >
            <Plus className="h-4 w-4" /> Faire une réclamation
          </button>
        </div>

        {/* Liste des réclamations */}
        <div className="overflow-x-auto border border-white/10 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-[#0F172A] text-white/70">
              <tr>
                <th className="px-4 py-3 text-left">Client</th>
                <th className="px-4 py-3 text-left">Titre</th>
                <th className="px-4 py-3 text-left">Message</th>
                <th className="px-4 py-3 text-left">Statut</th>
                <th className="px-4 py-3 text-left">Réponse</th>
              </tr>
            </thead>
            <tbody>
              {reclamations.map((r) => (
                <tr
                  key={r.id}
                  className="border-t border-white/5 hover:bg-white/5 transition"
                >
                  <td className="px-4 py-3">{r.client}</td>
                  <td className="px-4 py-3 font-semibold">{r.titre}</td>
                  <td className="px-4 py-3">{r.message}</td>
                  <td className="px-4 py-3">
                    {r.statut === "En attente" ? (
                      <span className="text-yellow-400">⏳ {r.statut}</span>
                    ) : (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" /> {r.statut}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {r.reponse ? (
                      <p className="text-emerald-300">{r.reponse}</p>
                    ) : (
                      <ReponseForm
                        onSubmit={(val) => handleReponse(r.id, val)}
                      />
                    )}
                  </td>
                </tr>
              ))}
              {reclamations.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-6 text-center text-white/50"
                  >
                    Aucune réclamation trouvée
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal Faire une réclamation */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#0F172A] w-full max-w-lg rounded-xl border border-white/10 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Nouvelle réclamation</h2>
              <button onClick={() => setShowModal(false)}>
                <X className="text-white/60 hover:text-white" />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-4">
              <Field
                label="Client"
                name="client"
                value={newRec.client}
                onChange={handleChange}
              />
              <Field
                label="Titre"
                name="titre"
                value={newRec.titre}
                onChange={handleChange}
              />
              <Field
                label="Message"
                name="message"
                value={newRec.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 py-2 rounded-lg font-medium"
              >
                Envoyer
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

function ReponseForm({ onSubmit }) {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.trim() !== "") {
      onSubmit(val);
      setVal("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Écrire une réponse..."
        className="bg-[#0B1220] border border-white/10 rounded-lg px-2 py-1 text-sm flex-1"
      />
      <button type="submit" className="p-1 bg-blue-600 rounded hover:bg-blue-500">
        <MessageCircle className="h-4 w-4" />
      </button>
    </form>
  );
}

export default Reclamation_counfirmation;
