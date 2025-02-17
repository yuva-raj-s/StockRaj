/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1A1F', // Dark greenish-blue base
          light: '#0F2229',
          dark: '#050D0F'
        },
        secondary: {
          DEFAULT: '#0F2933', // Darker greenish-blue
          light: '#163B4A',
          dark: '#091820'
        },
        accent: {
          DEFAULT: '#00F5D4', // Bright cyan
          light: '#33FBE2',
          dark: '#00C4A8'
        },
        text: {
          primary: '#F8FAFC', // Off-white for main text
          secondary: '#94A3B8', // Subtle gray for secondary text
          accent: '#00F5D4'
        },
        success: '#00F5A0',
        warning: '#FFB86C',
        danger: '#FF5555',
        info: '#8BE9FD'
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #0A1A1F, #0F2933)',
        'gradient-card': 'linear-gradient(135deg, rgba(15, 41, 51, 0.8), rgba(10, 26, 31, 0.8))',
        'gradient-glow': 'linear-gradient(to right, transparent, #00F5D4, transparent)',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.accent.DEFAULT), 0 0 20px theme(colors.accent.DEFAULT)',
        'neon-sm': '0 0 2px theme(colors.accent.DEFAULT), 0 0 10px theme(colors.accent.DEFAULT)',
        'glass': '0 8px 32px 0 rgba(0, 245, 212, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #00F5D4, 0 0 20px #00F5D4' },
          '50%': { boxShadow: '0 0 2px #00F5D4, 0 0 10px #00F5D4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: []
};