"use client";

import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

import { lenisConfig } from "@/lib/scroll";
import { LenisContext } from "@/lib/lenis-context";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis(lenisConfig);
    let frameId = 0;

    const raf = (time: number) => {
      instance.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);
    setLenis(instance);

    return () => {
      window.cancelAnimationFrame(frameId);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  const value = useMemo(() => ({ lenis }), [lenis]);

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
