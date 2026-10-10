"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRightIcon, FacebookIcon, InstagramIcon, MailIcon, TikTokIcon, YouTubeIcon } from "./icons";

const COLUMNS = [
  {
    title: "Produtos",
    links: [
      { label: "Todos os produtos", href: "#produtos" },
      { label: "Sabores", href: "#pringles-hot" },
      { label: "Promoções", href: "#promocoes" },
    ],
  },
  {
    title: "Sobre a Pringles",
    links: [
      { label: "A nossa marca", href: "#marca" },
      { label: "História da Pringles", href: "#marca" },
      { label: "Contactos", href: "#contactos" },
    ],
  },
  {
    title: "Ajuda",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Mapa do site", href: "#" },
      { label: "A minha conta", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Avisos legais", href: "#" },
      { label: "Política de privacidade", href: "#" },
      { label: "Termos e condições", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", icon: InstagramIcon },
  { label: "TikTok", icon: TikTokIcon },
  { label: "YouTube", icon: YouTubeIcon },
  { label: "Facebook", icon: FacebookIcon },
];

const BOTTOM_LINKS = ["Privacidade", "Cookies", "Termos"];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  // Ainda sem ligação a um serviço de newsletter: só confirma no ecrã
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <footer id="contactos" className="text-white">
      {/* Faixa da newsletter: continua a seção de cima (vermelho vivo, curva e batatas) */}
      {/* Onda no topo: só a parte vermelha é desenhada, por cima da seção de cima (sem faixa de cor a fazer emenda) */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="pointer-events-none relative z-10 -mt-[clamp(3rem,5.5cqw,6rem)] -mb-px block h-[clamp(3rem,5.5cqw,6rem)] w-full"
        aria-hidden
      >
        <path d="M0 54 C 50 54, 110 53, 190 47 C 330 36, 460 3, 620 3 C 780 3, 920 42, 1080 51 C 1170 55, 1300 57, 1440 56 L1440 60 L0 60 Z" fill="#d8081e" />
      </svg>
      <div className="relative isolate overflow-hidden bg-linear-to-b from-[#d8081e] to-[#b80318]">

      {/* Batatas decorativas nos cantos (sem farelos) */}
      <Image src="/images/rodape-batata-2.png" alt="" width={142} height={184} unoptimized className="pointer-events-none absolute hidden drop-shadow-[0_10px_14px_rgba(0,0,0,.3)] md:block bottom-0 left-0 w-[clamp(4rem,7cqw,7.5rem)] translate-y-[18%]" />
      <Image src="/images/rodape-batata-3.png" alt="" width={168} height={141} unoptimized className="pointer-events-none absolute hidden drop-shadow-[0_10px_14px_rgba(0,0,0,.3)] md:block top-[24%] right-0 w-[clamp(4.5rem,8cqw,8.5rem)]" />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-[8%]">
        <div className="flex flex-col gap-10 pt-[clamp(1.5rem,2.5cqw,2.5rem)] pb-[clamp(2.5rem,3.5cqw,3.5rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="flex shrink-0 items-center gap-6 md:gap-8">
            <Image
              src="/images/logo-pringles.png"
              alt="Pringles"
              width={98}
              height={108}
              unoptimized
              className="h-20 w-auto md:h-28"
            />
            <span className="h-16 w-px bg-white/30 md:h-20" aria-hidden />
            <p className="-rotate-3 whitespace-nowrap font-rounded font-extrabold italic leading-[0.95] text-[clamp(1.6rem,2.1vw,2.4rem)]">
              Sabores que
              <br />
              <span className="pl-[1.1em]">fazem sorrir.</span>
            </p>
          </div>

          <div className="w-full min-w-0 lg:max-w-[44rem]">
            <h2 className="font-rounded text-2xl font-extrabold">Recebe novidades e promoções</h2>
            <p className="mt-1 text-sm text-white/90 md:text-base">
              Fica a par de todas as novidades, sabores e ofertas especiais.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row sm:gap-5">
              <label className="flex flex-1 items-center gap-4 rounded-full border-[1.5px] border-white/80 px-6 py-3.5 transition focus-within:border-white focus-within:bg-white/10">
                <MailIcon className="size-5 shrink-0" />
                <span className="sr-only">O teu email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="O teu email"
                  autoComplete="email"
                  className="w-full bg-transparent text-base text-white placeholder:text-white/85 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-white px-10 py-3.5 font-display text-sm font-extrabold uppercase tracking-wide text-pringles-red shadow-[0_10px_24px_-10px_rgba(0,0,0,.45)] transition hover:bg-pringles-yellow hover:text-neutral-950"
              >
                Subscrever
                <ArrowRightIcon className="size-5 transition group-hover:translate-x-1" />
              </button>
            </form>
            <p role="status" className="mt-2 min-h-5 text-sm font-semibold text-pringles-yellow">
              {subscribed ? "Obrigado! Vais receber as nossas novidades." : ""}
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Rodapé de links: vermelho um pouco mais escuro */}
      <div className="bg-[#a3020f]">
      <div className="mx-auto max-w-[1600px] px-5 md:px-[8%]">
        {/* Colunas de links */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-4 lg:gap-x-10 xl:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:py-14">
          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-rounded text-lg font-extrabold uppercase tracking-wide md:text-xl">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[15px] text-white/95 transition hover:text-pringles-yellow md:text-base">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 md:col-span-4 xl:col-span-1 xl:border-l xl:border-white/30 xl:pl-14">
            <h3 className="font-rounded text-lg font-extrabold uppercase tracking-wide md:text-xl">Segue-nos</h3>
            <ul className="mt-4 flex gap-4">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href="/#hero"
                    aria-label={label}
                    className="flex size-12 items-center justify-center rounded-full bg-white text-pringles-red transition hover:-translate-y-0.5 hover:bg-pringles-yellow hover:text-neutral-950"
                  >
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha final */}
        <div className="flex flex-col gap-4 border-t border-white/20 py-7 text-sm text-white/90 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kellanova / Pringles. Todos os direitos reservados.</p>
          <ul className="flex items-center">
            {BOTTOM_LINKS.map((label, i) => (
              <li key={label} className="flex items-center">
                {i > 0 && <span className="mx-5 h-4 w-px bg-white/50 md:mx-7" aria-hidden />}
                <a href="#" className="transition hover:text-pringles-yellow">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
}
