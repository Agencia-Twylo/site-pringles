import Image from "next/image";
import { ArrowRightIcon, SunIcon } from "./icons";

export default function PromoVerao() {
  return (
    <section
      id="passatempo-verao"
      className="relative isolate flex flex-col overflow-hidden bg-[#b20312] text-white lg:block lg:min-h-[39.6cqw]"
    >
      {/* Fundo: no desktop cobre a seção toda; no mobile fica abaixo do texto */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/3-1.png"
          alt="Amigos numa festa de praia ao pôr do sol com uma lata de Pringles Original"
          fill
          sizes="(min-width: 1500px) 1440px, 100vw"
          className="object-cover object-[78%_center] lg:object-left"
        />
      </div>

      <div className="relative -order-1 mx-auto flex w-full max-w-[1920px] flex-col justify-center px-5 py-12 lg:min-h-[39.6cqw] lg:px-[3%] lg:py-[3cqw]">
        <Image
          src="/images/logo-pringles.png"
          alt="Pringles"
          width={98}
          height={108}
          unoptimized
          className="h-16 w-auto self-start lg:absolute lg:top-[2.2cqw] lg:left-[3%] lg:h-[5cqw] lg:max-h-[110px]"
        />

        <div className="mt-8 lg:mt-[4cqw] lg:max-w-[43%]">
          <h2 className="relative font-rounded font-extrabold uppercase leading-[1.02] tracking-[-0.005em] text-[clamp(2.3rem,4.3cqw,5.5rem)]">
            Passatempo de verão a partir de{" "}
            <span className="relative inline-block">
              1 de julho
              {/* Traço amarelo de marcador por baixo */}
              <svg
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute -bottom-[0.18em] -left-[0.05em] h-[0.16em] w-[108%] text-pringles-yellow"
                aria-hidden
              >
                <path d="M2 9 C80 4 200 3 298 5 L297 9 C200 9 90 11 4 13 Z" fill="currentColor" />
              </svg>
            </span>
            {/* Riscos amarelos de destaque */}
            <svg
              viewBox="0 0 80 90"
              className="absolute -top-[0.55em] right-[2%] hidden h-[1.25em] w-auto text-pringles-yellow lg:block"
              fill="none"
              stroke="currentColor"
              strokeWidth={5}
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M30 78 C42 52 56 30 74 6" />
              <path d="M6 44 L10 74" />
              <path d="M44 84 L74 72" />
            </svg>
          </h2>

          <p className="mt-[clamp(1.25rem,2cqw,2.25rem)] max-w-[36rem] font-rounded font-bold leading-[1.25] text-[clamp(1.2rem,2cqw,2.4rem)]">
            A tua oportunidade de ganhar uma Viagem VIP a Ibiza para ti e um amigo!*
          </p>

          <div className="mt-[clamp(1.5rem,2.3cqw,2.75rem)] flex items-center gap-[clamp(1.5rem,4cqw,4.5rem)]">
            <a
              href="#participar"
              className="group inline-flex items-center gap-4 rounded-full bg-[#ffd931] px-10 py-4 font-rounded font-extrabold uppercase text-neutral-900 shadow-[0_10px_24px_rgba(0,0,0,.25)] transition hover:bg-white text-[clamp(1.05rem,1.5cqw,1.75rem)] lg:px-[2.8cqw] lg:py-[1.15cqw]"
            >
              Participar agora
              <ArrowRightIcon className="size-[1.15em] transition group-hover:translate-x-1" />
            </a>
            <SunIcon className="hidden size-[4cqw] max-h-20 max-w-20 text-white sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
