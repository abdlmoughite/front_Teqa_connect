// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Eye, EyeOff, LogIn, Home, Loader2, Mail, Lock } from "lucide-react";
import logo from "../logo copy/LOGOTIQAPNGSTANDARDBLACK.png";

const GOOGLE_CLIENT_ID =
  "197562263304-brams22h6rptbbfdjtthd3gnooi81kub.apps.googleusercontent.com";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("info");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    if (form.email === "client@gmail.com" && form.password === "client123") {
      navigate("/dashboard");
    } else if (
      form.email === "counfirmation@gmail.com" &&
      form.password === "counfirmation123"
    ) {
      navigate("/dashboard_counfirmation");
    } else if (
      form.email === "servicecounfirmation@gmail.com" &&
      form.password === "service123"
    ) {
      navigate("/dashboard_s_c"); // 🚀 redirection vers le service de confirmation
    } else {
      setMsg("❌ Email ou mot de passe incorrect");
      setMsgType("error");
      setLoading(false);
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Info comptes de test */}
          <div className="mb-6 space-y-3">
            {/* Client */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 
                            text-white text-sm font-medium rounded-lg shadow-md px-4 py-3">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Email :</span>
                <span className="font-semibold">client@gmail.com</span>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Lock className="w-4 h-4" />
                <span>Mot de passe :</span>
                <span className="font-semibold">client123</span>
              </p>
            </div>
            {/* Counfirmation */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 
                            text-white text-sm font-medium rounded-lg shadow-md px-4 py-3">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Email :</span>
                <span className="font-semibold">counfirmation@gmail.com</span>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Lock className="w-4 h-4" />
                <span>Mot de passe :</span>
                <span className="font-semibold">counfirmation123</span>
              </p>
            </div>
            {/* 🚀 Service de confirmation */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 
                            text-white text-sm font-medium rounded-lg shadow-md px-4 py-3">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Email :</span>
                <span className="font-semibold">servicecounfirmation@gmail.com</span>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Lock className="w-4 h-4" />
                <span>Mot de passe :</span>
                <span className="font-semibold">service123</span>
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl p-6 md:p-8">
            {/* Logo + Header */}
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} className="w-10 h-10" alt="logo" />
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                TEQA Connect
              </h1>
            </div>

            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Connexion
              </h1>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition"
              >
                <Home className="h-5 w-5" />
                <span className="hidden sm:inline">Accueil</span>
              </button>
            </div>

            {/* Messages */}
            {msg && (
              <div
                className={[
                  "mb-4 rounded-lg px-3 py-2 text-sm",
                  msgType === "error"
                    ? "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-900"
                    : msgType === "success"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-900"
                    : "bg-slate-50 text-slate-700 border border-slate-200 dark:bg-slate-800/50 dark:text-slate-200 dark:border-slate-700",
                ].join(" ")}
              >
                {msg}
              </div>
            )}

            {/* Formulaire */}
            <form onSubmit={onSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    name="email"
                    type="email"
                    placeholder="vous@exemple.com"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    name="password"
                    type={showPwd ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={onChange}
                    required
                    className="w-full pl-10 pr-10 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((v) => !v)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
                  >
                    {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2.5 font-medium shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/30 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Connexion…
                  </>
                ) : (
                  <>
                    <LogIn className="h-4 w-4" />
                    Se connecter
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200 dark:border-slate-700" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white dark:bg-slate-900 px-3 text-xs uppercase tracking-wider text-slate-400">
                  ou se connecter avec
                </span>
              </div>
            </div>

            {/* Google Login */}
            <div className="flex justify-center">
              <GoogleLogin
                theme="filled_blue"
                size="large"
                width="320"
                text="signin_with"
                shape="rectangular"
                onSuccess={(credentialResponse) => {
                  console.log("Google login success:", credentialResponse);
                  navigate("/dashboard");
                }}
                onError={() => {
                  setMsg("❌ Erreur connexion Google");
                  setMsgType("error");
                }}
              />
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Pas de compte ?{" "}
                <Link
                  to="/register"
                  className="font-medium text-blue-600 dark:text-blue-400"
                >
                  Créer un compte
                </Link>
              </p>
              <Link
                to="/"
                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 underline"
              >
                ⟵ Retour à l’accueil
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
            En vous connectant, vous acceptez nos{" "}
            <a href="/terms" className="underline">Conditions d’utilisation</a> &{" "}
            <a href="/privacy" className="underline">Politique de confidentialité</a>.
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
