"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon, PortugalFlag, SearchIcon, UserIcon } from "./icons";

const NAV_LINKS = [
  { label: "A Nossa Marca", href: "#marca" },
  { label: "Promoções", href: "#promocoes" },
  { label: "Os Nossos Produtos", href: "#produtos" },
  { label: "Contactos", href: "#contactos" },
];

const circleButton =
  "flex size-11 items-center justify-center rounded-full border-2 border-white text-white transition hover:bg-white hover:text-pringles-red";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="hero-header absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between px-5 pt-3 md:px-[5.8%]">
        <Link href="/" aria-label="Pringles - página inicial" className="shrink-0">
          <Image
            src="/images/logo-pringles.png"
            alt="Pringles"
            width={98}
            height={108}
            priority
            unoptimized
            className="h-16 w-auto md:h-[100px]"
          />
        </Link>

        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex items-center gap-6 whitespace-nowrap font-display text-[13px] font-extrabold uppercase tracking-wide text-white xl:gap-12 xl:text-[15px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-pringles-yellow">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button type="button" aria-label="Pesquisar" className={`${circleButton} hidden sm:flex`}>
            <SearchIcon className="size-5" />
          </button>
          <button type="button" aria-label="A minha conta" className={`${circleButton} hidden sm:flex`}>
            <UserIcon className="size-5" />
          </button>
          <button type="button" aria-label="Idioma: Português" className="size-11 rounded-full border-2 border-white p-[3px] transition hover:scale-105">
            <PortugalFlag className="size-full" />
          </button>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`${circleButton} lg:hidden`}
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-5 mt-3 rounded-2xl bg-black/85 p-6 backdrop-blur lg:hidden" aria-label="Menu mobile">
          <ul className="flex flex-col gap-5 font-display text-base font-extrabold uppercase text-white">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
