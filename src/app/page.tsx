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
        
        <nav className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase text-text-secondary">
          <a href="#produtos" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">01 Produtos</a>
          <a href="#metodo" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">02 Método</a>
          <a href="#contato" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">03 Contato</a>
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
              Transformamos a educação pública e privada através de <span className="text-black bg-white px-1">inteligência aplicada</span> e hardware educacional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
              EDUCATIONAL <br/> INTELLIGENCE <br/> & HARDWARE LAB
            </h1>
          </motion.div>
        </div>

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



      {/* Section 01 - Produtos */}
      <section id="produtos" className="relative w-full max-w-7xl mx-auto py-32 border-t border-border-subtle flex flex-col gap-16">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-widest text-text-secondary">01</span>
          <div className="flex-1 h-[1px] bg-border-subtle"></div>
          <span className="font-mono text-xs tracking-widest text-text-secondary">Produtos & Tecnologias</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border-subtle pt-8">
          {[
            {
              title: "Impressão 3D Educacional",
              desc: "Projetos de hardware, peças e jogos educativos em robótica manufaturados in-house para escolas, integrando o físico e o digital no ensino maker.",
            },
            {
              title: "Reforça AÍ",
              desc: "Tutoria inteligente que se adapta à curva de aprendizado do aluno, oferecendo feedback em tempo real e monitoramento ativo.",
            },
            {
              title: "Planeja AÍ",
              desc: "Motor de inferência para professores construírem planos de aula alinhados à BNCC com eficiência de tempo e alto rigor pedagógico.",
            },
            {
              title: "Alfabetiza AÍ",
              desc: "Sistemas baseados em processamento de linguagem natural focados nos anos iniciais e letramento guiado por IA.",
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 pr-6 md:border-r border-border-subtle last:border-0"
            >
              <h3 className="font-mono text-lg text-white">{item.title}</h3>
              <p className="font-mono text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / CTA simplificado */}
      <section id="contato" className="relative w-full max-w-7xl mx-auto py-32 border-t border-border-subtle flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <div className="w-48 h-16 relative overflow-hidden">
            <Image src="/assets/final-horizontal-white.svg" alt="AI Tech Oficial" fill className="object-contain object-left" />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white max-w-lg">Qual inovação você quer implementar?</h2>
          <a href="mailto:contato@aitech.xyz" className="inline-flex items-center gap-2 font-mono text-sm tracking-widest text-text-secondary hover:text-white transition-colors mt-4">
            HELLO@AITECH.XYZ <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="font-mono text-xs tracking-widest text-text-secondary flex flex-col items-end gap-4 text-right">
          <p>© 2026 AI TECNOLOGIA & EDUCAÇÃO</p>
          <p>EDUCATIONAL INTELLIGENCE LAB</p>
          <div className="mt-8 flex flex-col gap-2">
            <a href="#" className="hover:text-white">TERMOS DE USO</a>
            <a href="#" className="hover:text-white">PRIVACIDADE</a>
          </div>
        </div>
      </section>
    </main>
  );
}
