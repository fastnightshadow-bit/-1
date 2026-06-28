"use client";

import { createContext } from "react";
import type Lenis from "lenis";

export type LenisContextValue = {
  lenis: Lenis | null;
};

export const LenisContext = createContext<LenisContextValue>({
  lenis: null,
});
