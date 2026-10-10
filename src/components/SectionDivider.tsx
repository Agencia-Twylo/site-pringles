type Variant = "wave" | "slant" | "torn" | "swoosh" | "dip";
type Tone = "red" | "dark" | "cream" | "hot";

type SectionDividerProps = {
  /** Forma da transição */
  variant?: Variant;
  /** Cor principal da faixa */
  tone?: Tone;
  /** Espelha na horizontal, para alternar o sentido */
  flip?: boolean;
};

const TONES: Record<Tone, { main: string; back: string; mark: string }> = {
  red: { main: "#e3141c", back: "#8f0a12", mark: "bg-pringles-yellow" },
  dark: { main: "#140707", back: "#e3141c", mark: "bg-pringles-red" },
  cream: { main: "#f3ede6", back: "#e3141c", mark: "bg-pringles-red" },
  // Mesma cor do topo da seção Pringles HOT: a faixa funde-se com ela, sem emenda
  hot: { main: "#0a0000", back: "#e3141c", mark: "" },
};

// Borda rasgada: pontos fixos (sem aleatoriedade) para o servidor e o cliente gerarem o mesmo SVG
function tornEdge(baseY: number, amp: number, seed: number, reverse = false) {
  const pts: string[] = [];
  for (let x = 0; x <= 1440; x += 36) {
    const n = Math.sin(x * 0.013 + seed) * 0.6 + Math.sin(x * 0.071 + seed * 2) * 0.4;
    pts.push(`${x} ${(baseY + n * amp).toFixed(1)}`);
  }
  return (reverse ? pts.reverse() : pts).join(" L ");
}

const SHAPES: Record<Variant, { back: string; main: string; highlight?: string }> = {
  // Onda que desce ao centro (linha vermelha fina por cima da seção de baixo)
  dip: {
    back: "M0 8 C 150 10, 250 30, 400 45 C 520 62, 640 66, 820 64 C 920 62, 980 40, 1100 22 C 1220 8, 1340 6, 1440 6 L 1440 90 L 0 90 Z",
    main: "M0 14 C 150 16, 250 36, 400 51 C 520 68, 640 72, 820 70 C 920 68, 980 46, 1100 28 C 1220 14, 1340 12, 1440 12 L 1440 120 L 0 120 Z",
  },
  // Onda suave e assimétrica
  wave: {
    back: "M0 26 C 260 4, 520 6, 780 34 S 1240 70, 1440 12 L 1440 104 C 1180 116, 940 82, 700 96 S 230 124, 0 100 Z",
    main: "M0 34 C 270 12, 530 16, 790 42 S 1250 74, 1440 22 L 1440 94 C 1170 106, 930 74, 690 88 S 220 112, 0 92 Z",
    highlight: "M0 34 C 270 12, 530 16, 790 42 S 1250 74, 1440 22",
  },
  // Diagonal com leve curvatura (╲)
  slant: {
    back: "M0 0 C 480 4, 980 56, 1440 92 L 1440 120 C 980 92, 480 40, 0 30 Z",
    main: "M0 8 C 480 12, 980 62, 1440 98 L 1440 114 C 980 86, 480 34, 0 24 Z",
    highlight: "M0 8 C 480 12, 980 62, 1440 98",
  },
  // Papel rasgado
  torn: {
    back: `M 0 0 L ${tornEdge(34, 12, 1.3)} L ${tornEdge(98, 10, 4.1, true)} Z`,
    main: `M 0 0 L ${tornEdge(40, 10, 1.3)} L ${tornEdge(90, 9, 4.1, true)} Z`,
  },
  // Faixa fina e escura com um traço vermelho a acompanhar
  swoosh: {
    back: "M0 24 C 360 66, 900 2, 1440 38 L 1440 50 C 900 14, 360 78, 0 36 Z",
    main: "M0 36 C 360 78, 900 14, 1440 50 L 1440 98 C 900 62, 360 120, 0 88 Z",
  },
};

/**
 * Transição entre duas seções: avança alguns pixels sobre a foto de cima e a de baixo,
 * com uma camada de trás (efeito de recorte) e uma pequena assinatura ao centro.
 */
export default function SectionDivider({ variant = "wave", tone = "red", flip = false }: SectionDividerProps) {
  const shape = SHAPES[variant];
  const colors = TONES[tone];

  return (
    <div
      className={`pointer-events-none relative z-20 h-[clamp(3.75rem,5.6cqw,6rem)] ${
        // na onda "dip" a seção de cima tem de ir até ao fundo da curva, por isso o divisor sobe mais
        variant === "dip" ? "-mt-[clamp(3rem,4.5cqw,4.75rem)] -mb-[clamp(.75rem,1.1cqw,1.25rem)]" : "-my-[clamp(1.75rem,2.6cqw,2.75rem)]"
      }`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`absolute inset-x-0 top-0 h-[calc(100%+3px)] w-full ${tone === "hot" ? "" : "drop-shadow-[0_8px_14px_rgba(0,0,0,.35)]"} ${flip ? "-scale-x-100" : ""}`}
      >
        <path d={shape.back} fill={colors.back} />
        <path d={shape.main} fill={colors.main} />
        {shape.highlight && (
          <path
            d={shape.highlight}
            fill="none"
            stroke="rgba(255,255,255,.18)"
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>

      {/* Pequena assinatura central */}
      {tone !== "hot" && (
      <span
        className={`absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 ${
          variant === "swoosh" ? "top-[62%]" : "top-1/2"
        }`}
      >
        <span className={`h-px w-[clamp(1.25rem,2.5cqw,2.5rem)] ${tone === "cream" ? "bg-neutral-900/30" : "bg-white/50"}`} />
        <span className={`size-[clamp(.55rem,.7cqw,.75rem)] rotate-45 ${colors.mark}`} />
        <span className={`h-px w-[clamp(1.25rem,2.5cqw,2.5rem)] ${tone === "cream" ? "bg-neutral-900/30" : "bg-white/50"}`} />
      </span>
      )}
    </div>
  );
}
