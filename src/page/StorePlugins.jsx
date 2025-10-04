import { useState } from "react"
import Saidbar from "../components/saidbar"

export function StorePlugins() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isopen , setisopen] = useState(false)
  const installedPlugins = [
    {
      id: 1,
      name: "YouCan",
      type: "E-commerce",
      status: "Connecté",
      description: "Plateforme e-commerce marocaine",
      apiKey: "yc_***************",
      lastSync: "Il y a 2 heures",
      orders: 156,
      revenue: "23,450 MAD",
    },
    {
      id: 2,
      name: "Shopify",
      type: "E-commerce",
      status: "Connecté",
      description: "Plateforme e-commerce internationale",
      apiKey: "shp_***************",
      lastSync: "Il y a 1 heure",
      orders: 89,
      revenue: "15,670 MAD",
    },
    {
      id: 3,
      name: "WooCommerce",
      type: "E-commerce",
      status: "Erreur",
      description: "Plugin WordPress pour e-commerce",
      apiKey: "wc_***************",
      lastSync: "Il y a 6 heures",
      orders: 45,
      revenue: "8,920 MAD",
    },
  ]

  const availablePlugins = [
    {
      name: "PrestaShop",
      type: "E-commerce",
      description: "Solution e-commerce open source",
      features: ["Gestion produits", "Commandes", "Clients", "Paiements"],
    },
    {
      name: "Magento",
      type: "E-commerce",
      description: "Plateforme e-commerce enterprise",
      features: ["Multi-store", "B2B", "Analytics", "SEO"],
    },
    {
      name: "OpenCart",
      type: "E-commerce",
      description: "Solution e-commerce légère",
      features: ["Multi-langue", "Multi-devise", "Extensions", "Thèmes"],
    },
    {
      name: "BigCommerce",
      type: "E-commerce",
      description: "Plateforme SaaS e-commerce",
      features: ["API REST", "Webhooks", "Multi-canal", "Analytics"],
    },
  ]
  return (
    <div className="flex min-h-screen bg-[#0F172A] text-white">
      {/* Sidebar */}
      <div>
        <Saidbar />
      </div>

      {/* Main */}
      <main className="flex-1 p-6 md:p-8 bg-gray-900 overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Plugins & Intégrations</h1>
            <p className="text-gray-400">Connectez vos plateformes e-commerce</p>
          </div>
          <button onClick={()=>setisopen(true)} className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium shadow">
            <span className="mr-2" >➕</span>
            Ajouter Plugin
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4 mt-6">
          <div className="bg-gray-800 p-4 rounded-xl shadow">
            <div className="flex items-center justify-between pb-2">
              <p className="text-sm font-medium">Plugins Actifs</p>
              <span className="text-green-600">🔌</span>
            </div>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-gray-400">Sur 6 installés</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl shadow">
            <div className="flex items-center justify-between pb-2">
              <p className="text-sm font-medium">Commandes Totales</p>
              <span className="text-blue-600">📦</span>
            </div>
            <div className="text-2xl font-bold">1,240</div>
            <p className="text-xs text-gray-400">Via tous les plugins</p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un plugin..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="absolute left-3 top-3 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Installed Plugins */}
        <div className="bg-gray-800 rounded-xl shadow p-6 mt-6">
          <h2 className="text-lg font-semibold">Plugins Installés</h2>
          <p className="text-gray-400 text-sm mb-4">Gérez vos intégrations e-commerce</p>

          <div className="space-y-4">
            {/* Shopify */}
            <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-medium">Shopify</h3>
                  <span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">Connecté</span>
                  <span className="px-2 py-1 rounded border text-xs">E-commerce</span>
                </div>
                <p className="text-sm text-gray-400">Intégration complète avec votre boutique Shopify</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>API: ****1234</span>
                  <span>Dernière sync: 15/09/2025</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-blue-600">320 commandes</span>
                  <span className="text-green-600">15,200 MAD</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border rounded-lg text-sm">⚙️</button>
                <button className="px-3 py-1 border rounded-lg text-sm">🔄 Sync</button>
              </div>
            </div>

            {/* WooCommerce */}
            <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-medium">WooCommerce</h3>
                  <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800 text-xs">En attente</span>
                  <span className="px-2 py-1 rounded border text-xs">E-commerce</span>
                </div>
                <p className="text-sm text-gray-400">Plugin WooCommerce pour synchroniser vos commandes</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>API: ****5678</span>
                  <span>Dernière sync: 10/09/2025</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-blue-600">80 commandes</span>
                  <span className="text-green-600">2,500 MAD</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border rounded-lg text-sm">⚙️</button>
                <button className="px-3 py-1 border rounded-lg text-sm">🔄 Sync</button>
              </div>
            </div>
          </div>
        </div>

        {/* Available Plugins */}
{isopen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div className="bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-2xl relative">
      {/* Bouton de fermeture */}
      <button
        onClick={() => setisopen(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
      >
        ✖
      </button>

      <h2 className="text-lg font-semibold">Plugins Disponibles</h2>
      <p className="text-gray-400 text-sm mb-4">Découvrez de nouvelles intégrations</p>

      <div className="grid gap-4 md:grid-cols-2">
        {/* PrestaShop */}
        <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium text-lg">PrestaShop</h3>
              <p className="text-gray-400 text-sm">Connectez votre boutique PrestaShop</p>
            </div>
            <span className="px-2 py-1 border rounded text-xs">E-commerce</span>
          </div>
          <ul className="text-sm text-gray-300 space-y-1 mb-4">
            <li>✔ Synchronisation produits</li>
            <li>✔ Gestion des commandes</li>
          </ul>
          <button className="w-full border border-gray-600 py-2 rounded-lg hover:bg-gray-700 text-sm flex items-center justify-center gap-2">
            ➕ Installer
          </button>
        </div>

        {/* Magento */}
        <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium text-lg">Magento</h3>
              <p className="text-gray-400 text-sm">Ajoutez votre boutique Magento</p>
            </div>
            <span className="px-2 py-1 border rounded text-xs">E-commerce</span>
          </div>
          <ul className="text-sm text-gray-300 space-y-1 mb-4">
            <li>✔ Produits illimités</li>
            <li>✔ Statistiques avancées</li>
          </ul>
          <button className="w-full border border-gray-600 py-2 rounded-lg hover:bg-gray-700 text-sm flex items-center justify-center gap-2">
            ➕ Installer
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      </main>
    </div>
  )
}
