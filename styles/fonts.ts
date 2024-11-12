import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "500", "700"],
  variable: '--font-poppins'
});
