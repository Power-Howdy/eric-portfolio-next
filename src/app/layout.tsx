import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";


export const metadata: Metadata = {
  title: "Eric Haggerton",
  description: "Fullstack developer",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="wrappper">
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
