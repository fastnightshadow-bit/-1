import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: {
        primary: "rgb(var(--color-background-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-background-secondary) / <alpha-value>)",
      },
      surface: "rgb(var(--color-surface) / <alpha-value>)",
      border: "rgb(var(--color-border) / <alpha-value>)",
      text: {
        primary: "rgb(var(--color-text-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
        muted: "rgb(var(--color-text-muted) / <alpha-value>)",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        display: "var(--font-display)",
        mono: "var(--font-mono)",
      },
      fontSize: {
        small: ["var(--font-size-small)", { lineHeight: "var(--line-height-small)" }],
        body: ["var(--font-size-body)", { lineHeight: "var(--line-height-body)" }],
        subtitle: ["var(--font-size-subtitle)", { lineHeight: "var(--line-height-subtitle)" }],
        "section-title": [
          "var(--font-size-section-title)",
          { lineHeight: "var(--line-height-title)" },
        ],
        "hero-title": ["var(--font-size-hero-title)", { lineHeight: "var(--line-height-hero)" }],
      },
      spacing: {
        0: "0",
        px: "1px",
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        8: "var(--space-8)",
        10: "var(--space-10)",
        12: "var(--space-12)",
        16: "var(--space-16)",
        20: "var(--space-20)",
        24: "var(--space-24)",
        32: "var(--space-32)",
        40: "var(--space-40)",
        48: "var(--space-48)",
        56: "var(--space-56)",
        gutter: "var(--page-gutter)",
        section: "var(--section-space)",
      },
      borderRadius: {
        none: "var(--radius-none)",
        subtle: "var(--radius-subtle)",
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      maxWidth: {
        container: "var(--container-max)",
        content: "var(--content-max)",
        measure: "var(--measure-max)",
      },
      gridTemplateColumns: {
        site: "repeat(var(--grid-columns), minmax(0, 1fr))",
      },
      gap: {
        grid: "var(--grid-gap)",
      },
      boxShadow: {
        none: "var(--shadow-none)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
        "hero-intro": "var(--duration-hero-intro)",
      },
      transitionTimingFunction: {
        cinematic: "var(--ease-cinematic)",
        soft: "var(--ease-soft)",
        fade: "var(--ease-fade)",
      },
      zIndex: {
        base: "var(--z-base)",
        dropdown: "var(--z-dropdown)",
        sticky: "var(--z-sticky)",
        overlay: "var(--z-overlay)",
        modal: "var(--z-modal)",
      },
    },
  },
  plugins: [],
};

export default config;
