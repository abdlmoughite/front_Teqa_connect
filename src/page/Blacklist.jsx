import { useState } from "react"
import Saidbar from "../components/saidbar"
const Blacklist =()=> {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const blacklistedClients = [
    {
      id: 1,
      name: "Youssef Alami",
      phone: "+212 6 12 34 56 78",
      email: "youssef.alami@email.com",
      reason: "Commandes annulées répétées",
      dateAdded: "2024-01-15",
      attempts: 8,
      status: "Bloqué définitivement",
    },
    {
      id: 2,
      name: "Rachid Bennani",
      phone: "+212 6 87 65 43 21",
      email: "rachid.bennani@email.com",
      reason: "Refus de paiement à la livraison",
      dateAdded: "2024-01-20",
      attempts: 5,
      status: "Bloqué temporairement",
    },
    {
      id: 3,
      name: "Laila Fassi",
      phone: "+212 6 55 44 33 22",
      email: "laila.fassi@email.com",
      reason: "Adresse incorrecte volontairement",
      dateAdded: "2024-01-25",
      attempts: 12,
      status: "Bloqué définitivement",
    },
    {
      id: 4,
      name: "Omar Tazi",
      phone: "+212 6 99 88 77 66",
      email: "omar.tazi@email.com",
      reason: "Comportement irrespectueux",
      dateAdded: "2024-02-01",
      attempts: 3,
      status: "Bloqué temporairement",
    },
  ]

  const filteredClients = blacklistedClients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status) => {
    switch (status) {
      case "Bloqué définitivement":
        return "bg-red-100 text-red-800"
      case "Bloqué temporairement":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
<div class="flex min-h-screen bg-gray-900 text-white">
    <Saidbar/>

  <main class="flex-1 p-6 space-y-6">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold">Liste Noire des Clients</h1>
        <p class="text-gray-400">Clients pas intéressés par les commandes</p>
      </div>
      <button
        class="flex items-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium shadow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 4v16m8-8H4"/>
        </svg>
        Ajouter à la Liste Noire
      </button>
    </div>

    <div class="grid gap-4 md:grid-cols-4">
      <div class="bg-gray-800 p-4 rounded-xl shadow">
        <div class="flex items-center justify-between pb-2">
          <p class="text-sm font-medium">Total Bloqués</p>
          <span class="text-red-600">👤✖</span>
        </div>
        <div class="text-2xl font-bold">12</div>
        <p class="text-xs text-gray-400">Clients dans la liste noire</p>
      </div>

      

      <div class="relative">
        <input
          type="text"
          placeholder="Rechercher un client..."
          class="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm focus:ring-2 focus:ring-red-500 outline-none"
        />
        <svg xmlns="http://www.w3.org/2000/svg"
          class="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"/>
        </svg>
      </div>
    </div>

    <div class="bg-gray-800 rounded-xl shadow p-6">
      <h2 class="text-xl font-semibold mb-1">Clients en Liste Noire</h2>
      <p class="text-gray-400 mb-4">Liste des clients qui ne sont pas intéressés par les commandes</p>

      <div class="space-y-4">
        <div class="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
          <div class="space-y-1">
            <div class="flex items-center gap-3">
              <h3 class="font-medium">Ahmed Benali</h3>
              <span class="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">3CMD</span>
            </div>
            <p class="text-sm text-gray-400">0612345678 </p>
            <p class="text-sm text-gray-400"><strong>Raison:</strong> annuler par client</p>
            <p class="text-xs text-gray-500">Ajouté le 2024-01-10 • 3 tentatives</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="p-2 hover:bg-gray-700 rounded-lg">👁</button>
          </div>
        </div>

        <div class="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
          <div class="space-y-1">
            <div class="flex items-center gap-3">
              <h3 class="font-medium">Fatima Zahra</h3>
              <span class="px-2 py-1 text-xs rounded-full bg-red-100 text-yellow-800">2CMD</span>
            </div>
            <p class="text-sm text-gray-400">0623456789 </p>
            <p class="text-sm text-gray-400"><strong>Raison:</strong> pas repance</p>
            <p class="text-xs text-gray-500">Ajouté le 2024-01-12 • 1 tentative</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="p-2 hover:bg-gray-700 rounded-lg">👁</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>


  )
}
export default Blacklist;