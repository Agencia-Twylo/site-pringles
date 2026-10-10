import Image from "next/image";
import { delay } from "@/lib/motion";
import { ArrowRightIcon } from "./icons";

const PROMO_URL = "https://www.pringles.com/pt/promocao-futebol";

export default function PromoFutebol() {
  return (
    <section
      id="pringles-futebol"
      className="relative isolate flex flex-col overflow-hidden bg-[#0b1f4a] text-white lg:block lg:aspect-[2014/781]"
    >
      {/* Fundo: no desktop cobre a seção toda; no mobile fica abaixo do texto */}
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src="/4-2.png"
          alt="Lata Pringles Sour Cream & Onion num estádio de futebol com uma bola e confetes"
          fill
          sizes="100vw"
          quality={90}
          className="parallax-img object-cover object-[70%_center] lg:object-center"
        />
        {/* Escurece um pouco a esquerda para o texto ler bem */}
        <div className="absolute inset-0 hidden bg-linear-to-r from-[#061433]/70 via-[#061433]/25 via-40% to-transparent lg:block" />
      </div>

      <div className="relative -order-1 flex w-full flex-col justify-center bg-[#0b1f4a] px-5 py-12 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[46%] lg:bg-transparent lg:px-0 lg:py-0 lg:pl-[8%]">
        <p data-reveal="pop" className="w-fit -rotate-2 rounded-full border-[1.5px] border-pringles-red px-[1.1em] py-[0.35em] font-display font-extrabold uppercase tracking-[0.12em] text-[clamp(.75rem,.95cqw,1.15rem)]">
          Pringles <span className="mx-1 text-pringles-red">·</span> Futebol
        </p>

        <h2 className="mt-[clamp(.6rem,1cqw,1.4rem)] -rotate-2 origin-left font-marker uppercase leading-[1] text-[clamp(2.4rem,4.2cqw,5.3rem)]">
          <span data-reveal="left" style={delay(120)} className="block drop-shadow-[0_6px_18px_rgba(0,0,0,.45)]">Ache a bola.</span>
          <span data-reveal="left" style={delay(260)} className="block text-pringles-red drop-shadow-[0_6px_18px_rgba(0,0,0,.45)]">Ganhe o jogo.</span>
        </h2>

        <p data-reveal="up" style={delay(400)} className="mt-[clamp(1rem,1.5cqw,1.75rem)] max-w-[34rem] font-medium leading-snug text-white/95 text-[clamp(.95rem,1.2cqw,1.45rem)]">
          Encontra a Bola de Ouro e concorre a uma experiência futebolística VIP de{" "}
          <strong className="font-extrabold">10.000&nbsp;€*</strong>.
        </p>

        <div data-reveal="pop" style={delay(550)} className="mt-[clamp(1.25rem,2cqw,2.5rem)] w-fit">
        <a
          href={PROMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-4 rounded-full bg-pringles-red px-8 py-3.5 font-display font-extrabold uppercase tracking-wide shadow-[0_10px_28px_rgba(227,20,28,.45)] transition hover:bg-white hover:text-pringles-red text-[clamp(.85rem,1cqw,1.2rem)] lg:px-[2.2cqw] lg:py-[0.9cqw]"
        >
          Participar agora
          <ArrowRightIcon className="size-[1.3em] transition group-hover:translate-x-1" />
        </a>
        </div>
      </div>
    </section>
  );
}
