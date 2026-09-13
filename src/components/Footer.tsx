import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-20 pb-10 px-6 border-t border-primary-900/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="font-bold text-2xl tracking-tight">
            A<span className="text-primary-400">Í</span> Tecnologia
          </div>
          <p className="text-primary-400/80 text-sm leading-relaxed max-w-xs">
            A inteligência que destrava o potencial da educação brasileira. Tecnologia de ponta, preço justo e muito calor humano.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Soluções</h4>
          <Link href="#alfabetiza" className="text-primary-400/80 hover:text-white transition-colors text-sm">Alfabetiza AÍ</Link>
          <Link href="#reforca" className="text-primary-400/80 hover:text-white transition-colors text-sm">Reforça AÍ</Link>
          <Link href="#planeja" className="text-primary-400/80 hover:text-white transition-colors text-sm">Planeja AÍ</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Institucional</h4>
          <Link href="#manifesto" className="text-primary-400/80 hover:text-white transition-colors text-sm">Nosso Manifesto</Link>
          <Link href="#impacto" className="text-primary-400/80 hover:text-white transition-colors text-sm">Impacto Social</Link>
          <Link href="#carreiras" className="text-primary-400/80 hover:text-white transition-colors text-sm">Trabalhe Conosco</Link>
          <Link href="#contato" className="text-primary-400/80 hover:text-white transition-colors text-sm">Contato B2B</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Social</h4>
          <a href="#" className="flex items-center gap-1 text-primary-400/80 hover:text-white transition-colors text-sm group">
            LinkedIn <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#" className="flex items-center gap-1 text-primary-400/80 hover:text-white transition-colors text-sm group">
            Instagram <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#" className="flex items-center gap-1 text-primary-400/80 hover:text-white transition-colors text-sm group">
            WhatsApp <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-400/60">
        <p>© 2026 Aí Tecnologia e Educação Ltda. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade (LGPD)</Link>
        </div>
      </div>
    </footer>
  );
}
