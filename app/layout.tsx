import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappBtn from "./components/ui/WhatsappBtn";


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
        <WhatsappBtn />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}