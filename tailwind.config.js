/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    animation: {
      "move-right-left": "moveRightLeft 6s ease-in-out infinite",
      "move-left-right": "moveLeftRight 8s ease-in-out infinite",
      "move-left-right-two": "moveLeftRight 5s ease-in-out infinite",
    },
    keyframes: {
      // Move from right to left and pause
      moveRightLeft: {
        "0%": { transform: "translateX(100%)", opacity: 0 },
        "50%": { transform: "translateX(-50)", opacity: 1 },
        "75%": { transform: "translateX(0)", opacity: 1 }, // Stay in the middle for 2 seconds
        "100%": { transform: "translateX(-100%)", opacity: 0 },
      },
      // Move from left to right and pause
      moveLeftRight: {
        "0%": { transform: "translateX(-100%)", opacity: 0 },
        "50%": { transform: "translateX(0)", opacity: 1 },
        "75%": { transform: "translateX(-50)", opacity: 1 }, // Stay in the middle for 2 seconds
        "100%": { transform: "translateX(100%)", opacity: 0 },
      },
    },

    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate")];
