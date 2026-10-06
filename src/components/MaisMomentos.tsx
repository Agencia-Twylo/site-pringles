import { delay } from "@/lib/motion";

// Branco do fundo (images/mais-momentos-fundo.png, feita a partir da 1-1-1.png com as batatas reduzidas)
const BG = "#ffffff";

/** Faixa entre a hero e as promoções, com bordas onduladas e fundo de batatas (1-1-1.png). */
export default function MaisMomentos() {
  return (
    <section aria-labelledby="mais-momentos" className="relative z-20 -mt-[clamp(2.5rem,4.5cqw,5rem)] text-neutral-950">
      {/* Onda de cima: entra por cima da base da hero */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[clamp(2.5rem,4.5cqw,5rem)] w-full" aria-hidden>
        <path d="M0 52 C 240 18, 470 10, 720 34 S 1200 70, 1440 22 L 1440 80 L 0 80 Z" fill={BG} />
      </svg>

      <div
        className="relative -mt-px flex flex-col items-center justify-center bg-white bg-[length:100%_auto] bg-top bg-no-repeat px-5 py-10 text-center sm:aspect-[2169/430] sm:py-0"
        style={{ backgroundImage: "url(/images/mais-momentos-fundo.png)" }}
      >
        <h2
          id="mais-momentos"
          data-reveal="pop"
          className="relative mx-auto w-fit -rotate-3 font-marker uppercase leading-[0.95] text-[clamp(2rem,3.6cqw,4.25rem)]"
        >
          Mais sabor.
          <br />
          <span className="pl-[0.6em]">Mais momentos.</span>
        </h2>
        <p data-reveal="up" style={delay(250)} className="relative mt-[clamp(.75rem,1.2cqw,1.5rem)] -rotate-2 text-neutral-700 text-[clamp(.95rem,1.15cqw,1.4rem)]">
          Descobre o que está a acontecer na Pringles.
        </p>
        <span data-reveal="grow" style={delay(450)} className="relative mx-auto mt-3 block h-1 w-14 -rotate-3 rounded-full bg-pringles-red" aria-hidden />
      </div>

      {/* Onda de baixo: cai por cima do topo da seção seguinte */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="relative -mt-px -mb-[clamp(2.5rem,4.5cqw,5rem)] block h-[clamp(2.5rem,4.5cqw,5rem)] w-full"
        aria-hidden
      >
        <path d="M0 0 L 1440 0 L 1440 30 C 1180 68, 900 70, 660 44 S 210 8, 0 46 Z" fill={BG} />
      </svg>
    </section>
  );
}
