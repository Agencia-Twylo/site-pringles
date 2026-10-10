"use client";

import Image from "next/image";
import { createContext, useContext, useState, type ReactNode } from "react";

// Mesma cena com a lata de cada sabor (images/hero-*.jpg alinhadas pixel a pixel com a 1-1.png).
const FLAVORS = [
  { id: "original", name: "Original", src: "/1-1.png", icon: "/images/icone-lata-original.png" },
  { id: "creme-e-cebola", name: "Creme e Cebola", src: "/images/hero-creme-e-cebola.jpg", icon: "/images/icone-lata-cebola.png" },
  { id: "cheddar-e-bacon", name: "Cheddar e Bacon", src: "/images/hero-cheddar-e-bacon.jpg", icon: "/images/icone-lata-cheddar.png" },
  { id: "queijo", name: "Queijo", src: "/images/hero-queijo.jpg", icon: "/images/icone-lata-queijo.png" },
];

const FlavorContext = createContext<[number, (index: number) => void]>([0, () => {}]);

/** Guarda o sabor escolhido na hero, partilhado entre a foto de fundo e os botões de sabor. */
export function HeroFlavorProvider({ children }: { children: ReactNode }) {
  const state = useState(0);
  return <FlavorContext value={state}>{children}</FlavorContext>;
}

/** Foto da hero: as cenas de todos os sabores empilhadas, só a escolhida fica visível. */
export function HeroFlavorImages() {
  const [active] = useContext(FlavorContext);
  return FLAVORS.map((flavor, i) => (
    <Image
      key={flavor.id}
      src={flavor.src}
      alt={i === active ? `Amigos a partilhar uma lata de Pringles ${flavor.name}` : ""}
      aria-hidden={i !== active}
      fill
      priority={i === 0}
      sizes="100vw"
      quality={90}
      className={`object-cover object-[78%_center] transition-opacity duration-700 ease-out md:object-right ${
        i === active ? "opacity-100" : "opacity-0"
      }`}
    />
  ));
}

/** Latas na lateral direita: passar o rato (ou tocar) numa lata troca a foto, e o sabor fica até escolher outro. */
export function HeroFlavorPicker({ className = "" }: { className?: string }) {
  const [active, setActive] = useContext(FlavorContext);
  return (
    <div
      role="radiogroup"
      aria-label="Escolha o sabor"
      className={`flex flex-col items-center gap-2.5 rounded-full bg-black/25 px-2 py-3.5 ring-1 ring-white/15 backdrop-blur-sm md:gap-3 md:px-2.5 md:py-4 ${className}`}
    >
      {FLAVORS.map((flavor, i) => {
        const selected = i === active;
        return (
          <button
            key={flavor.id}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={flavor.name}
            onPointerEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className="group relative flex cursor-pointer justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {/* Brilho a piscar atrás da lata escolhida */}
            {selected && <span className="flavor-glow absolute inset-[-12%_-110%] -z-10 rounded-full bg-pringles-yellow/80 blur-lg" aria-hidden />}
            <Image
              src={flavor.icon}
              alt=""
              width={74}
              height={220}
              className={`h-14 w-auto drop-shadow-[0_4px_8px_rgba(0,0,0,.45)] transition duration-300 md:h-[clamp(4.5rem,10vh,6.25rem)] ${
                selected ? "scale-115 opacity-100" : "opacity-60 group-hover:opacity-100"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
