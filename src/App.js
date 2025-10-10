import { useState } from 'react';
import Accueil from './page/Accueil';
import Login from './auth/login';
import Register from './auth/Register';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Orders from './page/orders';
import { StoreClients } from './page/StoreClients';
import Blacklist  from './page/Blacklist';
import StoreSubscription from './page/subscription';
import { StoreDeliveryCodes } from './page/StoreDeliveryCodes';
import { StorePlugins } from './page/StorePlugins';
import './index.css';
import Scoring_Livraison from './page/scoring_Livraison';
import Categore_produit from './page/categore_produit';
import ClientDetailedScoring from './page/ClientDetailedScoring';
import Create_compte from './page/create_compte';
import Dashboard_counfirmation from './pages_confirmation/dashboard_counfirmation';
import Commandes_confirmation from './pages_confirmation/commandes_confirmation';
import Reclamation_counfirmation from './pages_confirmation/reclamation_counfirmation';
import ProfilConfirmation from './pages_confirmation/profil_counfirmation';
import Liste_commandes_counfirmation from './pages_confirmation/liste_commandes_counfirmation';
import Dashboard_s_c from './service counfirmation/Dashboard_s_c';
import CommandeTember from './page/CommandeTember';
import Marketplace from './page/Marketplace';
import DemandesConfirmation from './pages_confirmation/DemandesConfirmation';
import CollaborateursConfirmation from './pages_confirmation/CollaborateursConfirmation';
function App() {
  const [iflogin , setIflogin] = useState(false);
  return (
    <div className="App bgt-black">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/clients" element={<StoreClients />} />
        <Route path="/blacklist" element={<Blacklist />} />
        <Route path="/subscription" element={<StoreSubscription />} />
        <Route path="/delivery" element={<StoreDeliveryCodes />} />
        <Route path="/plugins" element={<StorePlugins />} />
        <Route path="/scoring_Livraison" element={<Scoring_Livraison />} />
        <Route path="/Categore_produit" element={<Categore_produit />} />
        <Route
          path="/ClientDetailedScoring"
          element={<ClientDetailedScoring />}
        />
        <Route path="/Create_compte" element={<Create_compte />} />
        <Route path="/commande_tember" element={<CommandeTember />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route
          path="/demandes_confirmation"
          element={<DemandesConfirmation />}
        />
        <Route
          path="/collaborateurs_confirmation"
          element={<CollaborateursConfirmation />}
        />

        {/* confirmation */}

        <Route
          path="/dashboard_counfirmation"
          element={<Dashboard_counfirmation />}
        />
        <Route
          path="/commandes_counfirmation"
          element={<Commandes_confirmation />}
        />
        <Route
          path="/reclamation_counfirmation"
          element={<Reclamation_counfirmation />}
        />
        <Route
          path="/liste_commandes_counfirmation"
          element={<Liste_commandes_counfirmation />}
        />
        <Route path="/profil_counfirmation" element={<ProfilConfirmation />} />

        {/* {service confirmation} */}
        <Route path="/dashboard_s_c" element={<Dashboard_s_c />} />

        {/* Activation & Reset */}
        {/* <Route path="/activate/:uid/:token" element={<h1>hhhhh</h1>} />
        <Route path="/password-reset" element={<h1>hhhhh</h1>} />
        <Route path="/reset-password/:uid/:token" element={<h1>hhhhh</h1>} /> */}
      </Routes>
    </div>
  );
}

export default App;
