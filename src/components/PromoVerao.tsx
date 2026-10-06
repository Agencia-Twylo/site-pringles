import Image from "next/image";
import type { CSSProperties } from "react";
import { delay } from "@/lib/motion";
import { ArrowRightIcon, SunIcon } from "./icons";

const CREAM = "#f3ede5";

// Formato da foto (coordenadas da caixa da foto): lateral direita inclinada,
// canto de cima arredondado e topo a subir suavemente para a esquerda.
const PHOTO_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M86 16 C 85 9, 81 6, 74 5.5 C 50 4, 22 1.5, 0 0 L 0 100 L 100 100 C 95 72, 90 44, 86 16 Z"/></svg>',
)}")`;

const maskStyle: CSSProperties = {
  maskImage: PHOTO_MASK,
  WebkitMaskImage: PHOTO_MASK,
  maskSize: "100% 100%",
  WebkitMaskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
};

export default function PromoVerao() {
  return (
    <section id="passatempo-verao" className="relative z-10 text-neutral-950">
      {/* Curva que fecha a seção de cima (cai por cima da base da seção Burger King) */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="relative -mb-px block h-[clamp(2.5rem,6cqw,6.5rem)] w-full -mt-[clamp(2.5rem,6cqw,6.5rem)] drop-shadow-[0_-8px_14px_rgba(0,0,0,.12)]"
        aria-hidden
      >
        <path d="M0 60 L0 26 C 260 30, 560 46, 860 44 C 1120 42, 1300 22, 1440 4 L1440 60 Z" fill={CREAM} />
      </svg>

      <div className="relative isolate flex flex-col overflow-hidden lg:block lg:aspect-[1993/760]" style={{ background: CREAM }}>
        {/* Foto: no desktop fica à esquerda com o recorte; no mobile fica abaixo do texto */}
        <div
          data-reveal="wipe"
          className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:left-0 lg:right-[37%] lg:w-auto lg:aspect-auto"
          style={maskStyle}
        >
          <Image
            src="/images/verao-praia.png"
            alt="Amigos numa festa de praia ao pôr do sol com uma lata de Pringles Original"
            fill
            sizes="(min-width: 1024px) 63vw, 130vw"
            quality={90}
            className="parallax-img object-cover object-center"
          />
        </div>

        <div className="relative -order-1 flex w-full flex-col justify-center px-5 py-12 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[38%] lg:px-0 lg:py-0 lg:pl-[3%] lg:pr-[6%]">
          <p data-reveal="pop" className="w-fit -rotate-3 font-display font-bold uppercase tracking-[0.18em] text-pringles-red text-[clamp(.75rem,.9cqw,1.1rem)]">
            Verão
            <span className="mt-1 block h-[3px] w-full rounded-full bg-pringles-red" />
          </p>

          <h2 data-reveal="right" style={delay(150)} className="mt-[clamp(.5rem,.9cqw,1.25rem)] -rotate-3 origin-left font-marker uppercase leading-[1] text-[#1d1d2b] text-[clamp(2.1rem,3.3cqw,4.3rem)]">
            Passatempo de
            <br />
            verão Pringles
          </h2>

          <p data-reveal="up" style={delay(300)} className="mt-[clamp(1rem,1.6cqw,2rem)] max-w-[28rem] leading-relaxed text-neutral-700 text-[clamp(.95rem,1.15cqw,1.4rem)]">
            A tua oportunidade de ganhar uma viagem VIP à Ibiza para ti e um amigo!
          </p>

          <div data-reveal="up" style={delay(450)} className="mt-[clamp(1.25rem,2cqw,2.5rem)] flex items-center gap-[clamp(1.25rem,2.2cqw,2.75rem)]">
            <a
              href="#participar"
              className="group inline-flex items-center gap-4 rounded-full bg-[#ffd231] px-8 py-3.5 font-display font-extrabold uppercase tracking-wide text-neutral-900 shadow-[0_10px_24px_-8px_rgba(0,0,0,.35)] transition hover:bg-pringles-red hover:text-white text-[clamp(.85rem,.95cqw,1.15rem)] lg:px-[2cqw] lg:py-[0.9cqw]"
            >
              Participar agora
              <ArrowRightIcon className="size-[1.3em] transition group-hover:translate-x-1" />
            </a>
            <SunIcon className="size-[clamp(2rem,2.6cqw,3.25rem)] shrink-0 text-pringles-red motion-safe:animate-[spin_14s_linear_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
