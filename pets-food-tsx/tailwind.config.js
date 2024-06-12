import fluid, { extract, fontSize } from 'fluid-tailwind';
import reset from 'tw-reset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [reset],
  plugins: [fluid],
  content: {
    files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    extract,
  },
  theme: {
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }) => ({
      defaultScreens: ['20rem', theme('screens.lg')],
      /* biome-ignore lint: <Ignore tailwind config> */
      defaultContainers: [, theme('containers.2xl')],
    }),
    fontSize,
    fontFamily: {
      mono: ['Ubuntu Mono', 'monospace'],
      serif: ['Bree Serif', 'serif'],
      lemon: ['Lemon', 'serif'],
    },
    extend: {},
    screen: {
      mini: '370px',
      // => @media (min-width: 370px) { ... }

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
};
