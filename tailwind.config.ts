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
               900: "var(--blue-gray-900)",
               800: "var(--blue-gray-800)",
               600: "var(--blue-gray-600)",
               500: "var(--blue-gray-500)",
               300: "var(--blue-gray-300)",
               white: "var(--blue-gray-white)",
            },
            "arctic-blue": {
               600: "var(--arctic-blue-600)",
            },
            "lime-green": {
               400: "var(--lime-green-400)",
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
