export const designSystem = {
  color: {
    backgroundPrimary: {
      hex: "#0A0A0A",
      css: "rgb(var(--color-background-primary))",
    },
    backgroundSecondary: {
      hex: "#111111",
      css: "rgb(var(--color-background-secondary))",
    },
    surface: {
      hex: "#171717",
      css: "rgb(var(--color-surface))",
    },
    border: {
      hex: "#262626",
      css: "rgb(var(--color-border))",
    },
    textPrimary: {
      hex: "#F5F5F5",
      css: "rgb(var(--color-text-primary))",
    },
    textSecondary: {
      hex: "#A1A1A1",
      css: "rgb(var(--color-text-secondary))",
    },
    textMuted: {
      hex: "#6B6B6B",
      css: "rgb(var(--color-text-muted))",
    },
  },
  typography: {
    recommended: "Geist",
    options: [
      {
        name: "Geist",
        role: "Primary recommendation for Wonderoom: neutral, precise, and architectural.",
      },
      {
        name: "Neue Montreal",
        role: "Editorial alternative with a more gallery-like character.",
      },
      {
        name: "Inter",
        role: "Reliable fallback with excellent readability and broad availability.",
      },
    ],
    family: {
      sans: "var(--font-sans)",
      display: "var(--font-display)",
      mono: "var(--font-mono)",
    },
    size: {
      heroTitle: "var(--font-size-hero-title)",
      sectionTitle: "var(--font-size-section-title)",
      subtitle: "var(--font-size-subtitle)",
      body: "var(--font-size-body)",
      small: "var(--font-size-small)",
    },
    lineHeight: {
      hero: "var(--line-height-hero)",
      title: "var(--line-height-title)",
      subtitle: "var(--line-height-subtitle)",
      body: "var(--line-height-body)",
      small: "var(--line-height-small)",
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
  },
  layout: {
    containerMax: "var(--container-max)",
    contentMax: "var(--content-max)",
    measureMax: "var(--measure-max)",
    pageGutter: "var(--page-gutter)",
    gridColumns: 12,
    gridGap: "var(--grid-gap)",
    sectionSpace: {
      min: "var(--section-space-min)",
      default: "var(--section-space)",
      max: "var(--section-space-max)",
    },
  },
  radius: {
    none: "var(--radius-none)",
    subtle: "var(--radius-subtle)",
    card: "var(--radius-card)",
    pill: "var(--radius-pill)",
  },
  spacing: {
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
  },
  shadow: {
    none: "var(--shadow-none)",
  },
  motion: {
    durations: {
      fast: 300,
      normal: 600,
      slow: 1000,
      heroIntro: 2800,
    },
    easings: {
      cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      fade: "cubic-bezier(0.33, 1, 0.68, 1)",
    },
    framerEase: {
      cinematic: [0.16, 1, 0.3, 1] as const,
      soft: [0.22, 1, 0.36, 1] as const,
      fade: [0.33, 1, 0.68, 1] as const,
    },
    gsapEase: {
      cinematic: "expo.out",
      soft: "power3.out",
      fade: "sine.out",
    },
    reveal: {
      blur: "var(--blur-reveal)",
      scale: "var(--scale-reveal)",
    },
  },
} as const;

export type DesignSystem = typeof designSystem;
