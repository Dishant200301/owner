import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        inter: ['InterVariable', 'sans-serif'],
        display: ['Georgia', 'serif'],
        body: ['Arial', 'sans-serif'],
      },
      fontSize: {
        h13: '0.8125rem',    // ~13px
        h18: '1.125rem',     // ~18px
        p12: '0.75rem',      // ~12px
        p15: '0.9375rem',    // ~15px
        h20: '1.25rem',      // ~20px
        h28: '1.75rem',      // ~28px
        h36: '2.25rem',      // ~36px
        h44: '2.75rem',      // ~44px
        p44: '2.75rem',      // same as h44
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      colors: {
        'owner-orange': '#E5663A',
        'gray-tag-text': '#6b7280',
        'gray-tag-hover': '#f3f4f6',
        'border-light': '#DEE0E3',
        'bg-hover-light': '#f1f1f2',
        'content-tertiary': '#888',
      },
      spacing: {
        '0.5': '2px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        'padding-global': 'clamp(1rem, 5vw, 4rem)',
        'container-large': '1280px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-pin': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-10px)', opacity: '0.8' },
        },
        'slide-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fillDot': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        'progress-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'pulse-pin': 'pulse-pin 1.5s ease-in-out infinite',
        'slide-fade-in-1': 'slide-fade-in 0.8s ease-out forwards',
        'slide-fade-in-2': 'slide-fade-in 0.8s ease-out forwards 0.2s',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fill-dot': 'fillDot 7s linear forwards',
        'progress-bar': 'progress-bar 5s linear forwards',
        'fade-in-up': 'fade-in-up 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
