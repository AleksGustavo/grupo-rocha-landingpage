"use client";

import { useEffect, useState } from "react";

/**
 * Retorna `true` quando a media query casa. Começa em `false` no servidor e na
 * primeira renderização do cliente (evita divergência de hidratação) e se
 * ajusta logo após a montagem.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** `true` quando a viewport está no tamanho "mobile" (< 768px). */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

/** `true` quando o usuário pediu menos animação no sistema operacional. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
