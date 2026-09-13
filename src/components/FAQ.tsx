"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "O que é a AÍ Tecnologia e Educação?",
    answer: "Somos uma holding brasileira que desenvolve soluções de Inteligência Artificial focadas exclusivamente em educação. Nosso ecossistema inclui o Alfabetiza AÍ (alfabetização por voz), o Reforça AÍ (tutor socrático gamificado) e o Planeja AÍ (copiloto do professor para planos de aula BNCC)."
  },
  {
    question: "Preciso ter conhecimento técnico para usar as soluções?",
    answer: "Absolutamente não. Todas as nossas soluções foram desenhadas pensando em professores e alunos reais, muitos deles em seu primeiro contato com tecnologia. A interface é intuitiva, acessível e funciona até em celulares mais simples."
  },
  {
    question: "As soluções funcionam offline ou precisam de internet?",
    answer: "As soluções precisam de conexão com a internet para acessar nossos modelos de IA. Porém, otimizamos tudo para funcionar bem em conexões lentas (3G) — realidade de muitas escolas brasileiras."
  },
  {
    question: "Qual o custo das soluções para escolas públicas?",
    answer: "Temos programas especiais de subsídio para redes públicas de ensino. Nosso compromisso é que o acesso custe menos que um lanche na cantina. Entre em contato para receber uma proposta personalizada para a sua rede."
  },
  {
    question: "Os dados dos alunos estão seguros?",
    answer: "Sim. Seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados). Dados de menores são tratados com camada extra de proteção, criptografia ponta a ponta e nunca são compartilhados ou vendidos para terceiros."
  },
  {
    question: "Posso testar antes de contratar?",
    answer: "Com certeza! O Planeja AÍ já está disponível para teste gratuito em planejaai.xyz. Para o Reforça AÍ e Alfabetiza AÍ, oferecemos pilotos gratuitos para escolas interessadas."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-surface-light px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Perguntas Frequentes</h2>
            <p className="text-text-secondary md:text-lg">Tire suas dúvidas sobre nossas soluções de IA para educação.</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-text-primary pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} className="text-text-secondary" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
