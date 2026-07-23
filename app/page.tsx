import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Concerns } from "./components/Concerns";
import { Services } from "./components/Services";
import { Works } from "./components/Works";
import { CostGuide } from "./components/CostGuide";
import { Measures } from "./components/Measures";
import { Safety } from "./components/Safety";
import { IhinPreview } from "./components/IhinPreview";
import { Faq } from "./components/Faq";
import { Area } from "./components/Area";
import { UpdatesPreview } from "./components/UpdatesPreview";
import { Company } from "./components/Company";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="vg">
      <Header />
      <main>
        <Hero />
        <About />
        <Concerns />
        <Services />
        <Works />
        <CostGuide />
        <Measures />
        <Safety />
        <IhinPreview />
        <Faq />
        <Area />
        <UpdatesPreview />
        <Company />
      </main>
      <Footer />
    </div>
  );
}
