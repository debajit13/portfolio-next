import type { Config } from 'tailwindcss';

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: token('bg'),
        surface: token('surface'),
        fg: {
          DEFAULT: token('fg'),
          secondary: token('fg-secondary'),
          tertiary: token('fg-tertiary'),
        },
        line: token('line'),
        accent: {
          DEFAULT: token('accent'),
          fill: token('accent-fill'),
        },
      },
      borderRadius: {
        outer: 'var(--radius-outer)',
        inner: 'var(--radius-inner)',
      },
      maxWidth: {
        page: '68rem',
        prose: '42rem',
      },
    },
  },
  plugins: [],
};
export default config;
