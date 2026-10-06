import Image from "next/image";
import { delay } from "@/lib/motion";
import { ArrowRightIcon } from "./icons";

// Fundo: 7-2.png com a curva vermelha da base pintada de creme (a onda do rodapé faz a transição)
export default function NossaMarca() {
  return (
    <section id="marca" className="relative isolate flex flex-col overflow-hidden bg-[#f3ece0] text-neutral-950 lg:block lg:aspect-[2170/725]">
      <div className="relative aspect-[16/9] w-full lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/images/marca-fundo-v2.png"
          alt="Logótipo Pringles com batatas a voar"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-[78%_center] lg:object-center"
        />
      </div>

      {/* "Uma pitada de engenho!" ao lado do logótipo */}
      <p data-reveal="pop" style={delay(400)} className="absolute top-[33%] left-[87.5%] hidden -rotate-[14deg] font-marker uppercase leading-[1] text-pringles-red text-[clamp(1rem,1.45cqw,1.9rem)] lg:block">
        {/* Três riscos de destaque à esquerda da frase */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          className="absolute -top-[0.2em] -left-[2.1em] h-[2em] w-[2em]"
          aria-hidden
        >
          <path d="M8 6 L18 14" />
          <path d="M4 20 L17 21" />
          <path d="M8 34 L18 27" />
        </svg>
        Uma
        <br />
        pitada de
        <br />
        engenho!
        <span className="mt-1.5 block h-[3px] w-[110%] -rotate-3 rounded-full bg-pringles-red" aria-hidden />
      </p>

      {/* Texto */}
      <div className="relative -order-1 flex w-full flex-col justify-center px-5 py-12 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[44%] lg:px-0 lg:py-0 lg:pl-[8%]">
        <p data-reveal="left" className="w-fit -rotate-2 font-display font-bold uppercase tracking-[0.16em] text-neutral-800 text-[clamp(.7rem,.85cqw,1rem)]">
          A nossa marca
        </p>

        <h2 data-reveal="left" style={delay(120)} className="relative mt-1.5 w-fit -rotate-3 origin-left font-marker uppercase leading-[0.95] text-pringles-red text-[clamp(2rem,3.1cqw,4rem)]">
          A história das
          <br />
          Pringles
          <svg
            viewBox="0 0 400 24"
            preserveAspectRatio="none"
            className="absolute -bottom-[0.28em] left-0 h-[0.16em] w-[70%] text-pringles-red"
            aria-hidden
          >
            <path d="M3 16 C110 6 260 4 397 8 L396 14 C260 12 120 16 6 22 Z" fill="currentColor" />
          </svg>
        </h2>

        <p data-reveal="up" style={delay(260)} className="mt-[clamp(1.25rem,1.9cqw,2.25rem)] max-w-[34rem] leading-relaxed text-neutral-700 text-[clamp(.9rem,1.05cqw,1.25rem)]">
          Desde 1968, a Pringles tem vindo a transformar um simples snack num ícone. Descobre como tudo começou e
          porque a Pringles continua a ser única.
        </p>

        <div data-reveal="pop" style={delay(400)} className="mt-[clamp(1.25rem,1.6cqw,2rem)] w-fit">
        <a
          href="#marca"
          className="group inline-flex w-fit items-center gap-5 rounded-full bg-pringles-red px-7 py-3 font-display font-extrabold uppercase tracking-wide text-white shadow-[0_14px_30px_-10px_rgba(227,20,28,.65)] transition hover:bg-neutral-950 text-[clamp(.8rem,.9cqw,1.1rem)]"
        >
          Descobrir a nossa história
          <ArrowRightIcon className="size-[1.3em] transition group-hover:translate-x-1" />
        </a>
        </div>
      </div>
    </section>
  );
}
