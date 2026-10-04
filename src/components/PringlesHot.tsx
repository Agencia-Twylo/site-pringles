"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { ArrowRightIcon, ChiliIcon, FlameIcon } from "./icons";

// `x` = centro horizontal de cada lata na imagem 5-1.png (em % da largura)
const HOT_FLAVORS = [
  { name: ["Sweet", "Chilli"], level: 1, x: "48.4%" },
  { name: ["Mexican", "Chilli & Lime"], level: 2, x: "57.8%" },
  { name: ["Cheese & Chilli"], level: 3, x: "67.9%" },
  { name: ["Kickin'", "Sour Cream"], level: 4, x: "78.3%" },
  { name: ["Smokin'", "BBQ Ribs"], level: 5, x: "88.6%" },
];

export default function PringlesHot() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="pringles-hot"
      className="relative isolate flex flex-col overflow-hidden bg-[#0b0505] text-white lg:block lg:aspect-[1855/848]"
    >
      {/* Fundo: no desktop cobre a seção toda; no mobile fica abaixo do texto */}
      <div className="relative aspect-[4/3] w-full lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/5-1.png"
          alt="As cinco latas Pringles HOT lado a lado com malaguetas, lima, queijo e molhos"
          fill
          sizes="(min-width: 1500px) 1440px, 100vw"
          className="object-cover object-[70%_center] lg:object-center"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative -order-1 flex w-full flex-col justify-center px-5 pt-14 pb-10 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[38%] lg:px-0 lg:pt-[3cqw] lg:pb-[6cqw] lg:pl-[3.6%]">
        <p className="relative w-fit -rotate-12 origin-left font-marker uppercase text-pringles-red text-[clamp(1.4rem,2.2cqw,2.5rem)] leading-none lg:ml-[1.5cqw]">
          Pringles Hot
          <FlameIcon className="ml-1 inline-block h-[1.1em] w-auto -translate-y-[0.35em]" />
          <span className="absolute -bottom-[0.3em] left-0 h-[0.12em] w-[110%] -rotate-2 rounded-full bg-pringles-red" aria-hidden />
        </p>

        <h2 className="mt-[clamp(1.25rem,2.2cqw,2.5rem)] -rotate-[8deg] origin-left font-display font-black uppercase italic leading-[0.92] tracking-[-0.03em] text-[clamp(2.8rem,5.4cqw,6.5rem)]">
          <span className="text-grunge block drop-shadow-[0_6px_18px_rgba(0,0,0,.5)]">Qual é o</span>
          <span className="relative block w-fit">
            <span className="text-grunge relative z-10 drop-shadow-[0_6px_18px_rgba(0,0,0,.5)]">Seu Hot?</span>
            {/* Traço de pincel vermelho */}
            <svg
              viewBox="0 0 600 40"
              preserveAspectRatio="none"
              className="absolute -bottom-[0.12em] left-[6%] h-[0.16em] w-[100%] text-pringles-red"
              aria-hidden
            >
              <path d="M2 34 C150 22 360 10 598 2 L596 12 C400 18 210 28 60 38 Z" fill="currentColor" />
            </svg>
          </span>
        </h2>

        <p className="mt-[clamp(1.5rem,2.4cqw,2.75rem)] font-sans leading-snug text-white/95 text-[clamp(1.05rem,1.3cqw,1.55rem)]">
          5 sabores. 5 níveis de picância.
          <br />
          Escolhe o teu favorito.
        </p>

        <a
          href="#pringles-hot"
          className="group mt-[clamp(1.25rem,1.8cqw,2rem)] inline-flex w-fit items-center gap-5 rounded-full border-2 border-white px-8 py-3.5 font-display font-bold uppercase tracking-wider transition hover:bg-white hover:text-black text-[clamp(.8rem,.8cqw,1rem)] lg:px-[1.7cqw] lg:py-[0.9cqw]"
        >
          Explorar sabores
          <ArrowRightIcon className="size-[1.5em] transition group-hover:translate-x-1" />
        </a>

        <div className="mt-[clamp(1.75rem,3.2cqw,3.5rem)] flex items-center gap-3">
          <FlameIcon className="h-[clamp(2rem,2.6cqw,3rem)] w-auto shrink-0 text-pringles-red" />
          <div>
            <p className="font-display font-bold uppercase tracking-wide text-[clamp(.9rem,.9cqw,1.1rem)]">
              Do suave ao insano.
            </p>
            <p className="text-white/85 text-[clamp(.75rem,.72cqw,.9rem)]">Há um HOT para todos.</p>
          </div>
        </div>
      </div>

      {/* Nomes dos sabores sob cada lata */}
      <ul className="flex snap-x gap-6 overflow-x-auto px-5 pt-6 pb-10 lg:contents">
        {HOT_FLAVORS.map((flavor, i) => (
          <li
            key={flavor.name.join(" ")}
            style={{ "--x": flavor.x } as CSSProperties}
            className="flex min-w-28 shrink-0 snap-start flex-col items-center text-center lg:absolute lg:top-[84%] lg:left-[var(--x)] lg:min-w-0 lg:-translate-x-1/2"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`flex flex-col items-center transition ${active === i ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
            >
              <span className="flex h-[1.4em] items-end gap-[1px] text-[clamp(1rem,1.15cqw,1.4rem)] text-pringles-red" aria-label={`Nível de picância ${flavor.level} de 5`}>
                {Array.from({ length: flavor.level }, (_, n) => (
                  <ChiliIcon key={n} className="h-[1em] w-auto" />
                ))}
              </span>
              <span className="mt-1.5 font-display font-extrabold uppercase leading-[1.15] text-[clamp(.85rem,.85cqw,1.05rem)]">
                {flavor.name.map((line) => (
                  <span key={line} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </span>
              <span className="mt-1 text-[clamp(.6rem,.62cqw,.78rem)] uppercase tracking-wider text-white/85">Flavour</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
