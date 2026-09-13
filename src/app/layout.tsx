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
  title: "AÍ Tecnologia e Educação — IA para o Brasil Real",
  description: "A inteligência que destrava o potencial da educação brasileira. Alfabetiza AÍ, Reforça AÍ e Planeja AÍ: soluções de IA para estudantes, professores e redes públicas de ensino.",
  keywords: ["IA educação", "inteligência artificial escola", "plano de aula BNCC", "alfabetização IA", "tutor IA", "edtech Brasil", "Planeja AÍ", "Reforça AÍ", "Alfabetiza AÍ"],
  authors: [{ name: "AÍ Tecnologia e Educação" }],
  openGraph: {
    title: "AÍ Tecnologia e Educação — IA para o Brasil Real",
    description: "Soluções de Inteligência Artificial para estudantes, professores e redes públicas. Preço do Brasil Real.",
    url: "https://aitecnologia.com.br",
    siteName: "AÍ Tecnologia e Educação",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AÍ Tecnologia e Educação",
    description: "A inteligência que destrava o potencial da educação brasileira.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AÍ Tecnologia e Educação",
              url: "https://aitecnologia.com.br",
              description: "Holding brasileira de IA focada em educação. Soluções Alfabetiza AÍ, Reforça AÍ e Planeja AÍ.",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contato@aitech.xyz",
                contactType: "sales",
                availableLanguage: "Portuguese",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} antialiased bg-surface-light text-text-primary min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
