import type { Metadata } from "next";

import "../styles/globals.css";
import { poppinst } from "@/styles/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "4th Data Science Summit 2024",
  description:
    "Data science summit of 2024. Data Science Summit at Daffodil International University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinst.className} antialiased bg-white`}>
        <Navbar />
        <main className="max-w-full mx-auto ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
