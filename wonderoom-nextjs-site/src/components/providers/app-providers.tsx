"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

import { framerTransition } from "@/animations/motion";
import { LenisProvider } from "@/components/providers/lenis-provider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <MotionConfig reducedMotion="user" transition={framerTransition}>
      <LenisProvider>{children}</LenisProvider>
    </MotionConfig>
  );
}
