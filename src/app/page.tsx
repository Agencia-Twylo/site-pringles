import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBurgerKing from "@/components/PromoBurgerKing";
import PromoFutebol from "@/components/PromoFutebol";
import PromoVerao from "@/components/PromoVerao";
import PringlesHot from "@/components/PringlesHot";
import NossaMarca from "@/components/NossaMarca";
import NossosProdutos from "@/components/NossosProdutos";
import SectionDivider from "@/components/SectionDivider";

/** Mostra uma seção dentro de um container centralizado, com fundo branco à volta. */
function Contained({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white px-4 py-10 md:px-8 md:py-16">
      <div className="@container mx-auto w-full max-w-[1440px] shadow-[0_40px_90px_-50px_rgba(0,0,0,.45)]">
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    // @container: as seções de largura total medem-se pela largura da página
    <main className="@container relative flex flex-1 flex-col bg-white text-white">
      <Header />
      <Hero />

      <SectionDivider variant="slant" />
      <PromoBurgerKing />

      <Contained>
        <PromoVerao />
      </Contained>

      <PromoFutebol />

      <SectionDivider variant="swoosh" tone="dark" />
      <PringlesHot />

      <Contained>
        <NossosProdutos />
      </Contained>

      <NossaMarca />

      <Footer />
    </main>
  );
}
