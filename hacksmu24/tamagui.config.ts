import { createTamagui } from 'tamagui';

export const config = createTamagui({
  // Customize themes, fonts, sizes, etc.
  themes: {
    light: {
      background: '#fff',
      text: '#000',
    },
    dark: {
      background: '#000',
      text: '#fff',
    },
  },
  shorthands: {
    // Example: margin shorthand
    m: 'margin',
    p: 'padding',
  },
  fonts: {
    heading: {
      family: 'Arial',
      size: {
        1: 24,
        2: 28,
        3: 32,
      },
    },
    body: {
      family: 'Arial',
      size: {
        1: 16,
        2: 18,
      },
    },
  },
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1024 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1440 },
  },
});

export type AppConfig = typeof config;
