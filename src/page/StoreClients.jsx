import { useState } from "react"
import Saidbar from "../components/saidbar"
import {
  Search,
  Eye,
  Edit,
  MapPin,
  Phone,
  Users,
  Star,
  TrendingUp,
} from "lucide-react"

export function StoreClients() {
  const [searchTerm, setSearchTerm] = useState("")
  const [scoreFilter, setScoreFilter] = useState("all")

  const clients = [
    {
      id: "CLT-001",
      name: "Ahmed Benali",
      phone: "0612345678",
      email: "ahmed.benali@email.com",
      address: "Casablanca, Maarif",
      totalOrders: 45,
      totalSpent: "125,000 MAD",
      avgOrder: "2,778 MAD",
      score: 95,
      lastOrder: "2024-01-15",
      status: "VIP",
      joinDate: "2023-03-15",
    },
    {
      id: "CLT-002",
      name: "Fatima Zahra",
      phone: "0623456789",
      email: "fatima.zahra@email.com",
      address: "Rabat, Agdal",
      totalOrders: 38,
      totalSpent: "98,000 MAD",
      avgOrder: "2,579 MAD",
      score:81,
      lastOrder: "2024-01-14",
      status: "Fidèle",
      joinDate: "2023-05-20",
    },
    {
      id: "CLT-003",
      name: "Mohamed Alami",
      phone: "0634567890",
      email: "mohamed.alami@email.com",
      address: "Marrakech, Gueliz",
      totalOrders: 32,
      totalSpent: "82,000 MAD",
      avgOrder: "2,563 MAD",
      score: 71,
      lastOrder: "2024-01-13",
      status: "Régulier",
      joinDate: "2023-07-10",
    },
    {
      id: "CLT-004",
      name: "Aicha Bennani",
      phone: "0645678901",
      email: "aicha.bennani@email.com",
      address: "Fès, Centre Ville",
      totalOrders: 28,
      totalSpent: "71,000 MAD",
      avgOrder: "2,536 MAD",
      score: 41,
      lastOrder: "2024-01-12",
      status: "Régulier",
      joinDate: "2023-08-25",
    },
    {
      id: "CLT-005",
      name: "Youssef Tazi",
      phone: "0656789012",
      email: "youssef.tazi@email.com",
      address: "Tanger, Malabata",
      totalOrders: 15,
      totalSpent: "28,900 MAD",
      avgOrder: "1,927 MAD",
      score: 20,
      lastOrder: "2024-01-10",
      status: "Nouveau",
      joinDate: "2023-11-15",
    },
  ]

const getScoreColor = (score) => {
  if (score >= 80) return "text-green-500"   // Vert vif
  if (score >= 65) return "text-blue-500"    // Bleu
  if (score >= 40) return "text-red-500"     // Rouge
  if (score <= 40) return "text-black"    // Noir/Gris foncé
  return "text-yellow-600"                   // Jaune (par défaut)
}

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesScore =
      scoreFilter === "all" ||
      (scoreFilter === "high" && client.score >= 80) ||
      (scoreFilter === "medium" && client.score >= 60 && client.score < 80) ||
      (scoreFilter === "low" && client.score < 60)
    return matchesSearch && matchesScore
  })

  const [theme , setTheme] = useState('Dark')
  return (
       <div className="flex min-h-screen bg-gray-100 text-gray-900 dark:bg-[#0F172A] dark:text-white">
      <Saidbar active="clients" />
      <main className="flex-1 p-6 md:p-8 bg-white dark:bg-gray-900 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Mes Clients</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gérez votre base de clients et leurs scores
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Toggle Dark/Light */}
            <button
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {theme === "dark" ? (
                <p className="h-5 w-5 text-yellow-400" />
              ) : (
                <p className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium shadow text-white">
              + Nouveau Client
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Clients</p>
              <Users className="h-4 w-4 text-blue-400" />
            </div>
            <p className="text-2xl font-bold">20</p>
            <p className="text-xs text-green-500">+12% ce mois</p>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">Clients VIP</p>
              <Star className="h-4 w-4 text-purple-400" />
            </div>
            <p className="text-2xl font-bold">5</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">25% du total</p>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">Score Moyen</p>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </div>
            <p className="text-2xl font-bold">73/100</p>
            <p className="text-xs text-green-500">+3 points ce mois</p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              placeholder="Rechercher par nom, téléphone ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <select
            value={scoreFilter}
            onChange={(e) => setScoreFilter(e.target.value)}
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm"
          >
            <option value="all">Tous les scores</option>
            <option value="high">Score élevé (80+)</option>
            <option value="medium">Score moyen (60-79)</option>
            <option value="low">Score faible (&lt;60)</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Commandes</th>
                <th className="px-4 py-3">Total Dépensé</th>
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
              {/* Exemple ligne */}
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700/40">
                <td className="px-4 py-3">
                  <p className="font-medium">Ahmed Benali</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Casablanca, Maarif
                  </p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm flex items-center gap-1">
                    <Phone className="h-3 w-3" /> 0612345678
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    ahmed.benali@email.com
                  </p>
                </td>
                <td className="px-4 py-3">45</td>
                <td className="px-4 py-3 font-medium">125,000 MAD</td>
                <td className="px-4 py-3">
                  <span className={`font-medium ${getScoreColor(95)}`}>95/100</span>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg">
                    <Edit className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
