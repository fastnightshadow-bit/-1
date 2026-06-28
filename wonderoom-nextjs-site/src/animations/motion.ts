import type { Transition } from "framer-motion";

import { designSystem } from "@/lib/design-system";

const toFramerEase = (
  ease: readonly [number, number, number, number],
): [number, number, number, number] => [...ease];

export const framerTransition: Transition = {
  duration: designSystem.motion.durations.normal / 1000,
  ease: toFramerEase(designSystem.motion.framerEase.cinematic),
};

export const microInteractionTransition: Transition = {
  duration: designSystem.motion.durations.fast / 1000,
  ease: toFramerEase(designSystem.motion.framerEase.soft),
};
