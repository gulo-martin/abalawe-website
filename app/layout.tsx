import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappBtn from "./components/ui/WhatsappBtn";
import TikTokBtn from "./components/ui/TikTokBtn"
import Splash from "./components/Splash";


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
    <html lang="en" className={`h-full `}>
      <head>
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <Splash/>
        <WhatsappBtn />
        {/* <TikTokBtn/> */}

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}