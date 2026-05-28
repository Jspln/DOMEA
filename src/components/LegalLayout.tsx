import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-gradient-to-b from-teal-50/40 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm text-teal-700 hover:text-teal-800 font-medium inline-flex items-center gap-1.5 mb-6"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-gray-600 text-lg">{description}</p>
          )}
          <div className="legal-content mt-12 text-gray-700 leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
