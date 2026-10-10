import Image from "next/image";
import type { CSSProperties } from "react";
import { delay } from "@/lib/motion";
import HeroPointer from "./HeroPointer";
import { ArrowRightIcon } from "./icons";

// Batatas a flutuar à volta da lata (só no desktop). `depth` = quanto se mexem com o rato.
const CHIPS = [
  { src: "/images/batata-1.png", w: 130, h: 94, left: "41%", top: "20%", size: "clamp(3rem,4.5vw,5.5rem)", depth: 18, d: 1100, className: "rotate-12" },
  { src: "/images/batata-2.png", w: 210, h: 163, left: "33%", top: "74%", size: "clamp(4rem,6vw,7.5rem)", depth: 40, d: 1250, className: "-rotate-[25deg] blur-[1.5px]" },
  { src: "/images/batata-1.png", w: 130, h: 94, left: "63%", top: "8%", size: "clamp(2.5rem,3.2vw,4rem)", depth: 10, d: 1400, className: "rotate-45" },
];

const wordShadow = "text-grunge block drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[640px] h-svh max-h-[1100px] overflow-hidden bg-pringles-red-dark text-white"
    >
      <HeroPointer targetId="hero" />

      {/* Foto: entra com zoom, depois "respira" devagar e desce mais lenta no scroll */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="hero-scroll-bg absolute inset-0">
          <Image
            src="/1-1.png"
            alt="Amigos a partilhar uma lata de Pringles Original"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="hero-img object-cover object-[78%_center] md:object-right"
          />
        </div>
      </div>
      {/* Escurece a lateral esquerda para garantir leitura do texto */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/80 via-black/50 to-black/20 md:from-black/70 md:via-black/15 md:via-45% md:to-transparent" />
      {/* Sombra no topo (menu) e na base (rodapé da hero) */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/45 via-transparent via-25% to-black/40" />

      {/* Batatas a voar */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {CHIPS.map((chip) => (
          <span
            key={`${chip.left}-${chip.top}`}
            className="hero-chip"
            style={delay(chip.d, { left: chip.left, top: chip.top, width: chip.size, "--depth": chip.depth } as CSSProperties)}
          >
            <Image
              src={chip.src}
              alt=""
              width={chip.w}
              height={chip.h}
              unoptimized
              className={`h-auto w-full drop-shadow-[0_14px_16px_rgba(0,0,0,.35)] ${chip.className}`}
            />
          </span>
        ))}
      </div>

      <div className="hero-scroll-content mx-auto flex w-full max-w-[1920px] flex-col justify-center px-5 pt-28 pb-12 md:px-[4.6%] md:pt-[clamp(6.5rem,15vh,9rem)] md:pb-[clamp(2rem,6vh,4rem)]">
        <h1 className="hero-shake font-display font-black uppercase leading-[0.86] tracking-[-0.02em] text-[clamp(2.9rem,14vw,4.6rem)] md:text-[clamp(3.4rem,min(7vw,13vh),8.5rem)] -rotate-3 origin-left">
          <span className="hero-word block" style={delay(550)}>
            <span className={wordShadow}>Abra.</span>
          </span>
          <span className="hero-word block" style={delay(750)}>
            <span className={wordShadow}>Pegue.</span>
          </span>
          <span className="hero-word relative block w-fit text-pringles-red" style={delay(950)}>
            {/* Onda de choque quando a palavra aterra */}
            <span
              className="hero-burst pointer-events-none absolute top-1/2 left-1/2 size-[1.3em] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.06em] border-pringles-yellow"
              aria-hidden
            />
            <span className="text-grunge relative z-10 drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]">Repita.</span>
            {/* Traço de pincel por baixo de "REPITA." (desenha-se da esquerda para a direita) */}
            <svg
              viewBox="0 0 600 40"
              preserveAspectRatio="none"
              className="hero-brush absolute -bottom-[0.14em] left-[2%] h-[0.22em] w-[104%] text-pringles-red"
              aria-hidden
            >
              <path
                d="M2 30 C120 18 300 10 598 4 L596 14 C420 20 260 26 140 32 L60 36 Z"
                fill="currentColor"
              />
              <path d="M180 34 L420 24 L418 28 L200 37 Z" fill="currentColor" opacity=".7" />
            </svg>
          </span>
        </h1>

        <p
          className="hero-fade mt-[clamp(1.25rem,4vh,2rem)] max-w-[25ch] font-display text-base font-semibold leading-snug md:text-[clamp(1.15rem,min(1.7vw,3.2vh),1.9rem)] -rotate-2 origin-left"
          style={delay(1550)}
        >
          O sabor que começa com uma e nunca termina em uma.
        </p>

        <div className="hero-pop hero-cta-ring relative mt-[clamp(1.25rem,4vh,2rem)] w-fit rounded-full" style={delay(1800)}>
          <a
            href="#produtos"
            className="hero-cta group relative inline-flex w-fit items-center gap-4 overflow-hidden rounded-full bg-pringles-red px-9 py-4 md:px-11 md:py-5 font-display text-base font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:bg-white hover:text-pringles-red md:text-lg"
          >
            Explorar Pringles
            <ArrowRightIcon className="size-5 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Cortinas de entrada: vermelha por cima, amarela logo atrás */}
      <div className="hero-curtain pointer-events-none absolute inset-0 z-20 bg-pringles-yellow" style={delay(180)} aria-hidden />
      <div className="hero-curtain pointer-events-none absolute inset-0 z-20 bg-pringles-red" style={delay(40)} aria-hidden />
    </section>
  );
}
