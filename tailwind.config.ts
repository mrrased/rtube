import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        textGreenColor: "#0DA487",
        textWhite: "#FFFFFF",
        textBlackColor: "#222222",
        rateColor: "#FFB321",
        priceColor: "#239698",
        discountTextColor: "#4A5568",
        textSmoothgray10: "#e1e1e1",
        grayColor: "#BFBFBF",
      },
      colors: {
        "pink-blue": "#622243",
        "pink-blue-50": "#57112f",
        "pink-black": "#21283f",
        "pink-yellow": "#ffa903",
        "smooth-black": "#21283f",
        "smooth-yellow": "#ffa903",
        "smooth-gray": "#606575",
        "smooth-gray-50": "#e7e8eb",
        "smooth-pink": "#ca96b1",
        "smooth-gray-100": "#606575",
        "smooth-yellow-100": "#cd7e0f",
        "smooth-gray-150": "#eae8e8",
        "smooth-yellow-150": "#ffa903",
        "pink-black-100": "#232b38",
        "smooth-gray-200": "#cecece",
        "smooth-gray-10": "#e1e1e1",
        "smooth-gray-20": "#f2f2f2",
        "smooth-gray-15": "#ebebee",
        "green-custom": "#239698",
        "hover-color": "#47c5ad",
        "bg-gray": "#F8F8F8",
        "text-gray": "#4A5568",
        "green-color": "#0DA487",
        "gray-color": "#9e9e9e",
        "custom-white": "#f7f7f7",
        "custom-white-2": "#ffffff",
        "bg-color-1": "#151515",
        "bg-color-2": "#000000",
        "text-color": "#f4f4f4",
      },
    },
  },
  plugins: [],
} satisfies Config;
