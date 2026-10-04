import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { ArrowRightIcon } from "./icons";

const PROMO_URL = "https://www.pringles.com/pt/promocao-futebol";

export default function PromoFutebol() {
  return (
    <section
      id="pringles-futebol"
      className="relative isolate flex flex-col overflow-hidden bg-linear-to-br from-[#9a0712] via-[#7c0510] to-[#4a030a] text-white lg:block lg:min-h-[35.3cqw] lg:bg-none"
    >
      {/* Fundo: no desktop cobre a seção toda; no mobile fica abaixo do texto */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/4-1.png"
          alt="Lata Pringles Sour Cream & Onion num estádio de futebol com uma bola e batatas a voar"
          fill
          sizes="(min-width: 1500px) 1440px, 100vw"
          className="object-cover object-[76%_center] lg:object-right"
        />
      </div>

      <div className="relative -order-1 mx-auto flex w-full max-w-[1920px] flex-col justify-center px-5 py-12 lg:min-h-[35.3cqw] lg:px-[3%] lg:py-[2cqw]">
        <Image
          src="/images/logo-pringles.png"
          alt="Pringles"
          width={98}
          height={108}
          unoptimized
          className="h-16 w-auto self-start lg:h-[3.6cqw] lg:max-h-[80px]"
        />

        <div className="mt-6 lg:mt-[1cqw] lg:max-w-[52%]">
          <p className="inline-block -rotate-3 rounded-full border-2 border-pringles-red px-[1.6em] py-[0.55em] font-display font-bold uppercase tracking-[0.12em] text-[clamp(.85rem,1.2cqw,1.45rem)] shadow-[0_0_18px_rgba(227,20,28,.35)]">
            Pringles <span className="mx-1 font-medium">×</span> Futebol
          </p>

          <h2 className="mt-[clamp(.75rem,1.1cqw,1.5rem)] -rotate-3 origin-left font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.6rem,4.6cqw,5.8rem)]">
            <span className="text-grunge block drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]">Ache a bola.</span>
            <span className="text-grunge block text-pringles-red drop-shadow-[0_6px_18px_rgba(0,0,0,.35)]">Ganhe o jogo.</span>
          </h2>

          <p className="mt-[clamp(1rem,1.4cqw,1.75rem)] max-w-[40rem] lg:max-w-[min(40rem,36cqw)] -rotate-3 origin-left font-display font-medium leading-snug text-[clamp(1rem,1.35cqw,1.6rem)]">
            Encontre a Bola de Ouro e concorra a uma experiência futebolística VIP de{" "}
            <strong className="font-extrabold">10.000&nbsp;€*</strong>.
          </p>

          <a
            href={PROMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-[clamp(1.25rem,1.6cqw,2rem)] inline-flex -rotate-3 items-center gap-4 rounded-full bg-pringles-red px-10 py-4 font-display font-extrabold uppercase tracking-wide shadow-[0_10px_28px_rgba(227,20,28,.45)] transition hover:bg-white hover:text-pringles-red text-[clamp(1rem,1.4cqw,1.65rem)] lg:px-[2.4cqw] lg:py-[0.9cqw]"
          >
            Participe agora
            <ArrowRightIcon className="size-[1.3em] transition group-hover:translate-x-1" />
          </a>

          <div className="mt-[clamp(1.25rem,1.6cqw,2rem)] flex items-center gap-6">
            <div className="relative shrink-0">
              <div className="rounded-lg border-2 border-pringles-red bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,.35)]">
                <QRCodeSVG value={PROMO_URL} size={64} level="M" aria-label="Código QR para participar na promoção Pringles Futebol" />
              </div>
              {/* Seta desenhada apontando para o QR */}
              <svg
                viewBox="0 0 60 30"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute -right-16 -bottom-5 h-7 w-14 text-pringles-red"
                aria-hidden
              >
                <path d="M56 8 C44 24 24 26 6 16" />
                <path d="M12 9 L5 16 L14 20" />
              </svg>
            </div>
            <p className="font-display text-sm font-medium leading-snug text-white/95 lg:text-[clamp(.9rem,1.05cqw,1.25rem)]">
              Ou escaneie o QR Code
              <br />
              para participar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
