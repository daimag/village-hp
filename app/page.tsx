import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Strengths } from "./components/Strengths";
import { Company } from "./components/Company";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Strengths />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
