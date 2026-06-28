# Wonderoom Cinematic Threshold Design

## Goal

Create a cinematic opening for Wonderoom that feels like entering a quiet architectural interior, then lands seamlessly on the existing dark Hero composition.

## Sequence

- `0.0s`: deep black screen, no visible interface.
- `0.35s`: a single vertical light line appears in the center, like an architectural slit.
- `0.8s`: the line opens into a narrow interior threshold using the existing `/images/wonderoom-hero.jpg`.
- `1.25s`: a soft sweep of light moves across the aperture, giving the sense of camera and atmosphere.
- `1.7s`: the aperture expands wider and taller while dark edges still frame it as a doorway.
- `2.35s`: the threshold dissolves into the final Hero image without a cut or fade to black.
- `2.8s`: the Hero image settles into a dark, monochrome, cinematic frame.
- `3.05s+`: navigation, title, subtitle, action, and directions reveal slowly through opacity, blur, and vertical movement.

## Visual Rules

The intro must feel like the first shot of an architectural film, not a loader. It stays monochrome, restrained, and quiet. It must not reuse the older pseudo-3D `W` wall concept.

## Technical Rules

Use GSAP and CSS layers only. Keep `prefers-reduced-motion` behavior intact. The animation must not create horizontal overflow on mobile or desktop.
