import type { CSSProperties } from "react";

/** Atraso (em ms) de uma animação de entrada — usado para escalonar elementos com `data-reveal`. */
export const delay = (ms: number, style?: CSSProperties) => ({ ...style, "--d": `${ms}ms` }) as CSSProperties;
