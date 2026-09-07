import Hero from "./components/sections/Hero";
import Sobre from "./components/sections/Sobre";
import Servicos from "./components/sections/Servicos";
import Projetos from "./components/sections/Projetos";
import Insights from "./components/sections/Insights";
import Contato from "./components/sections/Contato";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121417] flex flex-col selection:bg-[#9a1c24] selection:text-white">
      <Hero />
      <Sobre />
      <Servicos />
      <Projetos />
      <Insights />
      <Contato />
      <Footer />
    </div>
  );
}
