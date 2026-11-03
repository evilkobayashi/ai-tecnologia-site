import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const CONTACT_EMAIL = "contato@aitecnologia.xyz";

export default function Footer() {
  return (
    <footer className="bg-[#efe9df] text-[#1f1b16] border-t border-[rgba(31,27,22,0.08)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[rgba(31,27,22,0.08)]">
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" aria-label="AÍ Tecnologia — página inicial" className="relative w-32 h-8 block">
              <Image
                src="/assets/final-horizontal-black.svg"
                alt="AÍ Tecnologia e Educação"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-[14px] leading-5 text-[#5e554a] max-w-sm">
              Ferramentas de inteligência pedagógica alinhadas à BNCC para redes públicas, escolas particulares e cursinhos no Brasil.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-mono text-[13px] leading-5 text-[#1f1b16] hover:text-[#1d4ed8] transition-colors duration-150 w-fit"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="md:col-span-3 flex flex-col gap-2">
            <p className="text-[12px] leading-4 font-mono text-[#7b7266] mb-2">Ecossistema</p>
            <Link href="/produto/planeja-ai" className="h-8 inline-flex items-center text-[14px] text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150">
              Planeja AÍ
            </Link>
            <Link href="/produto/reforca-ai" className="h-8 inline-flex items-center text-[14px] text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150">
              Reforça AÍ
            </Link>
            <Link href="/produto/redacao-nota-10-ia" className="h-8 inline-flex items-center text-[14px] text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150">
              Redação Nota 10 AÍ
            </Link>
            <Link href="/produto/alfabetiza-ai" className="h-8 inline-flex items-center text-[14px] text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150">
              Alfabetiza AÍ
            </Link>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <p className="text-[12px] leading-4 font-mono text-[#7b7266] mb-2">Navegação</p>
            <Link href="/#imersao" className="h-8 inline-flex items-center text-[14px] text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150">
              Contexto
            </Link>
            <Link href="/#metodo" className="h-8 inline-flex items-center text-[14px] text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150">
              Método
            </Link>
            <Link href="/#contato" className="h-8 inline-flex items-center text-[14px] text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150">
              Contato
            </Link>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <p className="text-[12px] leading-4 font-mono text-[#7b7266] mb-2">Acesso direto</p>
            <a
              href="https://planeja.aitecnologia.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 inline-flex items-center gap-2 text-[14px] text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150"
            >
              <span>Planeja AÍ</span>
              <ArrowUpRight size={16} strokeWidth={1.5} className="text-[#7b7266]" />
            </a>
            <a
              href="https://reforca.aitecnologia.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 inline-flex items-center gap-2 text-[14px] text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150"
            >
              <span>Reforça AÍ</span>
              <ArrowUpRight size={16} strokeWidth={1.5} className="text-[#7b7266]" />
            </a>
            <a
              href="https://redacao.aitecnologia.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 inline-flex items-center gap-2 text-[14px] text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150"
            >
              <span>Redação Nota 10</span>
              <ArrowUpRight size={16} strokeWidth={1.5} className="text-[#7b7266]" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] leading-5 text-[#7b7266]">
          <p>© 2026 AÍ Tecnologia e Educação Ltda</p>
          <div className="flex items-center gap-6">
            <Link href="/termos" className="hover:text-[#1f1b16] transition-colors duration-150">
              Termos de uso
            </Link>
            <Link href="/privacidade" className="hover:text-[#1f1b16] transition-colors duration-150">
              Privacidade e LGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
