import React from "react";
// Si tu utilises react-router-dom, dé-commente et remplace <a> par <Link>
// import { Link } from "react-router-dom";
import logo from '../logo copy/LOGOTIQAPNGSTANDARDBLACK.png'

export default function Accueil() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400">
            <img src={logo} alt="logo"/>    
            </div>
            <span className="font-extrabold text-lg tracking-tight">
              TEQA CONNECT
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-blue-600">
              Fonctionnalités
            </a>
            <a href="#how" className="text-sm font-medium hover:text-blue-600">
              Comment ça marche
            </a>
            <a href="#stats" className="text-sm font-medium hover:text-blue-600">
              Chiffres
            </a>
          </nav>
          <div className="flex items-center gap-3">
            {/* Remplace par <Link to="/login"> si tu utilises react-router-dom */}
            <a
              href="/login"
              className="text-sm font-semibold hover:text-blue-700"
            >
              Login
            </a>
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(37,99,235,0.20),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">
              IA & scoring client en temps réel
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
              Priorise tes clients à <span className="text-blue-600">forte valeur</span>
              et booste ton <span className="underline decoration-blue-300">panier moyen</span>.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              ScoreX analyse le comportement d’achat, la récence/fréquence/monétaire (RFM)
              et la probabilité de churn pour t’aider à cibler les clients qui comptent.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                Commencer gratuitement
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-gray-300 hover:bg-gray-50"
              >
                Voir les fonctionnalités
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Installation en 10 min • SDK JS & API REST • Compatible Shopify/Prestashop
            </div>
          </div>

          {/* Card Demo */}
          <div className="relative">
            <div className="rounded-2xl border bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Tableau de scoring</div>
                <span className="text-xs text-gray-500">Demo</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[
                  { label: "Score moyen", value: "78/100" },
                  { label: "CLV prédit", value: "€ 326" },
                  { label: "Risque churn", value: "12%" },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200"
                  >
                    <div className="text-xs text-gray-500">{kpi.label}</div>
                    <div className="mt-1 text-xl font-bold">{kpi.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="text-sm text-gray-600 mb-2">
                  Top segments à cibler
                </div>
                <ul className="space-y-2">
                  {[
                    { name: "VIP récents", lift: "+34%" },
                    { name: "Coupons sensibles", lift: "+19%" },
                    { name: "À réactiver (30j)", lift: "+12%" },
                  ].map((seg) => (
                    <li
                      key={seg.name}
                      className="flex items-center justify-between rounded-lg border px-3 py-2"
                    >
                      <span className="font-medium">{seg.name}</span>
                      <span className="text-sm text-blue-700">{seg.lift}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-x-6 -bottom-6 -z-10 h-40 bg-gradient-to-t from-blue-200/30 to-transparent blur-2xl" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Tout ce qu’il faut pour scorer & agir
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Scoring RFM + IA",
                desc: "Combine Récence, Fréquence, Monétaire et modèles prédictifs.",
              },
              {
                title: "Segmentation dynamique",
                desc: "Segments auto-mis à jour selon le comportement client.",
              },
              {
                title: "API & Webhooks",
                desc: "Exporte les scores vers tes outils (emailing, ads, CRM).",
              },
              {
                title: "Dashboards",
                desc: "Suivi clair du CLV, churn, conversion et panier moyen.",
              },
              {
                title: "SDK E-commerce",
                desc: "Intégrations Shopify, Prestashop, WooCommerce.",
              },
              {
                title: "Confidentialité",
                desc: "RGPD by design, chiffrement des données sensibles.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border p-6 hover:shadow-md transition"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-600/10 flex items-center justify-center mb-3">
                  <span className="text-blue-700">★</span>
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Comment ça marche
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Connecte ta boutique",
                desc: "Installe le SDK ou branche l’API à ton store.",
              },
              {
                step: "2",
                title: "Calcule & segmente",
                desc: "Nous scorons tes clients et créons des segments utiles.",
              },
              {
                step: "3",
                title: "Active & mesure",
                desc: "Synchronise vers email/ads et mesure l’impact en temps réel.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border bg-white p-6">
                <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {s.step}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              Créer un compte
            </a>
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-gray-300 hover:bg-gray-100"
            >
              Déjà inscrit ? Login
            </a>
          </div>
        </div>
      </section>

      {/* Stats / Social proof */}
      <section id="stats" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { k: "↑ 28%", v: "Taux de conversion" },
              { k: "-17%", v: "Churn moyen" },
              { k: "€+42", v: "Panier moyen" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border p-6 text-center bg-white"
              >
                <div className="text-3xl font-extrabold text-blue-700">
                  {s.k}
                </div>
                <div className="mt-1 text-sm text-gray-600">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-extrabold">
              Lance ton scoring aujourd’hui
            </h3>
            <p className="mt-1 text-white/90">
              Essai gratuit, aucune carte requise. Importe tes données en 10 minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-gray-100"
              >
                Démarrer maintenant
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-white/60 hover:bg-white/10"
              >
                Se connecter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ScoreX Commerce. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-600">Confidentialité</a>
            <a href="#" className="hover:text-blue-600">Conditions</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}