import type Lenis from "lenis";

export const lenisConfig = {
  duration: 1.12,
  easing: (value: number) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
  smoothWheel: true,
  wheelMultiplier: 0.85,
  touchMultiplier: 1.15,
} satisfies ConstructorParameters<typeof Lenis>[0];
