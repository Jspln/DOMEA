"use client";

import { useState, useEffect } from "react";
import {
  Lock,
  LogOut,
  Save,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowLeft,
  RefreshCw,
  Home,
  Sparkles,
  Shirt,
  LayoutGrid,
  Leaf,
  Euro,
  Eye,
} from "lucide-react";

type Prices = Record<string, number>;

const SERVICES: { id: string; label: string; icon: React.ElementType; color: string }[] = [
  { id: "entretien-regulier", label: "Entretien régulier", icon: Home, color: "bg-orange-100 text-[#E8705A]" },
  { id: "grand-menage", label: "Grand ménage", icon: Sparkles, color: "bg-amber-100 text-amber-600" },
  { id: "blanchisserie", label: "Blanchisserie", icon: Shirt, color: "bg-blue-100 text-blue-600" },
  { id: "organisation", label: "Organisation intérieure", icon: LayoutGrid, color: "bg-purple-100 text-purple-600" },
  { id: "jardinage", label: "Jardinage & Entretien", icon: Leaf, color: "bg-stone-100 text-stone-600" },
];

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [prices, setPrices] = useState<Prices>({});
  const [loadingPrices, setLoadingPrices] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "ok" | "error">("idle");
  const [saveError, setSaveError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) { setLoginError(data.error ?? "Mot de passe incorrect."); return; }
      setAuthed(true);
    } catch { setLoginError("Erreur réseau. Réessayez."); }
    finally { setLoginLoading(false); }
  }

  async function loadPrices() {
    setLoadingPrices(true);
    try {
      const r = await fetch("/api/admin/prices");
      const d = await r.json();
      if (d.ok) setPrices(d.prices);
    } finally { setLoadingPrices(false); }
  }

  useEffect(() => { if (authed) loadPrices(); }, [authed]);

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setAuthed(false); setPassword(""); setPrices({});
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaveStatus("saving"); setSaveError("");
    try {
      const res = await fetch("/api/admin/prices", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prices }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) { setSaveError(data.error ?? "Erreur."); setSaveStatus("error"); return; }
      setSaveStatus("ok");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch { setSaveError("Erreur réseau."); setSaveStatus("error"); }
  }

  /* ── PAGE LOGIN ── */
  if (!authed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/domea-sans-fond.png" alt="DOMÉA" className="h-20 w-auto object-contain mx-auto mb-6" />
            <h1 className="text-2xl font-extrabold text-gray-900">Espace admin</h1>
            <p className="text-sm text-gray-500 mt-1">Gestion des tarifs DOMÉA</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white rounded-3xl shadow-xl border border-orange-100 p-8 space-y-5">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="password" type={showPwd ? "text" : "password"} required autoFocus
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3.5 rounded-xl border border-gray-200 focus:border-[#E8705A] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
                  placeholder="••••••••••••"
                />
                <button type="button" onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              {loginError && (
                <p className="mt-2 text-xs text-rose-600 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />{loginError}
                </p>
              )}
            </div>

            <button type="submit" disabled={loginLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8705A] to-[#C9923A] text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-60 shadow-md shadow-orange-200">
              {loginLoading ? <><Loader2 className="w-4 h-4 animate-spin" />Connexion…</> : "Se connecter"}
            </button>

            <a href="/" className="flex items-center justify-center gap-1.5 text-sm text-gray-400 hover:text-[#E8705A] transition-colors pt-1">
              <ArrowLeft className="w-3.5 h-3.5" />Retour au site
            </a>
          </form>
        </div>
      </div>
    );
  }

  /* ── PAGE ADMIN ── */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/domea-sans-fond.png" alt="DOMÉA" className="h-10 w-auto object-contain" />
            <div className="hidden sm:block h-6 w-px bg-gray-200" />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-gray-900 leading-none">Gestion des tarifs</p>
              <p className="text-xs text-gray-400 mt-0.5">Espace administration</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => loadPrices()}
              className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium">
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Actualiser</span>
            </button>
            <a href="/"
              className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Retour au site</span>
            </a>
            <button type="button" onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors font-medium">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Déconnexion</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Banner info */}
        <div className="bg-gradient-to-r from-[#E8705A] to-[#C9923A] rounded-2xl p-5 mb-8 text-white flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <Euro className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-sm">Prix horaires bruts</p>
            <p className="text-xs text-white/80 mt-0.5">Le tarif affiché sur le site est automatiquement divisé par 2 (crédit d&apos;impôt de 50 %). Modifiez le prix brut ci-dessous.</p>
          </div>
        </div>

        {loadingPrices ? (
          <div className="flex items-center justify-center py-24 text-gray-400 gap-3">
            <Loader2 className="w-6 h-6 animate-spin" />Chargement…
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-3">
            {SERVICES.map(({ id, label, icon: Icon, color }) => {
              const price = prices[id] ?? 0;
              return (
                <div key={id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 hover:border-orange-200 transition-colors">
                  <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Affiché client : <span className="font-semibold text-[#E8705A]">{Math.round(price / 2)} €/h</span>
                      <span className="mx-1.5 text-gray-300">·</span>
                      Brut : <span className="font-medium text-gray-600">{price} €/h</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="relative">
                      <input
                        type="number" min={1} max={999} step={0.5} value={price}
                        onChange={(e) => setPrices((prev) => ({ ...prev, [id]: parseFloat(e.target.value) || 0 }))}
                        className="w-24 pr-7 pl-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#E8705A] focus:ring-2 focus:ring-orange-100 outline-none text-sm font-bold text-center"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-medium">€</span>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">/h</span>
                  </div>
                </div>
              );
            })}

            {/* Feedback */}
            {saveStatus === "error" && (
              <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />{saveError}
              </div>
            )}
            {saveStatus === "ok" && (
              <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl text-orange-700 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />Tarifs mis à jour avec succès !
              </div>
            )}

            {/* Save button */}
            <button type="submit" disabled={saveStatus === "saving"}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8705A] to-[#C9923A] text-white py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-all disabled:opacity-60 shadow-lg shadow-orange-200 mt-4">
              {saveStatus === "saving"
                ? <><Loader2 className="w-5 h-5 animate-spin" />Enregistrement…</>
                : <><Save className="w-5 h-5" />Enregistrer les tarifs</>}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
