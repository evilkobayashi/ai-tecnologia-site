"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, BrainCircuit, LineChart, CheckCircle2, ShieldCheck, HeartHandshake, Zap, Users, MessageSquare, ChevronDown, Send, Shield, Clock, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import FAQ from "@/components/FAQ";
import ComoFunciona from "@/components/ComoFunciona";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <Navbar />

      {/* HERO SECTION WITH AURORA BACKGROUND */}
      <section className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-4 pt-32 pb-20">
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
          className="max-w-5xl mx-auto flex flex-col items-center z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-primary-900/10 backdrop-blur-sm text-sm font-semibold text-primary-900 mb-8 shadow-sm">
            <Sparkles size={16} className="text-primary-600" />
            <span>EducaÃ§Ã£o de Fronteira. PreÃ§o do Brasil Real.</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6">
            A inteligÃªncia que <br className="hidden md:block" />
            <span className="gradient-text bg-gradient-to-r from-primary-600 to-accent-cyan">destrava o potencial</span> <br className="hidden md:block" />
            da educaÃ§Ã£o brasileira.
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
            Nossa holding une o calor humano brasileiro Ã  fronteira da InteligÃªncia Artificial. SoluÃ§Ãµes para estudantes, professores e redes pÃºblicas de ensino.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
            <a href="#ecossistema" className="bg-primary-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-800 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary-900/20 flex items-center justify-center gap-2 group">
              Conhecer SoluÃ§Ãµes
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#manifesto" className="bg-white text-primary-900 border border-border-subtle px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              Assista ao Manifesto
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold ${
                  i === 1 ? "from-indigo-500 to-purple-500" :
                  i === 2 ? "from-cyan-500 to-blue-500" :
                  i === 3 ? "from-emerald-400 to-teal-500" :
                  "from-amber-400 to-orange-500"
                }`}>
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-text-secondary">
              JÃ¡ usado por mais de <strong className="text-primary-900">500 professores</strong> em todo o Brasil.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a 
          href="#ecossistema"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-400 hover:text-primary-600 transition-colors"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={32} />
          </motion.div>
        </motion.a>
      </section>

      {/* ECOSSISTEMA - BENTO GRID */}
      <section id="ecossistema" className="py-24 bg-white px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 md:text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">O Ecossistema AÃ</h2>
              <p className="text-text-secondary md:text-lg max-w-2xl mx-auto">Quatro produtos interdependentes projetados para erradicar a defasagem escolar e devolver a serenidade ao professor.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0.1} direction="up">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-surface-light border border-border-subtle rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:border-accent-amber group overflow-hidden relative cursor-pointer h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-amber/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/80 backdrop-blur-sm border border-border-subtle rounded-full text-xs font-bold text-text-secondary shadow-sm">
                  Em Breve
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-accent-amber/20 flex items-center justify-center mb-6 shadow-sm relative z-10 group-hover:bg-accent-amber/5 transition-colors">
                  <BookOpen className="text-accent-amber" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">Alfabetiza AÃ</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                  IA Voice-First para crianÃ§as, neurodivergentes e EJA. Aprenda a ler conversando, sem precisar saber ler.
                </p>
                <div className="mt-auto pt-4 border-t border-border-subtle/50">
                  <span className="text-accent-amber font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saber mais <ArrowRight size={16} />
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-surface-light border border-border-subtle rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:border-accent-cyan group overflow-hidden relative cursor-pointer h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/80 backdrop-blur-sm border border-border-subtle rounded-full text-xs font-bold text-text-secondary shadow-sm">
                  LanÃ§amento 2026
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-accent-cyan/20 flex items-center justify-center mb-6 shadow-sm relative z-10 group-hover:bg-accent-cyan/5 transition-colors">
                  <BrainCircuit className="text-accent-cyan" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">ReforÃ§a AÃ</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                  Tutor SocrÃ¡tico Gamificado (1Âº ao MÃ©dio). Tira foto do caderno e ensina sem dar a resposta pronta. (+500 Aura)
                </p>
                <div className="mt-auto pt-4 border-t border-border-subtle/50">
                  <span className="text-accent-cyan font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saber mais <ArrowRight size={16} />
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="up">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-surface-light border border-border-subtle rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:border-accent-emerald group overflow-hidden relative h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-emerald/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="absolute top-6 right-6 px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-full text-xs font-bold text-emerald-700 shadow-sm animate-pulse">
                  Ao Vivo
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-accent-emerald/20 flex items-center justify-center mb-6 shadow-sm relative z-10 group-hover:bg-accent-emerald/5 transition-colors">
                  <LineChart className="text-accent-emerald" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">Planeja AÃ</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                  Co-piloto do educador. Gere planos de aula completos alinhados Ã  BNCC e atividades AEE/PEI em menos de 60 segundos.
                </p>
                <div className="mt-auto pt-4 border-t border-border-subtle/50">
                  <a href="https://planejaai.xyz" target="_blank" rel="noopener noreferrer" className="text-accent-emerald font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Acessar Plataforma <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="up">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-surface-light border border-border-subtle rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:border-red-600 group overflow-hidden relative cursor-pointer h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="absolute top-6 right-6 px-3 py-1 bg-red-100 border border-red-200 rounded-full text-xs font-bold text-red-700 shadow-sm animate-pulse">
                  Ao Vivo
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-red-600/20 flex items-center justify-center mb-6 shadow-sm relative z-10 group-hover:bg-red-600/5 transition-colors">
                  <PenTool className="text-red-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">RedaÃ§Ã£o Nota 10 AÃ</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                  Corretor automÃ¡tico de redaÃ§Ãµes nos padrÃµes do ENEM. Envie seu texto, receba feedback detalhado, competÃªncia por competÃªncia, e evolua instantaneamente.
                </p>
                <div className="mt-auto pt-4 border-t border-border-subtle/50">
                  <a href="https://redacao-nota-10-ia.vercel.app" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Acessar Plataforma <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <ComoFunciona />

      {/* MANIFESTO SECTION */}
      <section id="manifesto" className="py-24 bg-surface-light px-6 border-y border-border-subtle scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-900 font-semibold mb-6">
              <HeartHandshake size={18} /> Nosso Manifesto
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
              Democratizar a inteligÃªncia artificial <br className="hidden md:block"/> para o Brasil real.
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-16 max-w-3xl mx-auto">
              Acreditamos que a tecnologia mais avanÃ§ada do mundo nÃ£o deve ser um luxo. Ela deve ser a ferramenta definitiva para que cada crianÃ§a aprenda no seu ritmo e cada professor recupere sua qualidade de vida. Nossos 4 pilares:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-sm h-full hover:border-primary-200 transition-colors">
                <div className="w-12 h-12 bg-indigo-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap size={24} />
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-3">Zero HumilhaÃ§Ã£o PedagÃ³gica</h4>
                <p className="text-text-secondary">O aluno nunca Ã© exposto ao erro na frente da turma. A IA atua com acolhimento radical, permitindo que o estudante erre em um ambiente seguro atÃ© atingir a maestria.</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-sm h-full hover:border-primary-200 transition-colors">
                <div className="w-12 h-12 bg-indigo-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-3">PreÃ§o do Brasil Real</h4>
                <p className="text-text-secondary">Se nÃ£o couber no orÃ§amento de uma famÃ­lia trabalhadora brasileira, nÃ³s nÃ£o faremos. Escalamos o software para que o acesso custe menos que um lanche na cantina.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-sm h-full hover:border-primary-200 transition-colors">
                <div className="w-12 h-12 bg-indigo-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Clock size={24} />
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-3">Tecnologia que Devolve Tempo</h4>
                <p className="text-text-secondary">O professor nÃ£o deveria passar o domingo preenchendo planilhas. Nossa IA assume a burocracia para que o educador volte a focar na relaÃ§Ã£o humana.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-sm h-full hover:border-primary-200 transition-colors">
                <div className="w-12 h-12 bg-indigo-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield size={24} />
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-3">Dignidade em Qualquer Idade</h4>
                <p className="text-text-secondary">Desde a crianÃ§a no 1Âº ano atÃ© o adulto no EJA que nunca teve oportunidade escolar: a educaÃ§Ã£o precisa se adaptar ao ritmo de quem aprende, e nÃ£o o contrÃ¡rio.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* IMPACTO SECTION */}
      <section id="impacto" className="py-24 bg-primary-900 text-white px-6 scroll-mt-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <ScrollReveal direction="left">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">ConstruÃ­do com rigor para o Brasil Real.</h2>
                <p className="text-primary-400/90 text-lg mb-10 leading-relaxed max-w-lg">
                  Nossa tecnologia nÃ£o substitui o professor â€” ela devolve o tempo e a dignidade para que o educador foque no que importa: a relaÃ§Ã£o humana dentro de sala de aula.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-4xl font-bold text-accent-cyan mb-2">
                      +<AnimatedCounter target={10000} />
                    </h4>
                    <p className="text-primary-400 text-sm">Planos de aula gerados alinhados Ã  BNCC</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-accent-amber mb-2">
                      <AnimatedCounter target={100} suffix="%" />
                    </h4>
                    <p className="text-primary-400 text-sm">Privacidade LGPD e SeguranÃ§a de Dados</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-accent-emerald mb-2">
                      <AnimatedCounter target={150} suffix="h+" />
                    </h4>
                    <p className="text-primary-400 text-sm">Horas economizadas por professor/mÃªs</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-white mb-2">
                      <AnimatedCounter target={27} />
                    </h4>
                    <p className="text-primary-400 text-sm">Estados brasileiros alcanÃ§ados</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-emerald shrink-0" />
                    <span className="font-medium text-sm md:text-base">Total integraÃ§Ã£o com parÃ¢metros da BNCC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-accent-cyan shrink-0" />
                    <span className="font-medium text-sm md:text-base">AdaptaÃ§Ãµes automÃ¡ticas para AEE e PEI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="text-accent-amber shrink-0" />
                    <span className="font-medium text-sm md:text-base">Suporte multimodal com VisÃ£o Computacional</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:w-1/2 w-full space-y-6">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative hover:bg-white/10 transition-colors">
                  <div className="absolute top-8 right-8 text-primary-400/20">
                    <MessageSquare size={60} />
                  </div>
                  <div className="flex gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center font-bold text-lg shadow-lg shrink-0">MS</div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold">Maria Santos</h4>
                      <p className="text-primary-400 text-sm">Professora da Rede Estadual, SP</p>
                    </div>
                  </div>
                  <p className="text-lg italic text-primary-100 leading-relaxed relative z-10">
                    "O Planeja AÃ me devolveu meus domingos com a famÃ­lia. E ver meus alunos usando o ReforÃ§a AÃ para estudar geometria por vontade prÃ³pria, tentando ganhar 'Aura', foi algo que eu nÃ£o via hÃ¡ 15 anos na minha escola."
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative hover:bg-white/10 transition-colors">
                  <div className="absolute top-8 right-8 text-primary-400/20">
                    <MessageSquare size={60} />
                  </div>
                  <div className="flex gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-blue-500 flex items-center justify-center font-bold text-lg shadow-lg shrink-0">JO</div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold">JoÃ£o Oliveira</h4>
                      <p className="text-primary-400 text-sm">Coordenador PedagÃ³gico, MG</p>
                    </div>
                  </div>
                  <p className="text-lg italic text-primary-100 leading-relaxed relative z-10">
                    "As adaptaÃ§Ãµes do PEI que levÃ¡vamos horas para formatar agora saem prontas e totalmente alinhadas Ã s necessidades clÃ­nicas de cada aluno. A IA deles realmente entende a realidade da escola pÃºblica brasileira."
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CONTATO B2B / B2G */}
      <section id="contato" className="py-24 bg-white px-6 border-t border-border-subtle scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-900 font-semibold mb-6">
              <Users size={18} /> Fale Conosco
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Vamos transformar a educaÃ§Ã£o da sua rede?
            </h2>
            <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
              Oferecemos parcerias institucionais para escolas, prefeituras e secretarias de educaÃ§Ã£o com subsÃ­dios exclusivos e integraÃ§Ã£o direta.
            </p>
          </ScrollReveal>

          <div className="bg-surface-light border border-border-subtle rounded-3xl p-8 md:p-12 shadow-sm text-left flex flex-col md:flex-row gap-12">
            <div className="md:w-5/12">
              <ScrollReveal direction="left">
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Entre em Contato</h3>
                <p className="text-text-secondary mb-8 leading-relaxed">Nossa equipe de consultores educacionais estÃ¡ pronta para desenhar uma implementaÃ§Ã£o sob medida para a sua realidade escolar.</p>
                
                <div className="flex flex-col gap-6">
                  <a href="mailto:contato@aitech.xyz" className="flex items-center gap-4 text-primary-900 hover:text-primary-600 font-medium transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white border border-border-subtle flex items-center justify-center group-hover:border-primary-300 group-hover:shadow-md transition-all">
                      <MessageSquare size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">E-mail corporativo</div>
                      <div className="text-lg">contato@aitech.xyz</div>
                    </div>
                  </a>
                  <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-primary-900 hover:text-green-600 font-medium transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white border border-border-subtle flex items-center justify-center group-hover:border-green-300 group-hover:shadow-md transition-all text-green-600">
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">Atendimento rÃ¡pido</div>
                      <div className="text-lg">WhatsApp Comercial</div>
                    </div>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="md:w-7/12">
              <ScrollReveal direction="right" delay={0.2}>
                <form className="flex flex-col gap-5 bg-white p-6 rounded-2xl border border-border-subtle shadow-sm" onSubmit={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget.querySelector('button');
                  if (btn) {
                    btn.innerHTML = '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando...';
                    setTimeout(() => {
                      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check inline mr-2"><path d="M20 6 9 17l-5-5"/></svg> Mensagem Enviada!';
                      btn.classList.add('bg-green-600', 'hover:bg-green-700');
                      (e.target as HTMLFormElement).reset();
                    }, 1500);
                  }
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Nome completo</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-light focus:bg-white focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Cargo / InstituiÃ§Ã£o</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-light focus:bg-white focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all" placeholder="Ex: Diretor, Esc. Municipal" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">E-mail corporativo</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-light focus:bg-white focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all" placeholder="voce@escola.gov.br" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Mensagem</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-light focus:bg-white focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all resize-none" placeholder="Como podemos ajudar sua rede de ensino?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-900 text-white font-bold py-3.5 rounded-xl hover:bg-primary-800 active:scale-[0.98] transition-all mt-2 flex items-center justify-center gap-2">
                    <Send size={18} /> Enviar Mensagem
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppFab />
    </main>
  );
}

