import { Ibarra_Real_Nova, Prompt } from "@next/font/google";

export const ibarra = Ibarra_Real_Nova({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["serif"],
});

export const prompt = Prompt({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica, Arial, sans-serif"],
});

export default [ibarra.className, prompt.className].join(" ");
