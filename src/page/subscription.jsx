import React, { useState } from "react"
import Saidbar from "../components/saidbar"

const StoreSubscription =()=> {
  const [isUpgradeDialogOpen, setIsUpgradeDialogOpen] = useState(false)

  const currentPlan = {
    name: "Plan Pro",
    price: "299 MAD/mois",
    status: "Actif",
    renewalDate: "2024-03-15",
    daysLeft: 23,
    features: [
      "500 commandes/mois",
      "Support prioritaire",
      "Analytics avancées",
      "API intégration",
      "Backup automatique",
    ],
    usage: {
      orders: { current: 347, limit: 500 },
      storage: { current: 2.1, limit: 5 },
      apiCalls: { current: 1250, limit: 2000 },
    },
  }

  const availablePlans = [
    {
      name: "Plan Starter",
      price: "99 MAD/mois",
      description: "Parfait pour débuter",
      features: ["100 commandes/mois", "Support email", "Dashboard basique", "1 GB stockage"],
      popular: false,
    },
    {
      name: "Plan Pro",
      price: "299 MAD/mois",
      description: "Pour les entreprises en croissance",
      features: ["500 commandes/mois", "Support prioritaire", "Analytics avancées", "API intégration", "5 GB stockage"],
      popular: true,
      current: true,
    },
    {
      name: "Plan Enterprise",
      price: "599 MAD/mois",
      description: "Pour les grandes entreprises",
      features: [
        "Commandes illimitées",
        "Support 24/7",
        "Analytics personnalisées",
        "API complète",
        "Stockage illimité",
        "Manager dédié",
      ],
      popular: false,
    },
  ]

  const paymentHistory = [
    { date: "2024-02-15", amount: "299 MAD", status: "Payé", method: "Carte bancaire" },
    { date: "2024-01-15", amount: "299 MAD", status: "Payé", method: "Carte bancaire" },
    { date: "2023-12-15", amount: "299 MAD", status: "Payé", method: "Virement" },
    { date: "2023-11-15", amount: "299 MAD", status: "Payé", method: "Carte bancaire" },
  ]

 return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-900 dark:text-slate-100">
      {/* Sidebar */}
      <div>
        <Saidbar />
      </div>

      {/* Main */}
      <main className="flex-1 m-3 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Mon Abonnement</h1>
          <p className="text-gray-400">Gérez votre plan et vos paiements</p>
        </div>

        {/* Current Plan + Usage */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Current Plan */}
          <div className="bg-gray-800 rounded-xl shadow p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-yellow-600">👑</span>
                <h2 className="text-lg font-semibold">Plan Pro</h2>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                ✅ Actif
              </span>
            </div>
            <p className="text-gray-400">Votre plan actuel</p>

            <div className="text-3xl font-bold">299 MAD/mo</div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                📅 <span>Renouvellement le 15/10/2025</span>
              </div>
              <div className="flex items-center gap-2">
                🛡 <span>25 jours restants</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-green-500">✔ Produits illimités</div>
              <div className="flex items-center gap-2 text-green-500">✔ Admins illimités</div>
              <div className="flex items-center gap-2 text-green-500">✔ Support prioritaire</div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4">
              ⬆️ Changer d&apos;Abonnement
            </button>
          </div>

          {/* Usage */}
          <div className="bg-gray-800 rounded-xl shadow p-6 space-y-6">
            <div>
              <h2 className="font-semibold">Utilisation des Plans</h2>
              <p className="text-gray-400 text-sm"></p>
            </div>

            {/* Orders */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Plan Normal</span>
                <span>20%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded">
                <div className="h-2 bg-green-500 rounded" style={{ width: "20%" }}></div>
              </div>
            </div>

            {/* Storage */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Plan Pro</span>
                <span>35%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded">
                <div className="h-2 bg-yellow-500 rounded" style={{ width: "35%" }}></div>
              </div>
            </div>

            {/* API Calls */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Plan Pro Max</span>
                <span>45%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded">
                <div className="h-2 bg-red-500 rounded" style={{ width: "45%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-gray-800 rounded-xl shadow p-6">
          <h2 className="font-semibold">Historique des Paiements</h2>
          <p className="text-gray-400 text-sm mb-4">Vos derniers paiements d&apos;abonnement</p>

          <div className="space-y-4">
            {/* Paiement 1 */}
            <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">💳</div>
                <div>
                  <p className="font-medium">299 MAD</p>
                  <p className="text-gray-400 text-sm">15/08/2025</p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Payé</span>
                <p className="text-gray-400 text-sm">Carte bancaire</p>
              </div>
            </div>

            {/* Paiement 2 */}
            <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">💳</div>
                <div>
                  <p className="font-medium">299 MAD</p>
                  <p className="text-gray-400 text-sm">15/07/2025</p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Payé</span>
                <p className="text-gray-400 text-sm">Carte bancaire</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StoreSubscription;