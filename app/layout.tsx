import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Noto_Sans_JP } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappBtn from "./components/ui/WhatsappBtn";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], display: "swap" });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], display: "swap" });

export const metadata: Metadata = {
  title: "Abalawe online website",
  description: "abalawe online store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${poppins.className} ${notoSansJP.className}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <WhatsappBtn />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}