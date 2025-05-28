import Image from "next/image";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
