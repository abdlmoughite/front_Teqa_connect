import {
  ShoppingCart,
  TrendingUp,
  Star,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"
import Sidebar from "../components/saidbar" 
import { FileDown } from "lucide-react"  

const Dashboard = () => {
  const stats = [
    {
      title: "Commandes Aujourd'hui",
      value: "47",
      change: "+12%",
      icon: ShoppingCart,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      title: "Revenus du Mois",
      value: "45,230 MAD",
      change: "+18%",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
    },
  ]

  const recentOrders = [
    { id: "#ORD-001", client: "Ahmed Benali", amount: "1,250 MAD", status: "Livré" },
    { id: "#ORD-002", client: "Fatima Zahra", amount: "890 MAD", status: "En cours" },
    { id: "#ORD-003", client: "Mohamed Alami", amount: "2,100 MAD", status: "Confirmé" },
    { id: "#ORD-004", client: "Aicha Bennani", amount: "750 MAD", status: "En attente" },
  ]

  const topClients = [
    { name: "Ahmed Benali", orders: 45, total: "12,500 MAD", score: 95 },
    { name: "Fatima Zahra", orders: 38, total: "9,800 MAD", score: 88 },
    { name: "Mohamed Alami", orders: 32, total: "8,200 MAD", score: 82 },
    { name: "Aicha Bennani", orders: 28, total: "7,100 MAD", score: 79 },
  ]

  const statusColor = {
    Livré: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "En cours": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Confirmé: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "En attente": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <Sidebar props='0' />

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Dashboard Store
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Aperçu de votre activité commerciale
          </p>
        </header>

        {/* Stats Cards */}
<div className="flex justify-end">
  <button
    onClick={() => console.log("Export PDF")}
    className="inline-flex items-center gap-2 rounded-lg bg-red-600 text-white px-4 py-2.5 font-medium shadow 
               hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/30 transition"
  >
    <FileDown className="h-5 w-5" />
    Exporter en PDF
  </button>
</div>        <section className="grid gap-6 md:grid-cols-2">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.title}
                className="rounded-2xl border bg-white dark:bg-gray-800 dark:border-gray-700 shadow hover:shadow-lg p-6 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {stat.title}
                    </h2>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                      {stat.value}
                    </p>
                    <p className="text-xs mt-1">
                      <span
                        className={
                          stat.change.startsWith("+")
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }
                      >
                        {stat.change}
                      </span>{" "}
                      <span className="text-gray-500 dark:text-gray-400">
                        par rapport au mois dernier
                      </span>
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-full ${stat.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        {/* Orders + Clients */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* Recent Orders */}
          <div className="rounded-2xl border bg-white dark:bg-gray-800 dark:border-gray-700 shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Commandes Récentes
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Vos dernières commandes reçues
            </p>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3 last:border-none"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {order.id}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {order.client}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {order.amount}
                    </p>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Clients */}
          <div className="rounded-2xl border bg-white dark:bg-gray-800 dark:border-gray-700 shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Meilleurs Clients
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Clients avec le plus d'activité
            </p>
            <div className="space-y-4">
              {topClients.map((client, index) => (
                <div
                  key={client.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">
                      #{index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {client.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {client.orders} commandes
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {client.total}
                    </p>
                    <p className="text-xs text-yellow-500 flex items-center gap-1">
                      ⭐ {client.score}/100
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance */}
        <section className="rounded-2xl border bg-white dark:bg-gray-800 dark:border-gray-700 shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Performance du Mois
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Progression vers vos objectifs mensuels
          </p>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Objectif Commandes (500)</span>
                <span>347/500</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                <div className="h-2 bg-blue-600 rounded-full transition-all" style={{ width: "69.4%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Objectif Revenus (50,000 MAD)</span>
                <span>45,230/50,000 MAD</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                <div className="h-2 bg-green-600 rounded-full transition-all" style={{ width: "90%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Satisfaction Client (95%)</span>
                <span>92%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                <div className="h-2 bg-yellow-500 rounded-full transition-all" style={{ width: "92%" }} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
