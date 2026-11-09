import type { Metadata } from "next";
import { Instrument_Sans, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600"],
  variable: "--font-sans-ui",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  weight: ["400", "500"],
  variable: "--font-display-serif",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  variable: "--font-mono-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aitecnologia.xyz"),
  title: "AÍ Tecnologia e Educação — Inteligência Pedagógica para Escolas",
  description:
    "Ecossistema pedagógico alinhado à BNCC para redes públicas e escolas privadas: Planeja AÍ, Reforça AÍ, Redação Nota 10 AÍ e Alfabetiza AÍ.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icon.svg",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.aitecnologia.xyz",
    siteName: "AÍ Tecnologia",
    locale: "pt_BR",
    title: "AÍ Tecnologia e Educação — Inteligência Pedagógica para Escolas",
    description:
      "Ecossistema pedagógico alinhado à BNCC para redes públicas e escolas privadas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${instrumentSans.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased bg-page text-text-primary min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
