"use client"

import { useState } from "react"
import { Plus, Truck, CheckCircle, AlertCircle, Settings, Search, Eye } from "lucide-react"
import Saidbar from "../components/saidbar"

const Scoring_Livraison = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const deliveryCompanies = [
    { id: 1, name: "Ozon", type: "Express", status: "Actif", description: "Livraison rapide dans tout le Maroc", apiKey: "oz_***************", deliveryTime: "24-48h", coverage: "National", totalDeliveries: 1250, successRate: 96.5, avgCost: 25, lastSync: "Il y a 1 heure" },
    { id: 2, name: "Sendit", type: "Standard", status: "Actif", description: "Service de livraison économique", apiKey: "sd_***************", deliveryTime: "2-3 jours", coverage: "Grandes villes", totalDeliveries: 890, successRate: 94.2, avgCost: 18, lastSync: "Il y a 2 heures" },
    { id: 3, name: "oLivraison", type: "Premium", status: "Maintenance", description: "Livraison premium avec suivi GPS", apiKey: "ol_***************", deliveryTime: "12-24h", coverage: "Casablanca, Rabat", totalDeliveries: 456, successRate: 98.1, avgCost: 35, lastSync: "Il y a 6 heures" },
  ]

  const availableCompanies = [
    { name: "DHL Express", type: "International", description: "Livraison express internationale", coverage: "Mondial" },
    { name: "Aramex", type: "Standard", description: "Service de livraison régional", coverage: "MENA" },
    { name: "Chronopost", type: "Express", description: "Livraison express La Poste", coverage: "National + International" },
  ]

  const stats = {
    totalCompanies: deliveryCompanies.length,
    activeCompanies: deliveryCompanies.filter((c) => c.status === "Actif").length,
    totalDeliveries: deliveryCompanies.reduce((s, c) => s + c.totalDeliveries, 0),
    avgSuccessRate: Math.round(deliveryCompanies.reduce((s, c) => s + c.successRate, 0) / deliveryCompanies.length),
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Actif": return "bg-green-600/20 text-green-400"
      case "Maintenance": return "bg-yellow-600/20 text-yellow-400"
      case "Inactif": return "bg-red-600/20 text-red-400"
      default: return "bg-gray-600/20 text-gray-400"
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "Express": return "bg-blue-600/20 text-blue-400"
      case "Premium": return "bg-purple-600/20 text-purple-400"
      case "Standard": return "bg-gray-600/20 text-gray-300"
      case "E-commerce": return "bg-green-600/20 text-green-400"
      case "International": return "bg-orange-600/20 text-orange-400"
      default: return "bg-gray-600/20 text-gray-300"
    }
  }

  const filteredCompanies = deliveryCompanies.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-[#0F172A] text-white">
      <Saidbar />
      <main className="flex-1 p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Sociétés de Livraison</h1>
            <p className="text-gray-400">Gérez vos partenaires de livraison</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 shadow">
            <Plus className="h-4 w-4" /> Ajouter Société
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Sociétés Connectées</p>
              <Truck className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{stats.totalCompanies}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Actives</p>
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{stats.activeCompanies}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Livraisons</p>
              <Truck className="h-5 w-5 text-purple-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{stats.totalDeliveries}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Taux de Réussite</p>
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{stats.avgSuccessRate}%</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une société..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Connected Companies */}
        <div className="space-y-4">
          {filteredCompanies.map((company) => (
            <div key={company.id} className="p-6 bg-gray-800 rounded-xl shadow border border-gray-700">
              <div className="flex justify-between items-start">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-lg">{company.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(company.status)}`}>
                      {company.status}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(company.type)}`}>
                      {company.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{company.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div><span className="text-gray-400">Délai:</span> <span className="font-medium">{company.deliveryTime}</span></div>
                    <div><span className="text-gray-400">Couverture:</span> <span className="font-medium">{company.coverage}</span></div>
                    <div><span className="text-gray-400">Livraisons:</span> <span className="font-medium">{company.totalDeliveries}</span></div>
                    <div><span className="text-gray-400">Réussite:</span> <span className="font-medium text-green-400">{company.successRate}%</span></div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>API: {company.apiKey}</span>
                    <span>Coût: {company.avgCost} MAD</span>
                    <span>Sync: {company.lastSync}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button className="p-2 rounded bg-gray-700 hover:bg-gray-600"><Eye className="h-4 w-4" /></button>
                  <button className="p-2 rounded bg-gray-700 hover:bg-gray-600"><Settings className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Available Companies */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Sociétés Disponibles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {availableCompanies.map((c, i) => (
              <div key={i} className="p-6 bg-gray-800 rounded-xl shadow border border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold">{c.name}</h3>
                    <p className="text-sm text-gray-400">{c.description}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(c.type)}`}>{c.type}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">Couverture: <span className="font-medium">{c.coverage}</span></p>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 justify-center">
                  <Plus className="h-4 w-4" /> Connecter
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Scoring_Livraison