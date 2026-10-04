import Image from "next/image";
import { ArrowRightIcon, ChipIcon, LeafIcon, SmileIcon } from "./icons";

const FEATURES = [
  { icon: LeafIcon, label: ["Ingredientes", "de qualidade"] },
  { icon: SmileIcon, label: ["Sabores", "únicos"] },
  { icon: ChipIcon, label: ["Sempre", "crocante"] },
];

export default function NossosProdutos() {
  return (
    <section
      id="produtos"
      className="relative isolate flex flex-col overflow-hidden bg-[#efe9e2] text-neutral-950 lg:block lg:aspect-[1855/848]"
    >
      {/* Fundo: no desktop cobre a seção toda; no mobile fica abaixo do texto */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/6-1.png"
          alt="Mulher a provar uma Pringles ao lado das latas Smokin' BBQ Ribs, Sour Cream & Onion, Original, Paprika e Hot Cheese & Chilli"
          fill
          sizes="(min-width: 1500px) 1440px, 100vw"
          className="object-cover object-[30%_center] lg:object-center"
        />
      </div>

      {/* "Sabores que fazem sorrir" manuscrito (lado esquerdo) */}
      <div className="absolute top-[34%] left-[4%] z-10 hidden -rotate-[18deg] text-center font-marker uppercase leading-[1.05] text-neutral-900 text-[clamp(1rem,1.35cqw,1.6rem)] lg:block">
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

      {/* Conteúdo (lado direito) */}
      <div className="relative -order-1 flex w-full flex-col justify-center px-5 py-12 lg:absolute lg:inset-y-0 lg:right-[4.5%] lg:w-[34%] lg:px-0 lg:py-0 lg:pt-[3cqw]">
        <p className="w-fit font-display font-bold uppercase tracking-[0.12em] text-neutral-800 text-[clamp(.85rem,1.05cqw,1.25rem)]">
          Os nossos produtos
          <span className="mt-2 block h-[3px] w-8 rounded-full bg-pringles-red" />
        </p>

        <h2 className="mt-[clamp(1rem,1.4cqw,1.75rem)] font-display font-black uppercase leading-[1.02] tracking-[-0.02em] text-[clamp(2rem,2.45cqw,3.2rem)]">
          Uma lata nova e diferente, o mesmo sabor de fazer crescer{" "}
          <span className="text-pringles-red">água na boca.</span>
        </h2>

        <p className="mt-[clamp(1rem,1.5cqw,1.75rem)] max-w-[34rem] leading-relaxed text-neutral-700 text-[clamp(.95rem,.95cqw,1.2rem)]">
          Da explosão de sabor das Salt &amp; Vinegar ao tilintar das tuas papilas gustativas com as Sour Cream &amp;
          Onion, descobre o teu sabor favorito para momentos perfeitos Pringles.
        </p>

        <a
          href="#pringles-hot"
          className="group mt-[clamp(1.5rem,2cqw,2.5rem)] inline-flex w-fit items-center gap-8 rounded-full bg-pringles-red px-8 py-4 font-display font-extrabold uppercase tracking-wide text-white shadow-[0_12px_28px_-8px_rgba(227,20,28,.6)] transition hover:bg-neutral-950 text-[clamp(.95rem,1cqw,1.2rem)] lg:px-[1.9cqw] lg:py-[1cqw]"
        >
          Explorar sabores
          <ArrowRightIcon className="size-[1.4em] transition group-hover:translate-x-1" />
        </a>

        <ul className="mt-[clamp(1.75rem,2.6cqw,3.25rem)] grid max-w-[24rem] grid-cols-3 gap-4 lg:-ml-3">
          {FEATURES.map(({ icon: Icon, label }) => (
            <li key={label.join(" ")} className="flex flex-col items-center text-center">
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
    </section>
  );
}
