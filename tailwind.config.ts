import type { Config } from "tailwindcss"

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            "blue-gray": {
               900: "#101828",
               800: "#1D2939",
               600: "#475467",
               500: "#667085",
               300: "#D0D5DD",
               white: "#FFFFFF",
            },
            "arctic-blue": {
               600: "#253BFF",
            },
            "lime-green": {
               400: "#9FF443",
            },
         },
         fontFamily: {
            primary: "var(--font-primary)",
         },
      },
   },
   plugins: [],
}
export default config
