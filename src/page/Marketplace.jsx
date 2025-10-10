// src/pages/Marketplace.jsx
import React, { useState } from "react"
import Saidbar from "../components/saidbar"
import { CheckCircle2, XCircle, BarChart3, Users, Store, Star } from "lucide-react"

const Marketplace = () => {
  const [freelancers] = useState([
    {
      id: 1,
      name: "Fatima El Amrani",
      location: "Casablanca",
      avatar: "https://ui-avatars.com/api/?name=Fatima+El+Amrani&background=0D8ABC&color=fff",
      commandes: { total: 120, confirme: 95, annule: 25 },
      experience: "3 ans d’expérience dans la confirmation e-commerce",
      specialite: "Spécialiste en confirmation téléphonique",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Youssef Benali",
      location: "Rabat",
      avatar: "https://ui-avatars.com/api/?name=Youssef+Benali&background=F59E0B&color=fff",
      commandes: { total: 80, confirme: 60, annule: 20 },
      experience: "2 ans avec YouCan / Shopify",
      specialite: "Confirmation & gestion des annulations",
      rating: 4.3,
    },
    {
      id: 3,
      name: "Sara Haddad",
      location: "Marrakech",
      avatar: "https://ui-avatars.com/api/?name=Sara+Haddad&background=10B981&color=fff",
      commandes: { total: 150, confirme: 120, annule: 30 },
      experience: "5 ans en call center / confirmation",
      specialite: "Expertise multi-langues (Ar, Fr, En)",
      rating: 4.9,
    },
  ])

  const [selectedFreelancer, setSelectedFreelancer] = useState(null)
  const [abonnement, setAbonnement] = useState("basic")
  const [ressources, setRessources] = useState([])

  const ressourcesDisponibles = ["Store YouCan", "Store Shopify", "Store Manuel"]

  const calcTauxConfirmation = (f) =>
    f.commandes.total > 0
      ? ((f.commandes.confirme / f.commandes.total) * 100).toFixed(1)
      : 0

  const toggleRessource = (value) => {
    setRessources((prev) =>
      prev.includes(value) ? prev.filter((r) => r !== value) : [...prev, value]
    )
  }

  const envoyerDemande = () => {
    alert(
      `✅ Demande envoyée à ${selectedFreelancer.name}\n\n` +
        `Abonnement choisi : ${abonnement}\n` +
        `Ressources déléguées : ${ressources.join(", ") || "Aucune"}`
    )
    setSelectedFreelancer(null) // fermer modal
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <Saidbar active="marketplace" />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
          <Users className="h-8 w-8 text-blue-600" /> Marketplace des Agents de Confirmation
        </h1>

        {/* Liste freelances */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelancers.map((f) => (
            <div
              key={f.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 flex flex-col"
            >
              {/* Info Freelance */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={f.avatar}
                  alt={f.name}
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                />
                <div>
                  <h2 className="text-lg font-bold">{f.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{f.location}</p>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    <Star className="h-4 w-4" />
                    {f.rating}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3 text-sm flex-1">
                <div className="flex justify-between">
                  <span className="flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="h-4 w-4" /> Confirmées
                  </span>
                  <span className="font-semibold">{f.commandes.confirme}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1 text-red-600">
                    <XCircle className="h-4 w-4" /> Annulées
                  </span>
                  <span className="font-semibold">{f.commandes.annule}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1 text-blue-600">
                    <BarChart3 className="h-4 w-4" /> Total
                  </span>
                  <span className="font-semibold">{f.commandes.total}</span>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Taux de confirmation</span>
                    <span className="text-green-600">{calcTauxConfirmation(f)}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${calcTauxConfirmation(f)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => setSelectedFreelancer(f)}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition"
              >
                Contacter / Collaborer
              </button>
            </div>
          ))}
        </div>

        {/* Modal Détail Freelance */}
        {selectedFreelancer && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-fade-in">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  🤝 Collaboration avec {selectedFreelancer.name}
                </h2>
                <button
                  onClick={() => setSelectedFreelancer(null)}
                  className="text-gray-500 hover:text-red-500 text-xl"
                >
                  ✖
                </button>
              </div>

              {/* Infos */}
              <div className="mb-4 space-y-1 text-sm">
                <p>📍 {selectedFreelancer.location}</p>
                <p>🎯 {selectedFreelancer.specialite}</p>
                <p>💼 {selectedFreelancer.experience}</p>
              </div>

              {/* Choix Abonnement */}
              <div className="mb-5">
                <label className="font-medium">Choisir un abonnement :</label>
                <select
                  value={abonnement}
                  onChange={(e) => setAbonnement(e.target.value)}
                  className="w-full mt-2 border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="basic">Basic - 50 commandes / mois</option>
                  <option value="pro">Pro - 200 commandes / mois</option>
                  <option value="premium">Premium - Illimité</option>
                </select>
              </div>

              {/* Choix Ressources */}
              <div className="mb-6">
                <label className="font-medium">Ressources à déléguer :</label>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {ressourcesDisponibles.map((r) => (
                    <label
                      key={r}
                      className="flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={ressources.includes(r)}
                        onChange={() => toggleRessource(r)}
                      />
                      <Store className="h-4 w-4 text-blue-500" /> {r}
                    </label>
                  ))}
                </div>
              </div>

              {/* Boutons */}
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setSelectedFreelancer(null)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300"
                >
                  Annuler
                </button>
                <button
                  onClick={envoyerDemande}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Envoyer Demande
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Marketplace
