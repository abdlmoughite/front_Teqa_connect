import { useState } from "react"
import Saidbar from "../components/saidbar"


export function StoreDeliveryCodes() {
  const [searchTerm, setSearchTerm] = useState("")
  const [companyFilter, setCompanyFilter] = useState("all")

  const deliveryCodes = [
    {
      id: "DC-001",
      code: "OZ123456789",
      company: "Ozon",
      client: "Ahmed Benali",
      order: "#ORD-001",
      destination: "Casablanca, Maarif",
      status: "Livré",
      createdDate: "2024-01-15",
      deliveredDate: "2024-01-17",
      amount: "12,500 MAD",
    },
    {
      id: "DC-002",
      code: "SD987654321",
      company: "Sendit",
      client: "Fatima Zahra",
      order: "#ORD-002",
      destination: "Rabat, Agdal",
      status: "En transit",
      createdDate: "2024-01-14",
      deliveredDate: null,
      amount: "8,900 MAD",
    },
    {
      id: "DC-003",
      code: "OL456789123",
      company: "oLivraison",
      client: "Mohamed Alami",
      order: "#ORD-003",
      destination: "Marrakech, Gueliz",
      status: "En préparation",
      createdDate: "2024-01-13",
      deliveredDate: null,
      amount: "21,000 MAD",
    },
    {
      id: "DC-004",
      code: "OZ789123456",
      company: "Ozon",
      client: "Aicha Bennani",
      order: "#ORD-004",
      destination: "Fès, Centre Ville",
      status: "En attente",
      createdDate: "2024-01-12",
      deliveredDate: null,
      amount: "15,750 MAD",
    },
    {
      id: "DC-005",
      code: "SD321654987",
      company: "Sendit",
      client: "Youssef Tazi",
      order: "#ORD-005",
      destination: "Tanger, Malabata",
      status: "Problème",
      createdDate: "2024-01-11",
      deliveredDate: null,
      amount: "2,890 MAD",
    },
  ]
    const [isopen , setisopen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#0F172A] text-white">
      <div>
        <Saidbar />
      </div>

      <main className="flex-1 p-6 md:p-8 bg-gray-900 overflow-y-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Codes de Livraison</h1>
            <p className="text-gray-400">Gérez tous vos codes de suivi de livraison</p>
          </div>
          <button onClick={()=> setisopen(true)} className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium shadow">
            <span className="mr-2">➕</span>
            Nouveau Code
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <div className="bg-gray-800 p-4 rounded-xl shadow">
            <div className="flex items-center justify-between pb-2">
              <p className="text-sm font-medium">Total Codes</p>
              <span className="text-blue-600">🔲</span>
            </div>
            <div className="text-2xl font-bold">3</div>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl shadow">
            <div className="flex items-center justify-between pb-2">
              <p className="text-sm font-medium">Problèmes</p>
              <span className="text-red-600">⚠️</span>
            </div>
            <div className="text-2xl font-bold">1</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800 rounded-xl shadow p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Rechercher par code, client ou commande..."
                className="w-full pl-8 pr-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <span className="absolute left-2 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold">Codes de Livraison (3)</h2>
          <p className="text-gray-400 text-sm mb-4">
            Tous vos codes de suivi avec leurs statuts de livraison
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-700 text-gray-300">
                <tr>
                  <th className="p-2">id_société de livraison </th>
                  <th className="p-2">Store</th>
                  <th className="p-2">Société</th>
                  <th className="p-2">Statut</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="p-2">
                    <code className="bg-gray-700 px-2 py-1 rounded text-sm font-mono">#1</code>
                  </td>
                  <td className="p-2">
                    <p className="font-medium">Teqa</p>
                  </td>
                  <td className="p-2">
                    <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-800">Ozon</span>
                  </td>
                  <td className="p-2">
                    <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">Active</span>
                  </td>
                  <td className="p-2 flex gap-2">
                    <button className="p-1 hover:bg-gray-700 rounded">👁</button>
                    <button className="p-1 hover:bg-gray-700 rounded">🔲</button>
                  </td>
                </tr>

                               <tr>
                  <td className="p-2">
                    <code className="bg-gray-700 px-2 py-1 rounded text-sm font-mono">#2</code>
                  </td>
                  <td className="p-2">
                    <p className="font-medium">Connect</p>
                  </td>
                  <td className="p-2">
                    <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-800">Olivraison</span>
                  </td>
                  <td className="p-2">
                    <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">Active</span>
                  </td>
                  <td className="p-2 flex gap-2">
                    <button className="p-1 hover:bg-gray-700 rounded">👁</button>
                    <button className="p-1 hover:bg-gray-700 rounded">🔲</button>
                  </td>
                </tr>
{isopen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div className="bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-2xl relative">
      <button
        onClick={() => setisopen(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
      >
        ✖
      </button>
      <h2 className="text-lg font-semibold">Ajouter société de livraison</h2>
      <p className="text-gray-400 text-sm mb-4">Découvrez de nouvelles intégrations</p>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Rechercher par nom "
                className="w-full pl-8 pr-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <span className="absolute left-2 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
      <div className="grid gap-4 md:grid-cols-2">
        {/* PrestaShop */}
        <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium text-lg">SendT</h3>
              <p className="text-gray-400 text-sm">Connectez votre compte SendT</p>
            </div>
            <span className="px-2 py-1 border rounded text-xs">E-commerce</span>
          </div>
          <ul className="text-sm text-gray-300 space-y-1 mb-4">
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
              <h3 className="font-medium text-lg">Cathedis</h3>
              <p className="text-gray-400 text-sm">Ajoutez votre compte Cathedis</p>
            </div>
            <span className="px-2 py-1 border rounded text-xs">E-commerce</span>
          </div>
          <ul className="text-sm text-gray-300 space-y-1 mb-4">
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
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
