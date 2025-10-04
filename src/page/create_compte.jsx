// src/pages/MonEquipe.jsx
import React, { useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import Saidbar from "../components/saidbar";

export default function MonEquipe() {
  const [membres, setMembres] = useState([
    {
      id: 1,
      nom: "mariam21",
      email: "mariam21@email.com",
      phone: "0665113076",
      date: "2025-07-30 19:56",
      permissions: ["Afficher commandes", "Afficher status commandes"],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newMembre, setNewMembre] = useState({
    nom: "",
    email: "",
    password: "",
    permissions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMembre((prev) => ({ ...prev, [name]: value }));
  };

  const handlePermission = (perm) => {
    setNewMembre((prev) => {
      const perms = prev.permissions.includes(perm)
        ? prev.permissions.filter((p) => p !== perm)
        : [...prev.permissions, perm];
      return { ...prev, permissions: perms };
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newId = membres.length + 1;
    const dateNow = new Date().toISOString().slice(0, 16).replace("T", " ");
    setMembres((prev) => [
      ...prev,
      { id: newId, date: dateNow, ...newMembre, phone: "—" },
    ]);
    setNewMembre({ nom: "", email: "", password: "", permissions: [] });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setMembres((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-[#0B1220] text-white">
      {/* Sidebar */}
      <Saidbar active="mon-equipe" />

      {/* Main Content */}
      <main className="flex-1 min-h-screen bg-[#0B1220] p-6 md:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            👥 Mon Équipe
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg font-medium"
          >
            <Plus className="h-4 w-4" /> Ajouter un membre
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-white/10 shadow-lg">
          <table className="w-full text-sm">
            <thead className="bg-[#0F172A] text-white/70">
              <tr>
                <th className="px-4 py-3 text-left">NOM</th>
                <th className="px-4 py-3 text-left">EMAIL</th>
                <th className="px-4 py-3 text-left">PHONE</th>
                <th className="px-4 py-3 text-left">DATE DE CRÉATION</th>
                <th className="px-4 py-3 text-left">PERMISSIONS</th>
                <th className="px-4 py-3 text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {membres.map((m) => (
                <tr
                  key={m.id}
                  className="border-t border-white/5 hover:bg-white/5 transition"
                >
                  <td className="px-4 py-3">{m.nom}</td>
                  <td className="px-4 py-3">{m.email}</td>
                  <td className="px-4 py-3">{m.phone}</td>
                  <td className="px-4 py-3">{m.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {m.permissions.map((p, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 flex items-center justify-center gap-2">
                    <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30">
                      <Pencil className="h-4 w-4 text-blue-400" />
                    </button>
                    <button
                      onClick={() => handleDelete(m.id)}
                      className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30"
                    >
                      <Trash2 className="h-4 w-4 text-red-400" />
                    </button>
                  </td>
                </tr>
              ))}
              {membres.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-6 text-center text-white/50"
                  >
                    Aucun membre trouvé
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal Add */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#0F172A] w-full max-w-lg rounded-xl border border-white/10 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Ajouter un membre</h2>
              <button onClick={() => setShowModal(false)}>
                <X className="text-white/60 hover:text-white" />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-4">
              <Field
                label="Nom"
                name="nom"
                value={newMembre.nom}
                onChange={handleChange}
              />
              <Field
                label="Email"
                name="email"
                value={newMembre.email}
                onChange={handleChange}
              />
              <Field
                label="Mot de passe"
                name="password"
                type="password"
                value={newMembre.password}
                onChange={handleChange}
              />

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Permissions
                </label>
                <div className="space-y-2">
                  {[
                    "Afficher commandes",
                    "Ajouter société de livraison",
                    "Afficher status commandes",
                  ].map((perm) => (
                    <label
                      key={perm}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={newMembre.permissions.includes(perm)}
                        onChange={() => handlePermission(perm)}
                        className="h-4 w-4 rounded border-white/20 bg-transparent"
                      />
                      {perm}
                    </label>
                  ))}
                </div>
              </div>

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
}

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
