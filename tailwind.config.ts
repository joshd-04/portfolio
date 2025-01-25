import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        blink: 'blink 1.5s infinite',
        conic_outline: 'conic_outline 1s linear infinite',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '45%': { opacity: '0' },
          '46%': { opacity: '0' },
          '90%': { opacity: '1' },
        },
        conic_outline: {
          '0%': {
            background: 'conic-gradient(from 0deg, red, blue)',
          },
          '50%': {
            background: 'conic-gradient(from 100deg, blue, red)',
          },
          '100%': {
            background: 'conic-gradient(from 0deg, red, blue)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
