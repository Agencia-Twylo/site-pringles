import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBurgerKing from "@/components/PromoBurgerKing";
import PromoFutebol from "@/components/PromoFutebol";
import PromoVerao from "@/components/PromoVerao";
import PringlesHot from "@/components/PringlesHot";
import NossaMarca from "@/components/NossaMarca";
import MaisMomentos from "@/components/MaisMomentos";
import NossosProdutos from "@/components/NossosProdutos";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    // @container: as seções de largura total medem-se pela largura da página
    <main className="@container relative flex flex-1 flex-col bg-white text-white">
      <Header />
      <Hero />

      <MaisMomentos />
      <PromoBurgerKing />

      <PromoVerao />

      <PromoFutebol />

      <SectionDivider variant="dip" tone="hot" />
      <PringlesHot />

      <NossosProdutos />

      <NossaMarca />

      <Footer />
      <ScrollReveal />
    </main>
  );
}
