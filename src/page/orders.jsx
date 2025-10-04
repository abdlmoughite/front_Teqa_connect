import { useState, useMemo } from "react";
import Saidbar from "../components/saidbar";
import {
  CheckCircle2, Clock, PackageSearch, Truck, AlertTriangle, XCircle, Pencil, Eye,
} from "lucide-react";

const STATUS_META = {
  "Livré": {
    badge: "bg-green-100 text-green-700 ring-1 ring-green-200 dark:bg-green-900/25 dark:text-green-300 dark:ring-green-800",
    Icon: CheckCircle2,
  },
  "En cours": {
    badge: "bg-blue-100 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-900/25 dark:text-blue-300 dark:ring-blue-800",
    Icon: Truck,
  },
  "Confirmé": {
    badge: "bg-amber-100 text-amber-800 ring-1 ring-amber-200 dark:bg-amber-900/25 dark:text-amber-300 dark:ring-amber-800",
    Icon: PackageSearch,
  },
  "En attente": {
    badge: "bg-gray-100 text-gray-700 ring-1 ring-gray-200 dark:bg-slate-800/60 dark:text-slate-300 dark:ring-slate-700",
    Icon: Clock,
  },
  "Annulé": {
    badge: "bg-red-100 text-red-700 ring-1 ring-red-200 dark:bg-red-900/25 dark:text-red-300 dark:ring-red-800",
    Icon: XCircle,
  },
};

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const orders = [
    { id: "#ORD-001", client: "Ahmed Benali", phone: "0612345678", address: "Casablanca, Maarif", products: "iPhone 14, Coque", amount: "12,500 MAD", status: "Livré", date: "2024-01-15", delivery: "Ozon", tracking: "OZ123456789" },
    { id: "#ORD-002", client: "Fatima Zahra", phone: "0623456789", address: "Rabat, Agdal", products: "Samsung Galaxy S23", amount: "8,900 MAD", status: "En cours", date: "2024-01-14", delivery: "Sendit", tracking: "SD987654321" },
    { id: "#ORD-003", client: "Mohamed Alami", phone: "0634567890", address: "Marrakech, Gueliz", products: "MacBook Air M2", amount: "21,000 MAD", status: "Confirmé", date: "2024-01-13", delivery: "oLivraison", tracking: "OL456789123" },
    { id: "#ORD-004", client: "Aicha Bennani", phone: "0645678901", address: "Fès, Centre Ville", products: "iPad Pro, Apple Pencil", amount: "15,750 MAD", status: "En attente", date: "2024-01-12", delivery: "Ozon", tracking: "OZ789123456" },
    { id: "#ORD-005", client: "Youssef Tazi", phone: "0656789012", address: "Tanger, Malabata", products: "AirPods Pro", amount: "2,890 MAD", status: "Annulé", date: "2024-01-11", delivery: "Sendit", tracking: "SD321654987" },
  ];

  const filteredOrders = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return orders.filter((o) => {
      const matchesSearch =
        !q ||
        o.client.toLowerCase().includes(q) ||
        o.id.toLowerCase().includes(q) ||
        o.products.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "all" || o.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, statusFilter]);

  const StatusBadge = ({ status }) => {
    const meta = STATUS_META[status] ?? STATUS_META["En attente"];
    const Icon = meta.Icon ?? AlertTriangle;
    return (
      <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${meta.badge}`}>
        <Icon className="h-4 w-4" />
        {status}
      </span>
    );
  };
  const [modal, setModal] = useState({
    isOpen: false,
    type: null, // "create", "view", "edit"
    order: null,
  });

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-900 dark:text-slate-100">
      <Saidbar props='2' />

      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Mes Commandes</h1>
            <p className="text-sm text-gray-500 dark:text-slate-400">Gérez toutes vos commandes clients</p>
          </div>

          <button
            type="button"          
            onClick={() => setModal({ isOpen: true, type: "create", order: null })}

            className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 active:opacity-100 transition"
          >
            <PlusIcon />
            Nouvelle commande
          </button>
        </div>

        {/* Filters */}
        <section className="mt-6 rounded-2xl bg-white dark:bg-slate-900/60 p-4 shadow-sm ring-1 ring-gray-100 dark:ring-white/10">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher par client, commande, produit…"
                className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/40 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                autoComplete="off"
              />
            </div>

            <div className="w-full sm:w-56">
              <label htmlFor="status" className="block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1">
                Filtrer par statut
              </label>
              <select
                id="status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900/40 text-gray-900 dark:text-slate-100 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
              >
                <option value="all">Tous les statuts</option>
                <option value="En attente">En attente</option>
                <option value="Confirmé">Confirmé</option>
                <option value="En cours">En cours</option>
                <option value="Livré">Livré</option>
                <option value="Annulé">Annulé</option>
              </select>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="mt-6 rounded-2xl bg-white dark:bg-slate-900/60 p-0 shadow-sm ring-1 ring-gray-100 dark:ring-white/10 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 dark:border-white/10">
            <p className="text-sm font-medium">Liste des Commandes ({filteredOrders.length})</p>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              Toutes vos commandes avec leurs détails et statuts
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 dark:bg-slate-900/40 text-gray-600 dark:text-slate-300">
                <tr>
                  <th className="text-left font-semibold px-4 py-3">Commande</th>
                  <th className="text-left font-semibold px-4 py-3">Client</th>
                  <th className="text-left font-semibold px-4 py-3">Produits</th>
                  <th className="text-left font-semibold px-4 py-3">Montant</th>
                  <th className="text-left font-semibold px-4 py-3">Statut</th>
                  <th className="text-left font-semibold px-4 py-3">Livraison</th>
                  <th className="text-left font-semibold px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, idx) => (
                  <tr
                    key={order.id}
                    className={idx % 2 === 0 ? "bg-white dark:bg-slate-900/40" : "bg-gray-50/50 dark:bg-slate-900/20"}
                  >
                    <td className="px-4 py-3 align-top">
                      <div className="font-medium">{order.id}</div>
                      <div className="text-xs text-gray-500 dark:text-slate-400">{order.date}</div>
                    </td>

                    <td className="px-4 py-3 align-top">
                      <div className="font-medium">{order.client}</div>
                      <div className="text-xs text-gray-500 dark:text-slate-400">{order.phone}</div>
                    </td>

                    <td className="px-4 py-3 align-top">
                      <div className="text-gray-700 dark:text-slate-200">{order.products}</div>
                      <div className="text-xs text-gray-500 dark:text-slate-400 truncate max-w-[280px]">
                        {order.address}
                      </div>
                    </td>

                    <td className="px-4 py-3 align-top font-semibold">{order.amount}</td>

                    <td className="px-4 py-3 align-top">
                      <StatusBadge status={order.status} />
                    </td>

                    <td className="px-4 py-3 align-top">
                      <div className="text-sm font-medium">{order.delivery}</div>
                      <div className="text-xs text-gray-500 dark:text-slate-400">{order.tracking}</div>
                    </td>

                    <td className="px-4 py-3 align-top">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-white/10 px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-slate-800/60"
                          aria-label="Voir"
                                                  onClick={() => setModal({ isOpen: true, type: "view", order })}

                        >
                          <Eye className="h-4 w-4" />
                          Voir
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-white/10 px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-slate-800/60"
                          aria-label="Modifier"
                                                  onClick={() => setModal({ isOpen: true, type: "edit", order })}

                        >
                          <Pencil className="h-4 w-4" />
                          Modifier
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredOrders.length === 0 && (
                  <tr>
                    <td className="px-4 py-10 text-center text-gray-500 dark:text-slate-400" colSpan={7}>
                      Aucune commande trouvée.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Form */}
{modal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900/90 shadow-xl">
              <div className="flex items-center justify-between border-b px-6 py-3">
                <h2 className="text-lg font-semibold">
                  {modal.type === "create" && "Créer une nouvelle commande"}
                  {modal.type === "view" && "Détails de la commande"}
                  {modal.type === "edit" && "Modifier la commande"}
                </h2>
                <button onClick={() => setModal({ isOpen: false, type: null, order: null })}>✕</button>
              </div>

              <div className="p-6">
                {modal.type === "view" && (
                  <div className="space-y-2 text-sm">
                    <p><b>Commande:</b> {modal.order.id}</p>
                    <p><b>Client:</b> {modal.order.client}</p>
                    <p><b>Téléphone:</b> {modal.order.phone}</p>
                    <p><b>Adresse:</b> {modal.order.address}</p>
                    <p><b>Produits:</b> {modal.order.products}</p>
                    <p><b>Montant:</b> {modal.order.amount}</p>
                    <p><b>Statut:</b> {modal.order.status}</p>
                    <p><b>Livraison:</b> {modal.order.delivery} ({modal.order.tracking})</p>
                  </div>
                )}

                {(modal.type === "create" || modal.type === "edit") && (
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      defaultValue={modal.order?.client || ""}
                      placeholder="Nom du client"
                      className="rounded-xl border p-2 dark:bg-slate-800"
                    />
                    <input
                      defaultValue={modal.order?.phone || ""}
                      placeholder="Téléphone"
                      className="rounded-xl border p-2 dark:bg-slate-800"
                    />
                    <textarea
                      defaultValue={modal.order?.address || ""}
                      placeholder="Adresse"
                      className="md:col-span-2 rounded-xl border p-2 dark:bg-slate-800"
                    />
                    <textarea
                      defaultValue={modal.order?.products || ""}
                      placeholder="Produits"
                      className="md:col-span-2 rounded-xl border p-2 dark:bg-slate-800"
                    />
                    <input
                      defaultValue={modal.order?.amount || ""}
                      placeholder="Montant"
                      className="rounded-xl border p-2 dark:bg-slate-800"
                    />
                    <select
                      defaultValue={modal.order?.delivery || ""}
                      className="rounded-xl border p-2 dark:bg-slate-800"
                    >
                      <option>Ozon</option>
                      <option>Sendit</option>
                      <option>oLivraison</option>
                    </select>

                    <div className="md:col-span-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setModal({ isOpen: false, type: null, order: null })}
                        className="px-4 py-2 border rounded-xl"
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-black text-white"
                      >
                        {modal.type === "create" ? "Créer" : "Enregistrer"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

/* util icons */
function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M12 5v14M5 12h14" />
    </svg>
  );
}
function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" {...props}>
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <path strokeWidth="2" d="M20 20l-3-3" />
    </svg>
  );
}
