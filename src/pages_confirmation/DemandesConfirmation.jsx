// src/pages/CollaborateursConfirmation.jsx
import React, { useState } from "react"
import { Link } from "react-router-dom"
import SaidbarConfirmation from "../components/Saidbar_confirmation"
import { Store, CheckCircle2, XCircle, PauseCircle, ClipboardList } from "lucide-react"

const CollaborateursConfirmation = () => {
  const [collaborateurs, setCollaborateurs] = useState([
    {
      id: 1,
      store: "Boutique YouCan - Ahmed",
      type: "YouCan",
      abonnement: "Pro - 200 commandes / mois",
      date: "2025-08-12",
      status: "actif",
    },
    {
      id: 2,
      store: "Shopify Store - Sara",
      type: "Shopify",
      abonnement: "Premium - Illimité",
      date: "2025-09-01",
      status: "actif",
    },
    {
      id: 3,
      store: "Boutique Manuel - Youssef",
      type: "Manuel",
      abonnement: "Basic - 50 commandes / mois",
      date: "2025-07-20",
      status: "suspendu",
    },
  ])

  const handleAction = (id, action) => {
    setCollaborateurs((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: action } : c))
    )
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "actif":
        return (
          <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4" /> Actif
          </span>
        )
      case "suspendu":
        return (
          <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs flex items-center gap-1">
            <PauseCircle className="h-4 w-4" /> Suspendu
          </span>
        )
      default:
        return (
          <span className="px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs">
            Inconnu
          </span>
        )
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <SaidbarConfirmation active="collaborateurs" />

      {/* Contenu principal */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">🤝 Liste des Collaborateurs</h1>

        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3 text-left">Store</th>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left">Abonnement</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Statut</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {collaborateurs.map((c) => (
                <tr
                  key={c.id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="px-4 py-3 flex items-center gap-2">
                    <Store className="h-4 w-4 text-blue-500" />
                    {c.store}
                  </td>
                  <td className="px-4 py-3">{c.type}</td>
                  <td className="px-4 py-3">{c.abonnement}</td>
                  <td className="px-4 py-3">{c.date}</td>
                  <td className="px-4 py-3">{getStatusBadge(c.status)}</td>
                  <td className="px-4 py-3 flex flex-wrap gap-2">
                    {/* Voir commandes */}
                    <Link
                      to={`/commandes_counfirmation/${c.id}`}
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs flex items-center gap-1"
                    >
                      <ClipboardList className="h-4 w-4" /> Commandes
                    </Link>

                    {/* Actions selon statut */}
                    {c.status === "actif" && (
                      <button
                        onClick={() => handleAction(c.id, "suspendu")}
                        className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white rounded text-xs flex items-center gap-1"
                      >
                        <PauseCircle className="h-4 w-4" /> Suspendre
                      </button>
                    )}
                    {c.status === "suspendu" && (
                      <button
                        onClick={() => handleAction(c.id, "actif")}
                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs flex items-center gap-1"
                      >
                        <CheckCircle2 className="h-4 w-4" /> Réactiver
                      </button>
                    )}
                    <button
                      onClick={() => handleAction(c.id, "supprimer")}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs flex items-center gap-1"
                    >
                      <XCircle className="h-4 w-4" /> Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default CollaborateursConfirmation
