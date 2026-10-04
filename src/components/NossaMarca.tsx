import Image from "next/image";
import { ArrowRightIcon } from "./icons";

export default function NossaMarca() {
  return (
    <section
      id="marca"
      className="relative isolate flex flex-col overflow-hidden bg-[#f5f1ec] text-neutral-950 lg:block lg:aspect-[2170/725]"
    >
      {/* Fundo: no desktop cobre a seção toda; no mobile fica abaixo do texto */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/7-1.png"
          alt="Rapaz de camisola vermelha com uma Pringles como bigode a segurar o logótipo Pringles"
          fill
          sizes="(min-width: 1500px) 1440px, 100vw"
          className="object-cover object-[68%_center] lg:object-center"
        />
      </div>

      {/* "Uma pitada de engenho!" manuscrito (lado direito) */}
      <p className="absolute top-[34%] right-[13.5%] z-10 hidden -rotate-[14deg] font-hand font-bold leading-[0.95] text-pringles-red text-[clamp(1.6rem,2.3cqw,3rem)] lg:block">
        Uma
        <br />
        pitada de
        <br />
        engenho!
        <span className="mt-2 block h-[3px] w-[110%] -rotate-3 rounded-full bg-pringles-red" aria-hidden />
      </p>

      {/* Conteúdo */}
      <div className="relative -order-1 flex w-full flex-col justify-center px-5 py-12 lg:absolute lg:inset-y-0 lg:left-[16%] lg:w-[31%] lg:px-0 lg:py-0">
        <p className="w-fit -rotate-[5deg] origin-left font-display font-black uppercase tracking-[0.18em] text-neutral-900 text-[clamp(.85rem,1.05cqw,1.35rem)] lg:ml-[2.5cqw]">
          A nossa marca
        </p>

        <h2 className="relative mt-[0.6em] w-fit -rotate-[6deg] whitespace-nowrap origin-left font-marker uppercase leading-[0.95] text-pringles-red text-[clamp(2rem,3.3cqw,4.6rem)]">
          <span className="block">A história das</span>
          <span className="block pl-[0.9em] text-[1.25em]">Pringles</span>
          {/* Traço de pincel por baixo */}
          <svg
            viewBox="0 0 400 24"
            preserveAspectRatio="none"
            className="absolute -bottom-[0.35em] left-[1.1em] h-[0.2em] w-[88%] text-pringles-red"
            aria-hidden
          >
            <path d="M3 16 C110 6 260 4 397 8 L396 14 C260 12 120 16 6 22 Z" fill="currentColor" />
          </svg>
        </h2>

        <p className="mt-[clamp(2rem,3.2cqw,3.75rem)] max-w-[34rem] leading-[1.5] text-neutral-800 text-[clamp(.95rem,.92cqw,1.2rem)]">
          Escapa à rotina de sempre com Pringles. Um snack que te estimula a mente, para além do paladar. Ondas
          perfeitas de sabor hiperbólico e paraboloide, perfeitamente empilhadas em cada lata. Nascidas do acaso.
          Feitas para desfrutar. Com uma pitada de seriedade e resmas de engenho.
        </p>

        <a
          href="#produtos"
          className="group mt-[clamp(1.5rem,2cqw,2.5rem)] inline-flex w-fit items-center gap-6 rounded-full bg-linear-to-b from-[#ec2a33] to-pringles-red px-8 py-4 font-display font-extrabold uppercase tracking-wide text-white shadow-[0_14px_30px_-10px_rgba(227,20,28,.65)] transition hover:from-neutral-900 hover:to-neutral-950 text-[clamp(.95rem,.95cqw,1.2rem)] lg:px-[1.7cqw] lg:py-[1cqw]"
        >
          Descobre os nossos sabores
          <ArrowRightIcon className="size-[1.4em] transition group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
