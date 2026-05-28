"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Loader2,
} from "lucide-react";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

type FormState = "idle" | "loading" | "success" | "error";

type FormErrors = Record<string, string>;

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: services[0]?.title ?? "",
  message: "",
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function update<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K],
  ) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as string]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[key as string];
        return next;
      });
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setState("error");
        return;
      }
      setState("success");
      setForm(initialForm);
    } catch {
      setState("error");
    }
  }

  const { contact } = siteConfig;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${
    contact.address.lng - 0.08
  }%2C${contact.address.lat - 0.04}%2C${contact.address.lng + 0.08}%2C${
    contact.address.lat + 0.04
  }&layer=mapnik&marker=${contact.address.lat}%2C${contact.address.lng}`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-[#E8705A] font-semibold text-sm uppercase tracking-[0.2em] bg-white px-3 py-1 rounded-full shadow-sm">
            Contact
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Demandez votre{" "}
            <span className="gradient-text">devis gratuit</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Décrivez votre besoin, nous vous recontactons rapidement.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form - 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl shadow-gray-100 p-7 sm:p-10 border border-gray-100 reveal">
            {state === "success" ? (
              <div className="text-center py-12 px-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#E8705A]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Demande envoyée !
                </h3>
                <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                  Merci pour votre confiance. Nous vous recontactons très prochainement.
                </p>
                <button
                  type="button"
                  onClick={() => setState("idle")}
                  className="mt-8 text-[#E8705A] font-semibold underline hover:text-[#D4553F]"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                {/* Honeypot anti-spam, caché */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                  onChange={() => undefined}
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Prénom"
                    name="firstName"
                    placeholder="Marie"
                    value={form.firstName}
                    onChange={(v) => update("firstName", v)}
                    error={errors.firstName}
                    required
                  />
                  <Field
                    label="Nom"
                    name="lastName"
                    placeholder="Dupont"
                    value={form.lastName}
                    onChange={(v) => update("lastName", v)}
                    error={errors.lastName}
                    required
                  />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="marie@exemple.fr"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  error={errors.email}
                  required
                />
                <Field
                  label="Téléphone (optionnel)"
                  name="phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={form.phone}
                  onChange={(v) => update("phone", v)}
                  error={errors.phone}
                />

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Service souhaité <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#E8705A] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="autre">Autre / je ne sais pas encore</option>
                  </select>
                  {errors.service && <ErrorText>{errors.service}</ErrorText>}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Votre besoin <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Décrivez votre logement, la fréquence souhaitée, vos contraintes..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E8705A] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm resize-none"
                  />
                  {errors.message && <ErrorText>{errors.message}</ErrorText>}
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#E8705A] border-gray-300 rounded focus:ring-[#E8705A]"
                  />
                  <span className="text-xs text-gray-500 leading-relaxed">
                    J&apos;accepte que mes données soient utilisées pour me
                    recontacter au sujet de ma demande. Voir notre{" "}
                    <Link
                      href="/politique-confidentialite"
                      className="underline hover:text-[#E8705A]"
                    >
                      politique de confidentialité
                    </Link>
                    . <span className="text-rose-500">*</span>
                  </span>
                </label>
                {errors.consent && <ErrorText>{errors.consent}</ErrorText>}

                {state === "error" && !Object.keys(errors).length && (
                  <div className="flex items-center gap-2 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>
                      Une erreur est survenue. Vous pouvez aussi nous appeler au{" "}
                      <a
                        href={`tel:${contact.phoneTel}`}
                        className="font-semibold underline"
                      >
                        {contact.phone}
                      </a>
                      .
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E8705A] text-white px-7 py-4 rounded-xl text-base font-semibold hover:bg-[#D4553F] transition-all hover:shadow-lg hover:shadow-orange-200 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  {state === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer ma demande
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Contact rapide · Sans engagement · 100 % confidentiel
                </p>
              </form>
            )}
          </div>

          {/* Infos - 2 cols */}
          <div
            className="lg:col-span-2 flex flex-col gap-5 reveal"
            data-delay="200"
          >
            <InfoCard icon={MapPin} title="Adresse">
              {contact.address.city} ({contact.address.postalCode}),{" "}
              {contact.address.region}
              <span className="block text-xs text-gray-500 mt-1">
                Zone d&apos;intervention :{" "}
                {contact.serviceArea.slice(0, 3).join(", ")} et alentours
              </span>
            </InfoCard>

            <InfoCard icon={Phone} title="Téléphone">
              <a
                href={`tel:${contact.phoneTel}`}
                className="hover:text-[#E8705A] font-semibold"
              >
                {contact.phone}
              </a>
            </InfoCard>

            <InfoCard icon={Mail} title="Email">
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-[#E8705A] font-semibold break-all"
              >
                {contact.email}
              </a>
            </InfoCard>

            <InfoCard icon={Clock} title="Horaires">
              <ul className="space-y-0.5 text-sm">
                {contact.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span className="text-gray-500">{h.day}</span>
                    <span className="font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-56 sm:h-64">
              <iframe
                title={`Carte de ${contact.address.city}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
          error
            ? "border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/30"
            : "border-gray-200 focus:border-[#E8705A] focus:ring-2 focus:ring-orange-100"
        }`}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
      <AlertCircle className="w-3.5 h-3.5" />
      {children}
    </p>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#E8705A] flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-900 mb-0.5">{title}</h3>
        <div className="text-gray-600 text-sm">{children}</div>
      </div>
    </div>
  );
}
