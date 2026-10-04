"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "./icons";

// `thumb` = miniatura no seletor; `hero` = foto de fundo mostrada ao escolher o sabor.
// As fotos têm de ter o mesmo enquadramento (1855×848, cena na mesma posição) para
// que, ao trocar de sabor, só o pote mude. A do Original é uma cópia alinhada da 1-1.png.
const FLAVORS = [
  {
    name: "Original",
    thumb: "/images/lata-original.png",
    hero: "/images/hero-original-alinhada.png",
    alt: "Amigos a partilhar uma lata de Pringles Original",
  },
  {
    name: "Sour Cream & Onion",
    thumb: "/images/lata-sour-cream.png",
    hero: "/1-2.png",
    alt: "Amigos a partilhar uma lata de Pringles Sour Cream & Onion",
  },
  {
    name: "Burger King® Steakhouse",
    thumb: "/images/lata-steakhouse.png",
    hero: "/1-3.png",
    alt: "Amigos a partilhar uma lata de Pringles Burger King® Steakhouse",
  },
];

export default function Hero() {
  const [activeFlavor, setActiveFlavor] = useState(0);

  return (
    <section className="relative isolate flex min-h-[640px] h-svh max-h-[1100px] overflow-hidden bg-pringles-red-dark text-white">
      {/* Fotos de fundo empilhadas: a do sabor escolhido aparece com fade */}
      {FLAVORS.map((flavor, i) => (
        <Image
          key={flavor.hero}
          src={flavor.hero}
          alt={activeFlavor === i ? flavor.alt : ""}
          aria-hidden={activeFlavor !== i}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`-z-20 object-cover object-[78%_center] transition-opacity duration-700 ease-out motion-reduce:transition-none md:object-right ${
            activeFlavor === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Escurece a lateral esquerda para garantir leitura do texto */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/75 via-black/35 to-black/10 md:from-black/70 md:via-black/15 md:via-45% md:to-transparent" />
      {/* Sombra no topo (menu) e na base (rodapé da hero) */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/45 via-transparent via-25% to-black/40" />

      <div className="mx-auto flex w-full max-w-[1920px] flex-col justify-center px-5 pt-28 pb-12 md:px-[4.6%] md:pt-[clamp(6.5rem,15vh,9rem)] md:pb-[clamp(2rem,6vh,4rem)]">
        <h1 className="font-display font-black uppercase leading-[0.86] tracking-[-0.02em] text-[clamp(2.9rem,14vw,4.6rem)] md:text-[clamp(3.4rem,min(7vw,13vh),8.5rem)] -rotate-3 origin-left">
          <span className="text-grunge block drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]">Abra.</span>
          <span className="text-grunge block drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]">Pegue.</span>
          <span className="relative block w-fit text-pringles-red">
            <span className="text-grunge relative z-10 drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]">Repita.</span>
            {/* Traço de pincel por baixo de "REPITA." */}
            <svg
              viewBox="0 0 600 40"
              preserveAspectRatio="none"
              className="absolute -bottom-[0.14em] left-[2%] h-[0.22em] w-[104%] text-pringles-red"
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

        <p className="mt-[clamp(1.25rem,4vh,2rem)] max-w-[25ch] font-display text-base font-semibold leading-snug md:text-[clamp(1.15rem,min(1.7vw,3.2vh),1.9rem)] -rotate-2 origin-left">
          O sabor que começa com uma e nunca termina em uma.
        </p>

        <a
          href="#produtos"
          className="group mt-[clamp(1.25rem,4vh,2rem)] inline-flex w-fit items-center gap-4 rounded-full bg-pringles-red px-9 py-4 md:px-11 md:py-5 font-display text-base font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:bg-white hover:text-pringles-red md:text-lg"
        >
          Explorar Pringles
          <ArrowRightIcon className="size-5 transition group-hover:translate-x-1" />
        </a>
      </div>

      {/* Seletor de sabores (lado direito) */}
      <div className="absolute right-[4%] top-1/2 hidden -translate-y-1/2 items-center gap-4 xl:flex">
        <ul className="flex flex-col gap-1.5 rounded-xl border border-white/15 bg-black/25 p-1 backdrop-blur-sm">
          {FLAVORS.map((flavor, i) => (
            <li key={flavor.name}>
              <button
                type="button"
                onClick={() => setActiveFlavor(i)}
                aria-label={`Ver sabor ${flavor.name}`}
                aria-pressed={activeFlavor === i}
                className={`relative block h-[72px] w-[52px] overflow-hidden rounded-lg border-2 transition ${
                  activeFlavor === i
                    ? "border-pringles-red shadow-[0_0_14px_rgba(227,20,28,.75)]"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                <Image src={flavor.thumb} alt="" fill sizes="52px" className="object-cover object-top" />
              </button>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-3.5" aria-label="Slides">
          {FLAVORS.map((flavor, i) => (
            <li key={flavor.name}>
              <button
                type="button"
                onClick={() => setActiveFlavor(i)}
                aria-label={`Ver sabor ${flavor.name}`}
                aria-current={activeFlavor === i}
                className={`block size-2.5 rounded-full border-[1.5px] border-white transition ${
                  activeFlavor === i ? "bg-white" : "bg-transparent hover:bg-white/40"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
