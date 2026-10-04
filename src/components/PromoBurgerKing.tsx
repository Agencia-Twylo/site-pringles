import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { ArrowRightIcon, CrownIcon, PhoneIcon } from "./icons";

const PROMO_URL = "https://www.pringles.com/pt/promocao-burger-king";

export default function PromoBurgerKing() {
  return (
    <section
      id="promocoes"
      className="relative isolate flex flex-col overflow-hidden lg:block bg-linear-to-br from-[#b3000f] via-[#8c0010] to-[#5c0008] text-white lg:min-h-[37.9cqw] lg:bg-none"
    >
      {/* Fundo: no desktop cobre a seção toda; no mobile fica abaixo do texto */}
      <div className="relative aspect-[2036/772] w-full lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/2-1.png"
          alt="Latas Pringles edição Prémio Seguro Burger King: Sour Cream & Onion, Original e Steakhouse"
          fill
          sizes="(min-width: 1500px) 1440px, 100vw"
          className="object-cover object-right"
        />
      </div>

      <div className="-order-1 mx-auto flex w-full max-w-[1920px] flex-col justify-center px-5 py-14 lg:min-h-[37.9cqw] lg:px-[3%] lg:py-[3cqw]">
        <div className="max-w-184 lg:max-w-[42%]">
          <p className="w-fit font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/90 text-[clamp(.75rem,1cqw,1.1rem)]">
            Sabor que vai além do snack
            <span className="mt-1.5 block h-0.5 w-[62%] bg-linear-to-r from-pringles-yellow via-pringles-yellow/70 to-transparent" />
          </p>

          <h2 className="mt-4 font-display font-black uppercase leading-[0.95] tracking-[-0.025em] text-[clamp(2.2rem,3.5cqw,4.6rem)]">
            <span className="block drop-shadow-[0_4px_10px_rgba(0,0,0,.25)]">Compra umas Pringles e desfruta</span>
            <span className="block text-pringles-red drop-shadow-[0_4px_10px_rgba(0,0,0,.25)] [-webkit-text-stroke:1px_rgba(255,255,255,.08)]">
              de um prémio
              <CrownIcon className="ml-[0.25em] inline-block h-[0.55em] w-auto -translate-y-[0.15em] text-pringles-yellow" />
              <br />
              Burger King<sup className="align-super text-[0.4em]">®</sup>!
            </span>
          </h2>

          <p className="mt-[clamp(1rem,1.3cqw,1.5rem)] max-w-[36rem] lg:max-w-[min(36rem,38cqw)] text-base font-medium leading-relaxed text-white/95 text-[clamp(1rem,1.15cqw,1.45rem)]">
            Participa com o teu produto Pringles na promoção e descobre qual dos 4 prémios Burger King® te espera.
          </p>

          <div className="mt-[clamp(1.25rem,1.8cqw,2rem)] flex flex-wrap items-center gap-5">
            <a
              href={PROMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-full bg-[#141414] py-4 pl-7 pr-8 sm:gap-6 sm:py-4 sm:pl-8 sm:pr-10 shadow-[0_12px_30px_rgba(0,0,0,.35)] transition hover:bg-black"
            >
              <PhoneIcon className="size-8 shrink-0 text-white sm:size-10" />
              <span className="font-display text-base font-extrabold uppercase leading-tight lg:text-[clamp(1.1rem,1.25cqw,1.5rem)]">
                Lê o código QR
                <span className="block text-pringles-yellow">para participar</span>
              </span>
              <ArrowRightIcon className="size-6 text-pringles-yellow transition group-hover:translate-x-1" />
            </a>

            <div className="rounded-xl bg-white p-3 shadow-[0_12px_30px_rgba(0,0,0,.3)]">
              <QRCodeSVG value={PROMO_URL} size={86} level="M" aria-label="Código QR para participar na promoção" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
