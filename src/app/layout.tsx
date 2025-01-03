import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";


export const metadata: Metadata = {
  title: "Eric Haggerton",
  description: "Discover the power of Eric's service as a full stack web/blockchain developer and how it can help you achieve your goals.",
  category: "Web Development",
  authors: [{name: "Power-Howdy", url: "https://github.com/Power-Howdy"}],
  classification: "Devfolio",
  applicationName: "Eric Haggerton Portfolio",
  keywords: "web development, nextjs, react, angular, typescript, javascript, nestjs, python, php, express, mongodb, mysql, fullstack developer, frontend developer, backend developer",
  creator: "Power-Howdy",
  icons: "https://eric-portfolio-next.vercel.app/assets/icon.png",
  twitter: { card: "summary_large_image", creator: "@coocoohive", images: "https://eric-portfolio-next.vercel.app/assets/icon.png" }
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
