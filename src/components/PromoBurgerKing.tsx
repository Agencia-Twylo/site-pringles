import Image from "next/image";
import { delay } from "@/lib/motion";
import { ArrowRightIcon, CrownIcon, PhoneIcon } from "./icons";

const PROMO_URL = "https://www.pringles.com/pt/promocao-burger-king";

export default function PromoBurgerKing() {
  return (
    <section
      id="promocoes"
      className="relative isolate flex flex-col overflow-hidden lg:block bg-linear-to-br from-[#b3000f] via-[#8c0010] to-[#5c0008] text-white lg:min-h-[33.6cqw] lg:bg-none"
    >
      {/* Fundo: no desktop cobre a seção toda; no mobile fica abaixo do texto */}
      <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[2162/727] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/2-2.png"
          alt="Latas Pringles Sour Cream & Onion, Original, Steakhouse e BBQ Ribs numa mesa junto ao mar ao pôr do sol"
          fill
          sizes="100vw"
          quality={90}
          className="parallax-img object-cover object-right"
        />
      </div>

      <div className="-order-1 mx-auto flex w-full max-w-[1920px] flex-col justify-center px-5 py-14 lg:min-h-[33.6cqw] lg:px-[3%] lg:pt-[5.5cqw] lg:pb-[4cqw]">
        <div className="max-w-184 lg:max-w-[40%]">
          <p data-reveal="left" className="w-fit font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/90 text-[clamp(.75rem,1cqw,1.1rem)]">
            Sabor que une
            <span className="mt-1.5 block h-0.5 w-full bg-linear-to-r from-pringles-yellow via-pringles-yellow/70 to-transparent" />
          </p>

          <h2 className="mt-4 font-display font-black uppercase leading-[0.95] tracking-[-0.025em] text-[calc(clamp(2.2rem,3.3cqw,4.4rem)-7px)]">
            <span data-reveal="up" style={delay(100)} className="block drop-shadow-[0_4px_10px_rgba(0,0,0,.25)]">Compra umas</span>
            <span data-reveal="up" style={delay(200)} className="block drop-shadow-[0_4px_10px_rgba(0,0,0,.25)]">Pringles e desfruta</span>
            <span data-reveal="up" style={delay(300)} className="block text-pringles-red drop-shadow-[0_4px_10px_rgba(0,0,0,.25)] [-webkit-text-stroke:1px_rgba(255,255,255,.08)]">
              de um prémio
              <CrownIcon className="float-bob ml-[0.25em] inline-block h-[0.55em] w-auto -translate-y-[0.15em] text-pringles-yellow" />
              <br />
              Burger King<sup className="align-super text-[0.4em]">®</sup>.
            </span>
          </h2>

          <p data-reveal="up" style={delay(450)} className="mt-[clamp(1rem,1.3cqw,1.5rem)] max-w-[36rem] lg:max-w-[min(34rem,30cqw)] text-base font-medium leading-relaxed text-white/95 text-[clamp(1rem,1.15cqw,1.45rem)]">
            Participa com o teu produto Pringles na promoção e descobre qual dos 4 prémios Burger King® te espera.
          </p>

          <div data-reveal="pop" style={delay(600)} className="mt-[clamp(1.25rem,1.8cqw,2.25rem)] w-fit">
          <a
            href={PROMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#141414] px-7 py-3.5 font-display font-extrabold uppercase tracking-wide shadow-[0_12px_30px_rgba(0,0,0,.35)] transition hover:bg-black text-[clamp(.9rem,1cqw,1.2rem)] lg:px-[2cqw] lg:py-[0.9cqw]"
          >
            <PhoneIcon className="size-[1.4em] shrink-0" />
            Sabe mais
            <ArrowRightIcon className="size-[1.3em] text-pringles-yellow transition group-hover:translate-x-1" />
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
