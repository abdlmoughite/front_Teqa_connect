// src/pages/CommandeTember.jsx
import React, { useState } from "react"
import Saidbar from "../components/saidbar"
import { MessageCircle, ShoppingBag } from "lucide-react"

const CommandeTember = () => {
  const [commandes, setCommandes] = useState([
    {
      id: 1,
      nom_client: "Ahmed Ali",
      adresse_client: "Casablanca, Maarif",
      numero_client: "+212612345678",
      produit: "iPhone 14 Pro Max",
      status: "confirmer",
      source: "manuel",
    },
    {
      id: 2,
      nom_client: "Sara El Mansouri",
      adresse_client: "Rabat, Agdal",
      numero_client: "+212698745123",
      produit: "PowerBank 10000mAh",
      status: "pas reponce 2",
      source: "youcan",
    },
    {
      id: 3,
      nom_client: "Youssef B.",
      adresse_client: "Fès, Centre",
      numero_client: "+212611112233",
      produit: "AirPods Pro",
      status: "boite vocal",
      source: "shopify",
    },
  ])

  const statusOptions = [
    "confirmer",
    "annuler",
    "pas reponce 1",
    "pas reponce 2",
    "pas reponce 3",
    "boite vocal",
  ]

  const handleStatusChange = (id, newStatus) => {
    setCommandes((prev) =>
      prev.map((cmd) => (cmd.id === id ? { ...cmd, status: newStatus } : cmd))
    )
  }

  const sendWhatsApp = (numero, produit) => {
    const msg = encodeURIComponent(
      `Bonjour, nous vous contactons concernant votre commande : ${produit}.`
    )
    window.open(`https://wa.me/${numero.replace("+", "")}?text=${msg}`, "_blank")
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "confirmer":
        return "bg-green-100 text-green-700"
      case "annuler":
        return "bg-red-100 text-red-700"
      case "boite vocal":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-200 text-gray-700"
    }
  }

  const getSourceBadge = (source) => {
    switch (source) {
      case "manuel":
        return (
          <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 flex items-center gap-1">
            <ShoppingBag className="h-4 w-4" /> Manuel
          </span>
        )
      case "youcan":
        return (
          <span className="px-2 py-1 rounded bg-purple-100 text-purple-700 flex items-center gap-1">
            <ShoppingBag className="h-4 w-4" /> YouCan
          </span>
        )
      case "shopify":
        return (
          <span className="px-2 py-1 rounded bg-pink-100 text-pink-700 flex items-center gap-1">
            <ShoppingBag className="h-4 w-4" /> Shopify
          </span>
        )
      default:
        return <span className="px-2 py-1 rounded bg-gray-200 text-gray-700">Inconnue</span>
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <Saidbar active="commande_tember" />

      {/* Contenu principal */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">📋 Liste des Commandes Tember</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Client</th>
                <th className="px-4 py-2 text-left">Adresse</th>
                <th className="px-4 py-2 text-left">Téléphone</th>
                <th className="px-4 py-2 text-left">Produit</th>
                <th className="px-4 py-2 text-left">Source</th>
                <th className="px-4 py-2 text-left">Statut</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((cmd) => (
                <tr
                  key={cmd.id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="px-4 py-2">{cmd.id}</td>
                  <td className="px-4 py-2">{cmd.nom_client}</td>
                  <td className="px-4 py-2">{cmd.adresse_client}</td>
                  <td className="px-4 py-2">{cmd.numero_client}</td>
                  <td className="px-4 py-2">{cmd.produit}</td>
                  <td className="px-4 py-2">{getSourceBadge(cmd.source)}</td>
                  <td className="px-4 py-2">
                    <select
                      value={cmd.status}
                      onChange={(e) => handleStatusChange(cmd.id, e.target.value)}
                      className={`px-2 py-1 rounded text-sm ${getStatusBadge(cmd.status)}`}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => sendWhatsApp(cmd.numero_client, cmd.produit)}
                      className="flex items-center gap-1 px-3 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
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

export default CommandeTember
