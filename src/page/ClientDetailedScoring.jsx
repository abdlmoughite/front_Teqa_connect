"use client"
import { useState } from "react"
import Saidbar from "../components/saidbar"

export default function ClientDetailedScoring() {
  const [selectedClient, setSelectedClient] = useState("all")
  const [search, setSearch] = useState("")

  const clients = [
    {
      id: "1",
      name: "Ahmed Benali",
      email: "ahmed.benali@email.com",
      phone: "+212 6 12 34 56 78",
      totalOrders: 45,
      totalAmount: 125000,
      avgOrder: 2778,
      companies: 3,
      orders: [
        { id: "CMD001", date: "2024-01-15", amount: 2500, company: "Ozon", status: "Livré", time: "2j" },
        { id: "CMD002", date: "2024-01-20", amount: 3200, company: "Sendit", status: "Livré", time: "3j" },
        { id: "CMD003", date: "2024-01-25", amount: 1800, company: "oLivraison", status: "Refusé", time: "-" },
      ],
    },
    {
      id: "2",
      name: "Fatima Zahra",
      email: "fatima.zahra@email.com",
      phone: "+212 6 87 65 43 21",
      totalOrders: 32,
      totalAmount: 89000,
      avgOrder: 2781,
      companies: 3,
      orders: [
        { id: "CMD006", date: "2024-01-12", amount: 3500, company: "Sendit", status: "Livré", time: "2j" },
        { id: "CMD007", date: "2024-01-18", amount: 2800, company: "Ozon", status: "Livré", time: "1j" },
        { id: "CMD008", date: "2024-01-28", amount: 4200, company: "oLivraison", status: "Livré", time: "4j" },
      ],
    },
    {
      id: "3",
      name: "Youssef Alami",
      email: "youssef.alami@email.com",
      phone: "+212 6 11 22 33 44",
      totalOrders: 28,
      totalAmount: 76500,
      avgOrder: 2732,
      companies: 2,
      orders: [
        { id: "CMD009", date: "2024-01-10", amount: 2200, company: "Ozon", status: "Livré", time: "2j" },
        { id: "CMD010", date: "2024-01-22", amount: 3800, company: "Sendit", status: "Refusé", time: "-" },
      ],
    },
  ]

  const selected = clients.find(c => c.id === selectedClient)

  // 🔎 filtrer les clients
  const filteredClients = clients.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-[#0F172A] text-white">
      <Saidbar />
      <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Scoring Détaillé des Clients</h1>
            <p className="text-gray-400">Analyse des commandes et livraisons par client</p>
          </div>
          {/* Champ recherche */}
          <input
            type="text"
            placeholder="🔎 Rechercher un client..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Vue liste */}
        {selectedClient === "all" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredClients.map(c => (
              <div
                key={c.id}
                className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700 hover:shadow-lg hover:border-blue-500 cursor-pointer transition"
                onClick={() => setSelectedClient(c.id)}
              >
                <h3 className="text-lg font-semibold flex justify-between items-center">
                  {c.name} <span className="text-gray-400">📦</span>
                </h3>
                <p className="text-sm text-gray-400">{c.email}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Commandes:</span>
                    <span className="font-medium">{c.totalOrders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Montant:</span>
                    <span className="font-medium">{c.totalAmount.toLocaleString()} DH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Panier Moyen:</span>
                    <span className="font-medium">{c.avgOrder} DH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sociétés:</span>
                    <span className="font-medium">{c.companies}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* si aucun résultat */}
            {filteredClients.length === 0 && (
              <p className="text-gray-400 col-span-full text-center">
                Aucun client trouvé pour "<span className="text-blue-400">{search}</span>"
              </p>
            )}
          </div>
        )}

        {/* Vue détaillée */}
        {selectedClient !== "all" && selected && (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSelectedClient("all")}
                className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-700"
              >
                ← Retour
              </button>
              <div>
                <h2 className="text-2xl font-bold">{selected.name}</h2>
                <p className="text-gray-400">{selected.email} • {selected.phone}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <h4 className="text-sm text-gray-400">Total Commandes</h4>
                <p className="text-2xl font-bold">{selected.totalOrders}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <h4 className="text-sm text-gray-400">Montant Total</h4>
                <p className="text-2xl font-bold">{selected.totalAmount.toLocaleString()} DH</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <h4 className="text-sm text-gray-400">Panier Moyen</h4>
                <p className="text-2xl font-bold">{selected.avgOrder} DH</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
                <h4 className="text-sm text-gray-400">Sociétés Utilisées</h4>
                <p className="text-2xl font-bold">{selected.companies}</p>
              </div>
            </div>

            {/* Historique commandes */}
            <div className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700">
              <h4 className="font-semibold mb-4">Historique des Commandes</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-gray-700">
                    <th className="py-2">ID</th>
                    <th>Date</th>
                    <th>Montant</th>
                    <th>Société</th>
                    <th>Statut</th>
                    <th>Livraison</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.orders.map(o => (
                    <tr key={o.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                      <td className="py-2 font-medium">{o.id}</td>
                      <td>{o.date}</td>
                      <td>{o.amount.toLocaleString()} DH</td>
                      <td>{o.company}</td>
                      <td>
                        {o.status === "Livré" && <span className="text-green-400">{o.status}</span>}
                        {o.status === "Refusé" && <span className="text-red-400">{o.status}</span>}
                        {o.status === "Annulé" && <span className="text-yellow-400">{o.status}</span>}
                      </td>
                      <td>{o.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
