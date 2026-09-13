import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aí Tecnologia e Educação",
  description: "A inteligência que destrava o potencial da educação brasileira. Tecnologias como Alfabetiza AÍ, Reforça AÍ e Planeja AÍ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${geistMono.variable} antialiased bg-surface-light text-text-primary min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
