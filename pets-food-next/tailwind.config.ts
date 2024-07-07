import fluid, { extract, fontSize, screens } from 'fluid-tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    // @ts-ignore
    fluid: ({ theme }) => ({
      defaultScreens: ['20rem', theme('screens.lg')],
    }),
    screens,
    fontSize,
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        lemon: ['var(--font-lemon)'],
        mono: ['var(--font-ubuntu-mono)'],
        bree: ['var(--font-bree-serif)'],
      },
    },
  },
  plugins: [fluid],
};
export default config;
