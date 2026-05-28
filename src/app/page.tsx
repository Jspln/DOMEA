export const dynamic = "force-dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CreditImpot from "@/components/CreditImpot";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <CreditImpot />
        <Testimonials />
        <Faq />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
