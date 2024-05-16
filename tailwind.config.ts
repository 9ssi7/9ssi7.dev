import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        default: "var(--bg-default)",
        secondary: "var(--bg-secondary)",
        third: "var(--bg-third)",
      },
      borderColor: {
        default: "var(--border-color)",
      },
      zIndex: {
        "100": "100",
        "101": "101",
      },
      animation: {
        "in-from-top": "inFromTop 0.35s ease-out",
        "in-from-bottom": "inFromBottom 0.35s ease-out",
        "in-from-left": "inFromLeft 0.35s ease-out",
        "in-from-right": "inFromRight 0.35s ease-out",
        "out-to-top": "outToTop 0.35s ease-out",
        "out-to-bottom": "outToBottom 0.35s ease-out",
        "out-to-left": "outToLeft 0.35s ease-out",
        "out-to-right": "outToRight 0.35s ease-out",
        "fade-in": "fadeIn 0.35s ease-out",
        "fade-out": "fadeOut 0.35s ease-out",
        "fade-in-from-top": "fadeIn 0.35s ease-out, inFromTop 0.35s ease-out",
        "fade-in-from-bottom":
          "fadeIn 0.35s ease-out, inFromBottom 0.35s ease-out",
        "fade-in-from-left": "fadeIn 0.35s ease-out, inFromLeft 0.35s ease-out",
        "fade-in-from-right":
          "fadeIn 0.35s ease-out, inFromRight 0.35s ease-out",
        "fade-out-to-top": "fadeOut 0.35s ease-out, outToTop 0.35s ease-out",
        "fade-out-to-bottom":
          "fadeOut 0.35s ease-out, outToBottom 0.35s ease-out",
        "fade-out-to-left": "fadeOut 0.35s ease-out, outToLeft 0.35s ease-out",
        "fade-out-to-right":
          "fadeOut 0.35s ease-out, outToRight 0.35s ease-out",
      },
      keyframes: {
        inFromTop: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        inFromBottom: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        inFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        inFromRight: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        outToTop: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        outToBottom: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
        outToLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        outToRight: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
