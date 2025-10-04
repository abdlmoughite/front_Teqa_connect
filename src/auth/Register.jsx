import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import api from "./utils/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("info"); // "success" | "error" | "info"
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const isValidEmail = useMemo(
    () => /^\S+@\S+\.\S+$/.test(form.email.trim()),
    [form.email]
  );

  const validate = () => {
    if (!form.name.trim()) return "Le nom est obligatoire.";
    if (!isValidEmail) return "Email invalide.";
    if (form.password.length < 8) return "Mot de passe ≥ 8 caractères.";
    if (form.password !== form.confirmPassword) return "Les mots de passe ne correspondent pas.";
    return null;
  };

  const canSubmit =
    !loading &&
    form.name.trim() &&
    isValidEmail &&
    form.password.length >= 8 &&
    form.password === form.confirmPassword;

  // Affichage propre des erreurs DRF
  const humanizeDjangoErrors = (err) => {
    const data = err?.response?.data;
    if (!data) return "Une erreur est survenue. Veuillez réessayer.";
    if (typeof data === "string") return data;
    if (data.error) return data.error;
    if (data.detail) return data.detail;
    try {
      const parts = [];
      Object.entries(data).forEach(([field, msgs]) => {
        if (Array.isArray(msgs)) parts.push(`${field}: ${msgs.join(", ")}`);
        else if (typeof msgs === "string") parts.push(`${field}: ${msgs}`);
      });
      return parts.join(" • ") || "Une erreur est survenue. Veuillez réessayer.";
    } catch {
      return "Une erreur est survenue. Veuillez réessayer.";
    }
  };

  const getInboxUrl = () => {
    const domain = form.email.split("@")[1]?.toLowerCase() || "";
    if (domain.includes("gmail")) return "https://mail.google.com/";
    if (domain.includes("outlook") || domain.includes("hotmail") || domain.includes("live"))
      return "https://outlook.live.com/mail/";
    if (domain.includes("yahoo")) return "https://mail.yahoo.com/";
    return "mailto:" + form.email;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    const err = validate();
    if (err) {
      setMsg(err);
      setMsgType("error");
      return;
    }
    setLoading(true);
    try {
      const payload = {
  name: form.name.trim(),
  email: form.email.trim().toLowerCase(),
  password: form.password,
  confirm_password: form.confirmPassword, // ✅
};
    //   const { data } = await api.post("/register/", payload);
    //   setMsg(data?.message || "✅ Inscription réussie. Vérifie ton email pour activer le compte.");
      setMsgType("success");
      setDone(true);
    } catch (err2) {
      setMsg("❌ " + humanizeDjangoErrors(err2));
      setMsgType("error");
    } finally {
      setLoading(false);
    }
  };

  // jauge simple de force
  const strength = useMemo(() => {
    const p = form.password;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[a-z]/.test(p)) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/\d/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return Math.min(s, 4);
  }, [form.password]);
  const strengthLabel = ["Très faible", "Faible", "Moyen", "Bon", "Fort"][strength] || "Très faible";
  const strengthPct = [0, 25, 50, 75, 100][strength] || 0;
  const strengthColor =
    strength <= 1 ? "bg-red-500" : strength === 2 ? "bg-yellow-500" : strength === 3 ? "bg-emerald-500" : "bg-green-600";

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(14,165,233,.15),transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(14,165,233,.2),transparent)] bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Hero */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/70 px-3 py-1 text-xs text-sky-700 shadow-sm dark:border-sky-900/40 dark:bg-slate-900/60 dark:text-sky-300">
            ✨ Rejoignez TEQA CONNECT
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Créer un compte</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Inscrivez-vous pour accéder au tableau de bord et activer votre boutique.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-5">
          {/* Aside */}
          <aside className="order-last md:order-first md:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="text-sm font-medium text-slate-800 dark:text-slate-200">Pourquoi s’inscrire ?</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-2"><span>✅</span><span>Activation sécurisée par email</span></li>
                <li className="flex gap-2"><span>✅</span><span>Espace marchand dédié</span></li>
                <li className="flex gap-2"><span>✅</span><span>Support prioritaire selon votre plan</span></li>
              </ul>
              <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
                Déjà inscrit ?{" "}
                <Link to="/login" className="font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300">
                  Se connecter
                </Link>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
              {/* Message */}
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
                  role="alert"
                  aria-live="polite"
                >
                  {msg}
                </div>
              )}

              {!done ? (
                <form onSubmit={onSubmit} className="space-y-4" noValidate>
                  {/* Nom */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Nom
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Votre nom"
                        value={form.name}
                        onChange={onChange}
                        autoComplete="name"
                        required
                        className="w-full pr-3 py-2 pl-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-transparent transition"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">👤</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="vous@exemple.com"
                        value={form.email}
                        onChange={onChange}
                        autoComplete="email"
                        required
                        className="w-full pr-3 py-2 pl-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-transparent transition"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">✉️</span>
                    </div>
                  </div>

                  {/* Mot de passe */}
                  <div className="space-y-1.5">
                    <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPwd ? "text" : "password"}
                        placeholder="••••••••"
                        value={form.password}
                        onChange={onChange}
                        autoComplete="new-password"
                        required
                        className="w-full pl-10 pr-10 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-transparent transition"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔒</span>
                      <button
                        type="button"
                        onClick={() => setShowPwd((v) => !v)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md px-2 py-1"
                        aria-label={showPwd ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                      >
                        {showPwd ? "🙈" : "👁️"}
                      </button>
                    </div>

                    {/* Jauge force */}
                    <div className="mt-2">
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`${strengthColor} h-2 transition-all`} style={{ width: `${strengthPct}%` }} />
                      </div>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Force : {strengthLabel}</div>
                      <ul className="text-xs text-slate-500 dark:text-slate-400 list-disc ml-5 mt-1">
                        <li>Au moins 8 caractères</li>
                        <li>Mélange de lettres/chiffres/symbole recommandé</li>
                      </ul>
                    </div>
                  </div>

                  {/* Confirmation */}
                  <div className="space-y-1.5">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Confirmer le mot de passe
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPwd2 ? "text" : "password"}
                        placeholder="••••••••"
                        value={form.confirmPassword}
                        onChange={onChange}
                        autoComplete="new-password"
                        required
                        className="w-full pl-10 pr-10 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-transparent transition"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔒</span>
                      <button
                        type="button"
                        onClick={() => setShowPwd2((v) => !v)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md px-2 py-1"
                        aria-label={showPwd2 ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                      >
                        {showPwd2 ? "🙈" : "👁️"}
                      </button>
                    </div>
                    {form.confirmPassword && form.password !== form.confirmPassword && (
                      <div className="text-xs text-red-600 dark:text-red-300">Les mots de passe ne correspondent pas.</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 text-white px-4 py-2.5 font-medium shadow hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-500/30 disabled:opacity-70 disabled:cursor-not-allowed transition"
                  >
                    {loading ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                          <path d="M22 12a10 10 0 0 1-10 10" fill="currentColor" />
                        </svg>
                        Création du compte…
                      </>
                    ) : (
                      <>
                        <span>➕</span>
                        S’inscrire
                      </>
                    )}
                  </button>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
                    <p className="text-slate-600 dark:text-slate-300">
                      Déjà un compte ?{" "}
                      <Link
                        to="/login"
                        className="font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
                      >
                        Se connecter
                      </Link>
                    </p>
                    <Link
                      to="/"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white underline decoration-dotted"
                    >
                      ⟵ Retour à l’accueil
                    </Link>
                  </div>
                </form>
              ) : (
                // Écran success
                <div className="space-y-4">
                  <div className="rounded-lg px-3 py-2 text-sm bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-900">
                    {msg}
                  </div>
                  <a
                    href={getInboxUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white px-4 py-2.5 font-medium shadow hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition"
                  >
                    📬 Ouvrir ma boîte mail
                  </a>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Pense à vérifier le dossier <span className="font-medium">Spam</span> si tu ne vois rien.
                  </div>

                  <div className="flex items-center justify-between text-sm pt-2">
                    <Link
                      to="/login"
                      className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 font-medium"
                    >
                      Se connecter
                    </Link>
                    <button
                      onClick={() => navigate("/")}
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      ⟵ Retour à l’accueil
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer légal */}
        <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          En vous inscrivant, vous acceptez nos{" "}
          <a className="underline decoration-dotted hover:no-underline" href="/terms">
            Conditions d’utilisation
          </a>{" "}
          &{" "}
          <a className="underline decoration-dotted hover:no-underline" href="/privacy">
            Politique de confidentialité
          </a>.
        </p>
      </div>
    </div>
  );
}