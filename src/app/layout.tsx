import type { Metadata } from "next";
import { Space_Mono, JetBrains_Mono, Barlow } from "next/font/google";
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

const barlow = Barlow({
  weight: ["800"],
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aitecnologia.xyz"),
  title: "AÍ Tecnologia e Educação — Educational Intelligence Lab",
  description: "A inteligência que destrava o potencial da educação brasileira. Planeja AÍ, Reforça AÍ, Redação Nota 10 AÍ e Alfabetiza AÍ.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://aitecnologia.xyz",
    siteName: "AÍ Tecnologia",
    locale: "pt_BR",
    title: "AÍ Tecnologia e Educação — Educational Intelligence Lab",
    description: "A inteligência que destrava o potencial da educação brasileira.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceMono.variable} ${jetbrainsMono.variable} ${barlow.variable} antialiased bg-black text-text-primary min-h-screen flex flex-col`}>
        <SmoothScroll>
          <div className="bg-noise"></div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
