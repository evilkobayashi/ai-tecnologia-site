"use client";

import { UserPlus, Sparkles, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: UserPlus,
    color: "text-primary-600",
    bg: "bg-primary-100",
    border: "border-primary-200",
    title: "1. Cadastre-se em segundos",
    description: "Crie sua conta gratuita no Planeja AÍ. Sem cartão de crédito, sem burocracia. Professores e gestores podem começar imediatamente.",
  },
  {
    icon: Sparkles,
    color: "text-accent-cyan",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    title: "2. A IA entende seu contexto",
    description: "Informe a série, o componente curricular e os objetivos. Nossa IA cruza com a BNCC e gera conteúdo personalizado em tempo real.",
  },
  {
    icon: Rocket,
    color: "text-accent-emerald",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    title: "3. Transforme sua sala de aula",
    description: "Receba planos de aula, atividades adaptadas e suporte contínuo. Acompanhe o progresso e recupere horas da sua semana.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 bg-white px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Como Funciona</h2>
            <p className="text-text-secondary md:text-lg max-w-2xl mx-auto">
              Comece a usar nossas soluções em menos de 2 minutos. Simples assim.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary-200 via-cyan-200 to-emerald-200" />

          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="flex flex-col items-center text-center relative">
                <div className={`w-16 h-16 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center mb-6 shadow-sm relative z-10`}>
                  <step.icon className={step.color} size={28} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
