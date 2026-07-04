import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Measures } from "./components/Measures";
import { Safety } from "./components/Safety";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { Company } from "./components/Company";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="vg">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Measures />
        <Safety />
        <Works />
        <Contact />
        <Company />
      </main>
      <Footer />
    </div>
  );
}
