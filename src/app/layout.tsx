import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Music from "@/components/Music";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SRISTI 2023 Website",
  description: "create by SRISTI team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Music />
        <div className={`${inter.className}`}>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
