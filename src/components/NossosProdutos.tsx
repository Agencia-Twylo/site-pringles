import Image from "next/image";
import type { CSSProperties } from "react";
import { delay } from "@/lib/motion";
import { ArrowRightIcon, ChipIcon, LeafIcon, SmileIcon } from "./icons";

const FEATURES = [
  { icon: LeafIcon, label: ["Ingredientes", "de qualidade"] },
  { icon: SmileIcon, label: ["Sabores", "únicos"] },
  { icon: ChipIcon, label: ["Sempre", "crocante"] },
];

// Forma "divertida" (blob orgânico) usada como máscara da foto e como mancha vermelha por trás
const BLOB = "M52 3 C 71 1, 92 9, 97 29 C 102 48, 93 61, 95 76 C 97 93, 79 101, 60 97 C 44 94, 33 100, 18 94 C 3 88, 1 72, 4 57 C 7 44, -1 33, 5 20 C 12 6, 34 4, 52 3 Z";

const BLOB_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="${BLOB}"/></svg>`,
)}")`;

const maskStyle: CSSProperties = {
  maskImage: BLOB_MASK,
  WebkitMaskImage: BLOB_MASK,
  maskSize: "100% 100%",
  WebkitMaskSize: "100% 100%",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
};

export default function NossosProdutos() {
  return (
    <section id="produtos" className="relative overflow-hidden bg-white text-neutral-950">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-16 md:px-[6%] md:py-[clamp(4rem,7cqw,7.5rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-[5%]">
        {/* Foto dentro da forma + "Sabores que fazem sorrir" do lado de fora */}
        <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-[44rem] lg:pl-[8%]">
          {/* Mancha vermelha por trás, ligeiramente rodada */}
          <svg data-reveal="pop" style={delay(150)} viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full translate-x-[4%] translate-y-[5%] rotate-6 text-pringles-red lg:left-[8%] lg:w-[92%]" aria-hidden>
            <path d={BLOB} fill="currentColor" />
          </svg>

          <div data-reveal="zoom" className="relative aspect-[1.15/1] w-full" style={maskStyle}>
            <Image
              src="/6-1.png"
              alt="Mulher a provar uma Pringles ao lado das latas Smokin' BBQ Ribs, Sour Cream & Onion, Original, Paprika e Hot Cheese & Chilli"
              fill
              sizes="(min-width: 1024px) 90vw, 200vw"
              quality={90}
              className="object-cover object-[16%_center]"
            />
          </div>

          {/* Batatas soltas à volta da forma */}
          <Image
            src="/images/batata-1.png"
            alt=""
            width={130}
            height={94}
            unoptimized
            className="float-bob pointer-events-none absolute -top-[4%] right-[2%] w-[clamp(3rem,5cqw,5.5rem)] rotate-12 drop-shadow-[0_10px_12px_rgba(0,0,0,.18)]"
          />
          <Image
            src="/images/batata-2.png"
            alt=""
            width={210}
            height={163}
            unoptimized
            style={delay(900)}
            className="float-bob pointer-events-none absolute -bottom-[6%] right-[14%] w-[clamp(3.5rem,6cqw,6.5rem)] -rotate-[20deg] drop-shadow-[0_10px_12px_rgba(0,0,0,.18)]"
          />

          <div data-reveal="pop" style={delay(500)} className="absolute top-[38%] -left-[2%] hidden -rotate-[16deg] text-center font-marker uppercase leading-[1.05] text-neutral-900 text-[clamp(.95rem,1.25cqw,1.5rem)] lg:block">
            Sabores
            <br />
            que fazem
            <br />
            sorrir
            <svg viewBox="0 0 120 50" className="mx-auto -mt-1 h-[2.2em] w-auto text-pringles-red" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" aria-hidden>
              <path d="M8 12 C40 4 80 2 112 6" />
              <path d="M44 26 a1 1 0 1 0 .1 0M76 24 a1 1 0 1 0 .1 0" strokeWidth={5} />
              <path d="M40 34 C52 46 72 46 84 32" />
            </svg>
          </div>
        </div>

        {/* Texto */}
        <div className="-order-1 lg:order-none">
          <p data-reveal="left" className="w-fit font-display font-bold uppercase tracking-[0.12em] text-neutral-800 text-[clamp(.85rem,1.05cqw,1.25rem)]">
            Os nossos produtos
            <span className="mt-2 block h-[3px] w-8 rounded-full bg-pringles-red" />
          </p>

          <h2 data-reveal="up" style={delay(120)} className="mt-[clamp(1rem,1.4cqw,1.75rem)] font-display font-black uppercase leading-[1.02] tracking-[-0.02em] text-[clamp(2rem,2.45cqw,3.2rem)]">
            Uma lata nova e diferente, o mesmo sabor de fazer crescer{" "}
            <span className="text-pringles-red">água na boca.</span>
          </h2>

          <p data-reveal="up" style={delay(260)} className="mt-[clamp(1rem,1.5cqw,1.75rem)] max-w-[34rem] leading-relaxed text-neutral-700 text-[clamp(.95rem,.95cqw,1.2rem)]">
            Da explosão de sabor das Salt &amp; Vinegar ao tilintar das tuas papilas gustativas com as Sour Cream &amp;
            Onion, descobre o teu sabor favorito para momentos perfeitos Pringles.
          </p>

          <div data-reveal="pop" style={delay(400)} className="mt-[clamp(1.5rem,2cqw,2.5rem)] w-fit">
          <a
            href="#pringles-hot"
            className="group inline-flex w-fit items-center gap-8 rounded-full bg-pringles-red px-8 py-4 font-display font-extrabold uppercase tracking-wide text-white shadow-[0_12px_28px_-8px_rgba(227,20,28,.6)] transition hover:bg-neutral-950 text-[clamp(.95rem,1cqw,1.2rem)] lg:px-[1.9cqw] lg:py-[1cqw]"
          >
            Explorar sabores
            <ArrowRightIcon className="size-[1.4em] transition group-hover:translate-x-1" />
          </a>
          </div>

          <ul className="mt-[clamp(1.75rem,2.6cqw,3.25rem)] grid max-w-[24rem] grid-cols-3 gap-4 lg:-ml-3">
            {FEATURES.map(({ icon: Icon, label }, i) => (
              <li key={label.join(" ")} data-reveal="pop" style={delay(550 + i * 120)} className="flex flex-col items-center text-center">
                <span className="flex size-[clamp(2.6rem,2.4cqw,3.2rem)] items-center justify-center rounded-full border-[1.5px] border-neutral-800">
                  <Icon className="size-[60%]" />
                </span>
                <span className="mt-2 font-display font-bold uppercase leading-tight tracking-wide text-neutral-800 text-[clamp(.65rem,.65cqw,.8rem)]">
                  {label[0]}
                  <br />
                  {label[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
