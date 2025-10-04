"use client"

import { useState } from "react"
import { Search, TrendingUp, TrendingDown, ShoppingCart, Users, DollarSign } from "lucide-react"
import Saidbar from "../components/saidbar"
const  Categore_produit =()=> {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("totalOrders")
  const categories = [
    { id: "1", name: "Électronique", icon: "📱", totalOrders: 2450, totalRevenue: 485000, averageOrderValue: 198, topClients: 156, growthRate: 15.2, trend: "up", popularProducts: ["Smartphones", "Écouteurs", "Chargeurs", "Coques"], lastOrderDate: "2024-01-15" },
    { id: "2", name: "Mode & Vêtements", icon: "👕", totalOrders: 3200, totalRevenue: 320000, averageOrderValue: 100, topClients: 245, growthRate: 8.7, trend: "up", popularProducts: ["T-shirts", "Jeans", "Robes", "Chaussures"], lastOrderDate: "2024-01-15" },
    { id: "3", name: "Maison & Jardin", icon: "🏠", totalOrders: 1850, totalRevenue: 275000, averageOrderValue: 149, topClients: 98, growthRate: 12.3, trend: "up", popularProducts: ["Décoration", "Outils", "Plantes", "Mobilier"], lastOrderDate: "2024-01-14" },
    { id: "4", name: "Beauté & Cosmétiques", icon: "💄", totalOrders: 2100, totalRevenue: 189000, averageOrderValue: 90, topClients: 187, growthRate: 22.1, trend: "up", popularProducts: ["Maquillage", "Soins", "Parfums", "Accessoires"], lastOrderDate: "2024-01-15" },
    { id: "5", name: "Sports & Loisirs", icon: "⚽", totalOrders: 1650, totalRevenue: 198000, averageOrderValue: 120, topClients: 89, growthRate: 5.4, trend: "stable", popularProducts: ["Équipements", "Vêtements sport", "Chaussures", "Accessoires"], lastOrderDate: "2024-01-13" },
    { id: "7", name: "Livres & Média", icon: "📚", totalOrders: 980, totalRevenue: 58800, averageOrderValue: 60, topClients: 67, growthRate: -5.3, trend: "down", popularProducts: ["Romans", "Magazines", "BD", "Livres éducatifs"], lastOrderDate: "2024-01-12" },
    { id: "8", name: "Automobile", icon: "🚗", totalOrders: 750, totalRevenue: 225000, averageOrderValue: 300, topClients: 45, growthRate: 18.9, trend: "up", popularProducts: ["Pièces détachées", "Accessoires", "Huiles", "Pneus"], lastOrderDate: "2024-01-14" },
  ]

  const filteredCategories = categories
    .filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.popularProducts.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "totalOrders": return b.totalOrders - a.totalOrders
        case "totalRevenue": return b.totalRevenue - a.totalRevenue
        case "growthRate": return b.growthRate - a.growthRate
        case "averageOrderValue": return b.averageOrderValue - a.averageOrderValue
        default: return 0
      }
    })

  const getTrendIcon = (trend) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-500" />
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />
    return <div className="h-4 w-4" />
  }

  const getGrowthColor = (rate) => {
    if (rate > 10) return "text-green-600"
    if (rate > 0) return "text-blue-600"
    return "text-red-600"
  }

  const totalOrders = categories.reduce((sum, c) => sum + c.totalOrders, 0)
  const totalRevenue = categories.reduce((sum, c) => sum + c.totalRevenue, 0)
  const totalClients = categories.reduce((sum, c) => sum + c.topClients, 0)
  const averageGrowth = categories.reduce((sum, c) => sum + c.growthRate, 0) / categories.length

  return (
    <div className="flex min-h-screen bg-[#0F172A] text-white">
        <Saidbar/>
      {/* Header */}
      <main className="flex-1 p-8 space-y-8">

      
      <div>
        <h1 className="text-3xl font-bold">Catégories de Produits</h1>
        <p className="text-gray-400">Analyse des catégories les plus consommées par vos clients</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Total Commandes</span>
            <ShoppingCart className="h-4 w-4" />
          </div>
          <p className="text-2xl font-bold">{totalOrders.toLocaleString()}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Chiffre d'Affaires</span>
            <DollarSign className="h-4 w-4" />
          </div>
          <p className="text-2xl font-bold">{totalRevenue.toLocaleString()} DH</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Croissance Moyenne</span>
            <TrendingUp className="h-4 w-4" />
          </div>
          <p className={`text-2xl font-bold ${getGrowthColor(averageGrowth)}`}>
            {averageGrowth > 0 ? "+" : ""}
            {averageGrowth.toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par catégorie ou produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm"
          >
            <option value="totalOrders">Nombre de commandes</option>
            <option value="totalRevenue">Chiffre d'affaires</option>
            <option value="growthRate">Taux de croissance</option>
            <option value="averageOrderValue">Panier moyen</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-800 p-4 rounded-lg shadow overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Analyse par Catégorie</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="text-left py-2">Catégorie</th>
              <th className="text-left py-2">Commandes</th>
              <th className="text-left py-2">Chiffre d'Affaires</th>
              <th className="text-left py-2">Panier Moyen</th>
              <th className="text-left py-2">Clients</th>
              <th className="text-left py-2">Croissance</th>
              <th className="text-left py-2">Produits Populaires</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((c) => (
              <tr key={c.id} className="border-b border-gray-700">
                <td className="py-3 flex items-center gap-2">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-xs text-gray-400">Dernière commande: {c.lastOrderDate}</p>
                  </div>
                </td>
                <td className="py-3">{c.totalOrders.toLocaleString()}</td>
                <td className="py-3">{c.totalRevenue.toLocaleString()} DH</td>
                <td className="py-3">{c.averageOrderValue} DH</td>
                <td className="py-3">{c.topClients}</td>
                <td className="py-3 flex items-center gap-1">
                  {getTrendIcon(c.trend)}
                  <span className={`font-medium ${getGrowthColor(c.growthRate)}`}>
                    {c.growthRate > 0 ? "+" : ""}
                    {c.growthRate}%
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex flex-wrap gap-1">
                    {c.popularProducts.slice(0, 3).map((p) => (
                      <span key={p} className="px-2 py-1 text-xs bg-gray-700 rounded-lg">{p}</span>
                    ))}
                    {c.popularProducts.length > 3 && (
                      <span className="px-2 py-1 text-xs border border-gray-600 rounded-lg">
                        +{c.popularProducts.length - 3}
                      </span>
                    )}
                  </div>
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


export default Categore_produit;