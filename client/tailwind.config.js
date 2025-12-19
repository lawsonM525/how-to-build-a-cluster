/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--text-primary) / <alpha-value>)",
        secondary: "rgb(var(--text-secondary) / <alpha-value>)",
        bg: {
          primary: "rgb(var(--bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--bg-secondary) / <alpha-value>)",
        },
        border: "rgb(var(--border-primary) / <alpha-value>)",
      },
      backgroundColor: {
        primary: "rgb(var(--bg-primary) / <alpha-value>)",
        secondary: "rgb(var(--bg-secondary) / <alpha-value>)",
      },
      textColor: {
        primary: "rgb(var(--text-primary) / <alpha-value>)",
        secondary: "rgb(var(--text-secondary) / <alpha-value>)",
      },
      borderColor: {
        DEFAULT: "rgb(var(--border-primary) / <alpha-value>)",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace', 'ui-monospace', 'SFMono-Regular'],
        sans: ['"Inter"', 'sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
