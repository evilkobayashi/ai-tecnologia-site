"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden flex flex-col items-center justify-start min-h-screen pt-24 px-6 md:px-12">
      {/* Header simplificado lab-style */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          <div className="w-10 h-10 relative overflow-hidden rounded-md border border-border-subtle opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/assets/final-symbol-white.svg" alt="AI Tech" fill className="object-contain p-1" />
          </div>
          <span className="font-mono text-sm tracking-widest uppercase text-text-secondary">AI TECNOLOGIA & EDUCAÇÃO</span>
        </motion.div>
        
        <nav className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase">
          <a href="#imersao" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Imersão</a>
          <a href="#ciencia" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Ciência</a>
          <a href="#contato" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-end pb-24 z-10">
        <div className="flex flex-col gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-xl"
          >
            <p className="font-mono text-lg md:text-xl uppercase tracking-wider text-text-secondary leading-relaxed">
              Transformamos dados educacionais em <span className="text-white bg-white/10 px-1">inteligência aplicada</span> para antecipar resultados antes da execução.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
              EDUCATIONAL <br/> BEHAVIORAL <br/> INFERENCE LAB
            </h1>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 right-0 flex items-center gap-4 font-mono text-xs tracking-widest uppercase text-text-secondary"
        >
          <span>Scroll</span>
          <div className="w-12 h-[1px] bg-border-subtle overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full w-full bg-white"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Section 02 - A Virada */}
      <section id="imersao" className="relative w-full max-w-7xl mx-auto py-32 border-t border-border-subtle flex flex-col gap-16">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-widest text-text-secondary">02</span>
          <div className="flex-1 h-[1px] bg-border-subtle"></div>
          <span className="font-mono text-xs tracking-widest text-text-secondary">O Problema</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-sans font-medium text-white max-w-md leading-tight"
          >
            Toda decisão educacional desencadeia reações no sistema antes de virar nota.
          </motion.h2>
          
          <div className="flex flex-col gap-8 font-mono text-text-secondary text-base md:text-lg leading-relaxed">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Entre o planejamento pedagógico e a execução em sala de aula, há professores, alunos e infraestrutura. Há comportamento.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              A AÍ Tecnologia simula esses cenários para antecipar resultados, mostrando quais métodos e ferramentas têm maior chance de gerar engajamento e retenção de conhecimento.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Footer / CTA simplificado */}
      <section id="contato" className="relative w-full max-w-7xl mx-auto py-32 border-t border-border-subtle flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <div className="w-48 h-16 relative overflow-hidden">
            <Image src="/assets/final-horizontal-white.svg" alt="AI Tech Oficial" fill className="object-contain object-left" />
          </div>
          <h2 className="text-3xl font-sans font-bold text-white">Pronto para simular?</h2>
          <a href="mailto:contato@aitech.xyz" className="inline-flex items-center gap-2 font-mono text-sm tracking-widest text-text-secondary hover:text-white transition-colors mt-4">
            HELLO@AITECH.XYZ <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="font-mono text-xs tracking-widest text-text-secondary flex flex-col items-end gap-4">
          <p>© 2026 AI TECNOLOGIA & EDUCAÇÃO</p>
          <p>LABORATÓRIO DE INFERÊNCIA</p>
        </div>
      </section>
    </main>
  );
}
