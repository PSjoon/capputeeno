import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Saira_Stencil_One: ["Saira Stencil One", "sans-serif"],
      },
      colors: {
        white: {
          50: "#FFFFFF",
          100: "#f6f6f9",
          300: "#f3f5f6",
          400: "#E9E9F0",
          900: "#DCE2E5",
        },

        gray: {
          50: "#737380",
          100: "#41414D",
        },

        orange: {
          50: "#FFA585",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
export default config
