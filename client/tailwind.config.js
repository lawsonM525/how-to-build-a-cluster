/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base01: "#000000",
        base02: "#003843",
        base03: "#006a7c",
        base04: "#0895ab",
        base05: "#2dbacf",
        base06: "#62d7e9",
        base07: "#a8eff9",
        base08: "#ffffff",
        base09: "#ffa190",
        base0A: "#dcc264",
        base0B: "#9be16e",
        base0C: "#6feda7",
        base0D: "#72deee",
        base0E: "#a2bdff",
        base0F: "#e49dff",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace', 'ui-monospace', 'SFMono-Regular'],
        sans: ['"Inter"', 'sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
