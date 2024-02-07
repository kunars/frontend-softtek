import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1360px',
    },
    extend: {
      spacing: {
        17: '4.25rem',
        30: '7.5rem',
      },
    },
    colors: {
      grey: {
        100: '#03050F',
        80: '#2B304E',
        60: '#5E6488',
        30: '#CCD1EE',
        10: '#F8F9FF',
        '0': '#FFFFFF',
      },
      neutrals: {
        700: '#141938',
        600: '#7981B2',
        500: '#A9AFD9',
        400: '#D7DBF5',
        200: '#EDEFFC',
        100: '#FAFBFF',
      },
      blue: {
        berry: {
          600: '#4F4FFF',
        },
      },
      feedback: {
        success: {
          300: '#389E0D',
        },
      },
      gree: {
        aqua: {
          400: '#7DF0BA',
        },
      },
      red: '#FF1A1C',
      disabled: '#A9AFD1',
      transparent: 'transparent',
    },
    fontFamily: {
      somona: ['BRSomona', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      'title-40': [
        '2.5rem',
        {
          lineHeight: '3rem',
          letterSpacing: '-0.6px',
        },
      ],
      'title-32': [
        '2rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      'title-28': [
        '1.75rem',
        {
          lineHeight: '2.25rem',
        },
      ],
      'subtitle-14': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.2px',
        },
      ],
      'subtitle-12': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.2px',
        },
      ],
      'body-12': [
        '0.75rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.1px',
        },
      ],
      'headline-9': [
        '1.75rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '-0.2px',
        },
      ],
      'headline-11': [
        '1.5rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.2px',
        },
      ],
      'headline-13': [
        '1.25rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.2px',
        },
      ],
      'headline-16': [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0.2px',
        },
      ],
      'headline-20': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.4px',
        },
      ],
      'headline-21': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.6px',
        },
      ],
      'headline-22': [
        '0.625rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.8px',
        },
      ],
      'comp-20': [
        '1.25rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0.4px',
        },
      ],
      'comp-18': [
        '1.125rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.4px',
        },
      ],
      'comp-16': [
        '1rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.4px',
        },
      ],
      'comp-14': [
        '0.875rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.4px',
        },
      ],
      'comp-12': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.4px',
        },
      ],
      'paragraph-05': [
        '1rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '0.1px',
        },
      ],
      'paragraph-06': [
        '0.875rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0.1px',
        },
      ],
      'paragraph-07': [
        '0.75rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.2px',
        },
      ],
      'button-03': [
        '1.125rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.4px',
        },
      ],
      'special-02': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.4px',
        },
      ],
    },
    backgroundImage: {
      'light-primary': 'linear-gradient(86.01deg, #00F4E2 0%, #00FF7F 100%)',
    },
    boxShadow: {
      '01': '0px 1px 32px 0px #AEACF359',
    },
  },
  plugins: [],
};
export default config;
