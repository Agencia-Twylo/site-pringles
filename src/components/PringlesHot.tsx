"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { delay } from "@/lib/motion";
import { ArrowRightIcon, ChiliIcon, FlameIcon } from "./icons";

// `x` = centro horizontal de cada lata na imagem pringles-hot.jpg (em % da largura).
// `level` = malaguetas acesas na lata, numa escala de 1 a 3.
const HOT_FLAVORS = [
  { name: ["Kickin'", "Sour Cream"], level: 1, x: "15.5%" },
  { name: ["Sweet", "Chilli"], level: 1, x: "24.5%" },
  { name: ["Flamin'", "Cheese"], level: 3, x: "34.5%" },
  { name: ["Smokin'", "BBQ Ribs"], level: 2, x: "44.6%" },
  { name: ["Mexican", "Chilli & Lime"], level: 2, x: "53.8%" },
];
const MAX_LEVEL = 3;

export default function PringlesHot() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="pringles-hot"
      className="relative isolate flex flex-col overflow-hidden bg-[#0a0000] text-white lg:block"
    >
      {/* No desktop a foto tem a proporção da imagem e as legendas ficam numa faixa logo abaixo dela */}
      <div className="contents lg:relative lg:block lg:aspect-[3072/1376]">
      {/* Fundo: no mobile fica abaixo do texto; no desktop cobre a seção toda. O topo funde-se
          com a cor da onda de transição (#0a0000) por um degradê, sem emendas */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/images/pringles-hot.jpg"
          alt="As cinco latas Pringles HOT, com a Flamin' Cheese em destaque ao centro, rodeadas de malaguetas, lima, queijo e molhos"
          fill
          sizes="(min-width: 1024px) 100vw, 200vw"
          quality={90}
          className="object-cover object-[5%_center] lg:object-center"
        />
        <div className="absolute inset-x-0 top-0 hidden h-[22%] bg-linear-to-b from-[#0a0000] to-transparent lg:block" />
        {/* A mesa funde-se com a faixa das legendas */}
        <div className="absolute inset-x-0 bottom-0 hidden h-[10%] bg-linear-to-b from-transparent to-[#0a0000] lg:block" />
      </div>

      {/* Conteúdo */}
      <div className="relative -order-1 flex w-full flex-col justify-center px-5 pt-14 pb-10 lg:items-end lg:text-right lg:absolute lg:inset-y-0 lg:right-0 lg:w-[44%] lg:px-0 lg:pt-[3cqw] lg:pb-[6cqw] lg:pr-[8%]">
        <p data-reveal="pop" className="relative w-fit -rotate-12 origin-left font-marker uppercase text-pringles-red text-[clamp(1.4rem,2.2cqw,2.5rem)] leading-none lg:origin-right lg:mr-[1.5cqw]">
          Pringles Hot
          <FlameIcon className="flicker ml-1 inline-block h-[1.1em] w-auto -translate-y-[0.35em]" />
          <span className="absolute -bottom-[0.3em] left-0 h-[0.12em] w-[110%] -rotate-2 rounded-full bg-pringles-red" aria-hidden />
        </p>

        <h2 className="mt-[clamp(1.25rem,2.2cqw,2.5rem)] -rotate-[8deg] origin-left lg:origin-right font-display font-black uppercase italic leading-[0.92] tracking-[-0.03em] text-[clamp(2.5rem,4.6cqw,5.6rem)]">
          <span data-reveal="right" style={delay(120)} className="text-grunge block drop-shadow-[0_6px_18px_rgba(0,0,0,.5)]">Qual é o</span>
          <span data-reveal="right" style={delay(240)} className="text-grunge block drop-shadow-[0_6px_18px_rgba(0,0,0,.5)]">Seu Hot</span>
          <span data-reveal="right" style={delay(360)} className="relative block w-fit lg:ml-auto">
            <span className="text-grunge relative z-10 drop-shadow-[0_6px_18px_rgba(0,0,0,.5)]">Favorito?</span>
            {/* Traço de pincel vermelho */}
            <svg
              viewBox="0 0 600 40"
              preserveAspectRatio="none"
              className="absolute -bottom-[0.12em] left-[6%] h-[0.16em] w-[100%] text-pringles-red lg:right-[2%] lg:left-auto"
              aria-hidden
            >
              <path d="M2 34 C150 22 360 10 598 2 L596 12 C400 18 210 28 60 38 Z" fill="currentColor" />
            </svg>
          </span>
        </h2>

        <p data-reveal="up" style={delay(500)} className="mt-[clamp(1.5rem,2.4cqw,2.75rem)] lg:mt-[clamp(2.5rem,5cqw,5.5rem)] font-sans leading-snug text-white/95 text-[clamp(1.05rem,1.3cqw,1.55rem)]">
          5 sabores. 3 níveis de picância.
          <br />
          Escolhe o teu favorito.
        </p>

        <div data-reveal="pop" style={delay(620)} className="mt-[clamp(1.25rem,1.8cqw,2rem)] w-fit">
        <a
          href="#pringles-hot"
          className="group inline-flex w-fit items-center gap-5 rounded-full border-2 border-white px-8 py-3.5 font-display font-bold uppercase tracking-wider transition hover:bg-white hover:text-black text-[clamp(.8rem,.8cqw,1rem)] lg:px-[1.7cqw] lg:py-[0.9cqw]"
        >
          Explorar sabores
          <ArrowRightIcon className="size-[1.5em] transition group-hover:translate-x-1" />
        </a>
        </div>

        <div data-reveal="up" style={delay(750)} className="mt-[clamp(1.75rem,3.2cqw,3.5rem)] flex items-center gap-3 lg:flex-row-reverse">
          <FlameIcon className="flicker h-[clamp(2rem,2.6cqw,3rem)] w-auto shrink-0 text-pringles-red" />
          <div>
            <p className="font-display font-bold uppercase tracking-wide text-[clamp(.9rem,.9cqw,1.1rem)]">
              Do suave ao insano.
            </p>
            <p className="text-white/85 text-[clamp(.75rem,.72cqw,.9rem)]">Há um HOT para todos.</p>
          </div>
        </div>
      </div>
      </div>

      {/* Nomes dos sabores sob cada lata */}
      <ul className="flex snap-x gap-6 overflow-x-auto px-5 pt-6 pb-10 lg:relative lg:block lg:h-[clamp(6.5rem,8.5cqw,10rem)] lg:overflow-visible lg:p-0">
        {HOT_FLAVORS.map((flavor, i) => (
          <li
            key={flavor.name.join(" ")}
            data-reveal="up"
            style={delay(200 + i * 110, { "--x": flavor.x } as CSSProperties)}
            className="flex min-w-28 shrink-0 snap-start flex-col items-center text-center lg:absolute lg:top-0 lg:left-[var(--x)] lg:min-w-0 lg:-translate-x-1/2"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`flex flex-col items-center transition ${active === i ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
            >
              <span className="flex h-[1.4em] items-end gap-[1px] text-[clamp(1rem,1.15cqw,1.4rem)]" aria-label={`Nível de picância ${flavor.level} de ${MAX_LEVEL}`}>
                {Array.from({ length: MAX_LEVEL }, (_, n) => (
                  <ChiliIcon key={n} className={`h-[1em] w-auto ${n < flavor.level ? "text-pringles-red" : "text-white/25"}`} />
                ))}
              </span>
              <span className="mt-1.5 font-display font-extrabold uppercase leading-[1.15] text-[clamp(.7rem,.85cqw,1.05rem)] max-lg:text-[.85rem]">
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
