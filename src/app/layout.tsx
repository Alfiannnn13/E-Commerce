import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PolosinId",
  description: "A complete e-commerce application with Next.js",
  icons:{
    icon:["/favicon.ico?v=4"],
    apple:["/apple-touch-icon.png?v=4"],
    shortcut:["/apple-touch-icon.png?v=4"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
        <Navbar/>
        {children}
        <Footer/>
        </WixClientContextProvider>
        </body>
    </html>
  );
}
