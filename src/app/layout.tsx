import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/universal/Navbar";
import Footer from "@/components/universal/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "afterHours eSports",
    description: "The BEST eSports Organization in North America. <br> https://discord.gg/afterhourscs2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}