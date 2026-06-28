"use client";

import gsap from "gsap";

import { designSystem } from "@/lib/design-system";

let isConfigured = false;

export function getGsap() {
  if (!isConfigured) {
    gsap.defaults({
      duration: designSystem.motion.durations.normal / 1000,
      ease: designSystem.motion.gsapEase.cinematic,
    });

    isConfigured = true;
  }

  return gsap;
}
