import {
  LayoutDashboard,
  Users,
  CreditCard,
  UserX,
  ShoppingCart,
  Package,
  Settings,
  Truck,
  Tags,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Store,
  ClipboardCheck,
} from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../logo copy/LOGO TIQA PNG STANDRAD WHITE.png'

const Saidbar = (props) => {
  const userMenuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "orders", label: "Mes Commandes", icon: ShoppingCart },
    { id: "clients", label: "Mes Clients", icon: Users },
    { id: "blacklist", label: "Liste Noire", icon: UserX },
    { id: "subscription", label: "Mon Abonnement", icon: CreditCard },
    { id: "delivery", label: "Codes Livraison", icon: Package },
    { id: "plugins", label: "Plugins", icon: Settings },
    { id: "scoring_Livraison", label: "Scoring Livraison", icon: Truck },
    { id: "categore_produit", label: "Catégorie produit", icon: Tags },
    { id: "ClientDetailedScoring", label: "Client Detailed Scoring", icon: Tags },
    { id: "Create_compte", label: "Créer un compte", icon: Tags },
  ]

  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Pour le dropdown
  const [openConfirm, setOpenConfirm] = useState(false)

  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-screen flex flex-col shadow-md">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl flex font-bold text-blue-600 dark:text-blue-400">
          <img src={logo} alt="logo" className="w-15" style={{marginTop :'-14px',}} />
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          StoreName
        </p>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {theme === "light" ? "Mode sombre" : "Mode clair"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {userMenuItems.map((item, index) => {
          const Icon = item.icon
          const isActive = index === props
          return (
            <Link to={"/"+item.id}
              key={item.id}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all relative group
                ${isActive
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
            >
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 dark:bg-blue-400 rounded-r-md" />
              )}
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}

        {/* Nouvelle section : Espace Confirmation */}
        <div>
          <button
            onClick={() => setOpenConfirm(!openConfirm)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <span className="flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5" />
              Espace Confirmation
            </span>
            {openConfirm ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {openConfirm && (
            <div className="ml-8 mt-1 space-y-1">
              <Link to="/commande_tember" className="block text-sm px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                Commande Tember
              </Link>
              <Link to="/marketplace" className="block text-sm px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                Marketplace
              </Link>
              <Link to="/statistique" className="block text-sm px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                Statistique
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <Settings className="h-4 w-4" />
          Paramètres
        </button>
      </div>
    </div>
  )
}

export default Saidbar
