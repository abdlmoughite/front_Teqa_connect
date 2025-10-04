import SaidbarConfirmation from "../components/Saidbar_confirmation";
import { Package, CheckCircle2, Truck, XCircle } from "lucide-react";

const Dashboard_counfirmation = () => {
  // 👉 Données statiques pour l’exemple (tu pourras brancher avec ton backend plus tard)
  const stats = [
    {
      title: "Total Commandes",
      value: 120,
      icon: <Package className="h-6 w-6 text-blue-400" />,
      color: "bg-blue-500/20 text-blue-300",
    },
    {
      title: "Commandes Confirmées",
      value: 75,
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-400" />,
      color: "bg-emerald-500/20 text-emerald-300",
    },
    {
      title: "Commandes Livrées",
      value: 40,
      icon: <Truck className="h-6 w-6 text-yellow-400" />,
      color: "bg-yellow-500/20 text-yellow-300",
    },
    {
      title: "Commandes Refusées",
      value: 5,
      icon: <XCircle className="h-6 w-6 text-red-400" />,
      color: "bg-red-500/20 text-red-300",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0B1220] text-white">
      {/* Sidebar */}
      <SaidbarConfirmation active="dashboard" />

      {/* Contenu */}
      <main className="flex-1 p-6 md:p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">📊 Dashboard Confirmation</h1>
        <p className="text-white/60 mb-8">
          Vue d’ensemble des commandes du compte confirmation
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm text-white/60">{stat.title}</h2>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
              <p className="text-3xl font-bold mt-4">{stat.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard_counfirmation;
