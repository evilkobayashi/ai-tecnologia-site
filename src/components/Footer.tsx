"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-20 pb-10 px-6 border-t border-primary-900/10 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4 flex flex-col gap-6">
          <Link href="/" className="inline-block">
            <img 
              src="/assets/logo-ai-dark.jpg" 
              alt="AÍ Tecnologia e Educação" 
              className="h-12 w-auto mix-blend-screen" 
            />
          </Link>
          <p className="text-primary-400/80 text-sm leading-relaxed max-w-sm">
            A inteligência que destrava o potencial da educação brasileira. Tecnologia de ponta, preço justo e muito calor humano.
          </p>
          
          <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter" className="block text-xs font-semibold text-primary-400 mb-2 uppercase tracking-wider">Assine nossa Newsletter</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400" />
                <input 
                  type="email" 
                  id="newsletter" 
                  placeholder="seu@email.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all text-white placeholder:text-primary-400/50"
                />
              </div>
              <button type="submit" className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap">
                Assinar
              </button>
            </div>
          </form>
        </div>
        
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Soluções</h4>
          <a href="#ecossistema" className="text-primary-400/80 hover:text-white transition-colors text-sm">Alfabetiza AÍ</a>
          <a href="#ecossistema" className="text-primary-400/80 hover:text-white transition-colors text-sm">Reforça AÍ</a>
          <a href="#ecossistema" className="text-primary-400/80 hover:text-white transition-colors text-sm">Planeja AÍ</a>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Institucional</h4>
          <a href="#como-funciona" className="text-primary-400/80 hover:text-white transition-colors text-sm">Como Funciona</a>
          <a href="#manifesto" className="text-primary-400/80 hover:text-white transition-colors text-sm">Nosso Manifesto</a>
          <a href="#impacto" className="text-primary-400/80 hover:text-white transition-colors text-sm">Impacto Social</a>
          <a href="#faq" className="text-primary-400/80 hover:text-white transition-colors text-sm">FAQ</a>
        </div>
        
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Contato</h4>
          <a href="#contato" className="text-primary-400/80 hover:text-white transition-colors text-sm">Fale Conosco</a>
          <a href="#contato" className="text-primary-400/80 hover:text-white transition-colors text-sm">Contato B2B / B2G</a>
          <a href="#contato" className="text-primary-400/80 hover:text-white transition-colors text-sm">Trabalhe Conosco</a>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
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

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-primary-400/60 relative">
        <p>© {new Date().getFullYear()} Aí Tecnologia e Educação Ltda. Todos os direitos reservados.</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          <span className="hidden md:inline">•</span>
          <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade (LGPD)</Link>
        </div>
        
        {/* Back to top button */}
        <a 
          href="#" 
          className="absolute -top-16 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors shadow-lg backdrop-blur-sm group"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </footer>
  );
}
