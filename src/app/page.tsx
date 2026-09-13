"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, BrainCircuit, LineChart, CheckCircle2, ShieldCheck, HeartHandshake, Zap, Users, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <Navbar />

      {/* HERO SECTION WITH AURORA BACKGROUND */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-24 pb-20">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden -z-10 bg-surface-light">
          <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-accent-cyan/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 md:w-96 h-72 md:h-96 bg-accent-amber/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-primary-900/10 backdrop-blur-sm text-sm font-semibold text-primary-900 mb-8 shadow-sm">
            <Sparkles size={16} className="text-primary-600" />
            <span>Educação de Fronteira. Preço do Brasil Real.</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6">
            A inteligência que <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-cyan">destrava o potencial</span> <br className="hidden md:block" />
            da educação brasileira.
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
            Nossa holding une o calor humano brasileiro à fronteira da Inteligência Artificial. Soluções para estudantes, professores e redes públicas de ensino.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#ecossistema" className="bg-primary-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary-900/20 flex items-center justify-center gap-2 group">
              Conhecer Soluções
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#manifesto" className="bg-white text-primary-900 border border-border-subtle px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              Assista ao Manifesto
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ECOSSISTEMA - BENTO GRID */}
      <section id="ecossistema" className="py-24 bg-white px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">O Ecossistema AÍ</h2>
            <p className="text-text-secondary md:text-lg max-w-2xl mx-auto">Três produtos interdependentes projetados para erradicar a defasagem escolar e devolver a serenidade ao professor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface-light border border-border-subtle rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:border-accent-amber group overflow-hidden relative cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-amber/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-2xl bg-white border border-accent-amber/20 flex items-center justify-center mb-6 shadow-sm">
                <BookOpen className="text-accent-amber" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">Alfabetiza AÍ</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                IA Voice-First para crianças, neurodivergentes e EJA. Aprenda a ler conversando, sem precisar saber ler.
              </p>
              <div className="mt-auto">
                <span className="text-accent-amber font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Em breve <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface-light border border-border-subtle rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:border-accent-cyan group overflow-hidden relative cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-2xl bg-white border border-accent-cyan/20 flex items-center justify-center mb-6 shadow-sm">
                <BrainCircuit className="text-accent-cyan" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">Reforça AÍ</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                Tutor Socrático Gamificado (1º ao Médio). Tira foto do caderno e ensina sem dar a resposta pronta. (+500 Aura)
              </p>
              <div className="mt-auto">
                <span className="text-accent-cyan font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Lançamento 2026 <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface-light border border-border-subtle rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:border-accent-emerald group overflow-hidden relative cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-emerald/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-2xl bg-white border border-accent-emerald/20 flex items-center justify-center mb-6 shadow-sm">
                <LineChart className="text-accent-emerald" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">Planeja AÍ</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                Co-piloto do educador. Gere planos de aula completos alinhados à BNCC e atividades AEE/PEI em menos de 60 segundos.
              </p>
              <div className="mt-auto">
                <a href="https://planejaai.xyz" target="_blank" rel="noopener noreferrer" className="text-accent-emerald font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Acessar Plataforma <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section id="manifesto" className="py-24 bg-surface-light px-6 border-y border-border-subtle scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-900 font-semibold mb-6">
            <HeartHandshake size={18} /> Nosso Manifesto
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
            Democratizar a inteligência artificial <br className="hidden md:block"/> para o Brasil real.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-16">
            Acreditamos que a tecnologia mais avançada do mundo não deve ser um luxo. Ela deve ser a ferramenta definitiva para que cada criança aprenda no seu ritmo e cada professor recupere sua qualidade de vida. Nossos 4 pilares:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-3">Zero Humilhação Pedagógica</h4>
              <p className="text-text-secondary">O aluno nunca é exposto ao erro. A IA atua com acolhimento radical, permitindo que o estudante erre em um ambiente seguro até atingir a maestria.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-3">Preço do Brasil Real</h4>
              <p className="text-text-secondary">Se não couber no orçamento de uma família trabalhadora brasileira, nós não faremos. Escalamos o software para que o acesso custe menos que um lanche na cantina.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-3">Tecnologia que Devolve Tempo</h4>
              <p className="text-text-secondary">O professor não deveria passar o domingo preenchendo planilhas. Nossa IA assume a burocracia para que o educador volte a focar na relação humana.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">4</span>
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-3">Dignidade em Qualquer Idade</h4>
              <p className="text-text-secondary">Desde a criança no 1º ano até o adulto no EJA que nunca teve oportunidade escolar: a educação precisa se adaptar ao ritmo de quem aprende, e não o contrário.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACTO SECTION */}
      <section id="impacto" className="py-24 bg-primary-900 text-white px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Construído com rigor para o Brasil Real.</h2>
              <p className="text-primary-400/90 text-lg mb-10 leading-relaxed">
                Nossa tecnologia não substitui o professor — ela devolve o tempo e a dignidade para que o educador foque no que importa: a relação humana dentro de sala de aula.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-4xl font-bold text-accent-cyan mb-2">+10.000</h4>
                  <p className="text-primary-400 text-sm">Planos de aula gerados alinhados à BNCC</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-accent-amber mb-2">100%</h4>
                  <p className="text-primary-400 text-sm">Privacidade LGPD e Segurança de Dados</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent-emerald" />
                  <span className="font-medium">Total integração com parâmetros da BNCC</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-accent-cyan" />
                  <span className="font-medium">Adaptações automáticas para AEE e PEI</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-accent-amber" />
                  <span className="font-medium">Suporte multimodal com Visão Computacional</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative">
                <div className="absolute top-8 right-8 text-primary-400/20">
                  <MessageSquare size={80} />
                </div>
                <div className="flex gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center font-bold text-xl shadow-lg">M</div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-lg">Maria Santos</h4>
                    <p className="text-primary-400 text-sm">Professora da Rede Estadual, SP</p>
                  </div>
                </div>
                <p className="text-xl italic text-primary-100 leading-relaxed relative z-10">
                  "O Planeja AÍ me devolveu meus domingos com a família. E ver meus alunos usando o Reforça AÍ para estudar geometria por vontade própria, tentando ganhar 'Aura', foi algo que eu não via há 15 anos na minha escola."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO B2B / B2G */}
      <section id="contato" className="py-24 bg-white px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-900 font-semibold mb-6">
            <Users size={18} /> Fale Conosco
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Vamos transformar a educação da sua rede?
          </h2>
          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
            Oferecemos parcerias institucionais para escolas, prefeituras e secretarias de educação com subsídios exclusivos e integração direta.
          </p>

          <div className="bg-surface-light border border-border-subtle rounded-3xl p-8 md:p-12 shadow-sm text-left flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Entre em Contato</h3>
              <p className="text-text-secondary mb-8">Nossa equipe de consultores educacionais está pronta para desenhar uma implementação sob medida para a sua realidade escolar.</p>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:contato@aitech.xyz" className="flex items-center gap-3 text-primary-900 hover:text-primary-600 font-medium transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center">
                    <MessageSquare size={18} />
                  </div>
                  contato@aitech.xyz
                </a>
                <a href="#" className="flex items-center gap-3 text-primary-900 hover:text-primary-600 font-medium transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center text-green-600">
                    <MessageSquare size={18} />
                  </div>
                  WhatsApp Corporativo
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">Nome completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all" placeholder="Como podemos te chamar?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">E-mail corporativo ou institucional</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-white focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all" placeholder="voce@escola.gov.br" />
                </div>
                <button type="submit" className="w-full bg-primary-900 text-white font-bold py-3 rounded-xl hover:bg-primary-800 transition-colors mt-2">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
