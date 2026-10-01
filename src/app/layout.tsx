import type { Metadata } from "next";
import { Space_Mono, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-berkeley-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AÍ Tecnologia e Educação — Simulação & IA",
  description: "A inteligência que destrava o potencial da educação brasileira. Alfabetiza AÍ, Reforça AÍ e Planeja AÍ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceMono.variable} ${jetbrainsMono.variable} antialiased bg-black text-text-primary min-h-screen flex flex-col`}>
        <SmoothScroll>
          <div className="bg-noise"></div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
