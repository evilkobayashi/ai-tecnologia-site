"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

const CONTACT_EMAIL = "contato@aitecnologia.xyz";

const NAV = [
  { href: "#imersao", label: "Imersão" },
  { href: "#produtos", label: "Produtos" },
  { href: "#metodo", label: "Método" },
  { href: "#contato", label: "Contato" },
];

const DESAFIOS = [
  ["Tempo do professor", "Horas semanais consumidas por planejamento, correção e burocracia."],
  ["Defasagem de aprendizagem", "Alunos avançando de série sem dominar o essencial."],
  ["Alfabetização", "Crianças que chegam aos anos finais sem ler com fluência."],
  ["Escrita", "Pouco feedback individual sobre redação antes das provas decisivas."],
  ["Personalização", "Uma única aula para trinta ritmos de aprendizagem diferentes."],
];

const PRODUTOS = [
  { slug: "planeja-ai", name: "Planeja AÍ", desc: "Planos de aula alinhados à BNCC e ao currículo municipal em segundos." },
  { slug: "reforca-ai", name: "Reforça AÍ", desc: "Tutor de matemática e lógica que se adapta ao ritmo de cada aluno." },
  { slug: "redacao-nota-10-ia", name: "Redação Nota 10 AÍ", desc: "Correção instantânea de redações nos padrões ENEM, FUVEST e VUNESP." },
  { slug: "alfabetiza-ai", name: "Alfabetiza AÍ", desc: "Letramento guiado por IA para os anos iniciais." },
];

const METODO = [
  ["Diagnóstico", "Mapeamos currículo, rede, série e o contexto real da escola."],
  ["Alinhamento curricular", "Cada saída é ancorada na BNCC e nas diretrizes locais."],
  ["Geração assistida", "A IA produz planos, exercícios e feedback sob medida."],
  ["Mediação humana", "Professor revisa, adapta e decide. A IA não substitui o docente."],
  ["Evolução contínua", "Dados de uso refinam a próxima aula, o próximo exercício, o próximo aluno."],
];

const STATS = [
  ["4", "Produtos", "Ecossistema cobrindo planejamento, reforço, escrita e alfabetização."],
  ["BNCC", "Alinhamento nativo", "Toda geração ancorada na Base Nacional Comum Curricular."],
  ["24/7", "Disponível", "Tutoria e planejamento acessíveis a qualquer hora, em qualquer dispositivo."],
];

function WaveCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const lines = 28;
      for (let i = 0; i < lines; i++) {
        const p = i / lines;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(183,183,183,${0.06 + p * 0.22})`;
        ctx.lineWidth = 1;
        for (let x = 0; x <= w; x += 6) {
          const y =
            h * 0.25 +
            p * h * 0.45 +
            Math.sin(x * 0.004 + t + p * 3) * (30 + p * 60) +
            Math.sin(x * 0.011 - t * 1.3 + i) * 8;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      t += 0.006;
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function Label({ n, children }: { n: string; children: string }) {
  return (
    <div className="flex items-center gap-4 mb-14 font-mono text-xs tracking-[0.14em] text-text-secondary">
      <span>{n}</span>
      <span>{children}</span>
      <span className="flex-1 h-px bg-border-subtle" />
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ContactForm() {
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") || "").trim();
    const email = String(f.get("email") || "").trim();
    const msg = String(f.get("mensagem") || "").trim();
    if (!nome || !/^\S+@\S+\.\S+$/.test(email) || !msg) {
      setError("Preencha nome, email válido e mensagem.");
      return;
    }
    setError("");
    const body = `${msg}\n\n${nome}\n${email}\n${String(f.get("whatsapp") || "")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Contato pelo site - ${nome}`)}&body=${encodeURIComponent(body)}`;
  };

  const input =
    "w-full bg-transparent border-0 border-b border-black/30 py-3 font-mono text-lg normal-case tracking-normal text-black placeholder:text-black/30 focus:outline-none focus:border-black";
  const label = "block mb-2 font-mono text-xs tracking-[0.12em] text-black/50";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <label htmlFor="nome" className={label}>Nome</label>
          <input id="nome" name="nome" required autoComplete="name" className={input} placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={input} placeholder="voce@escola.com.br" />
        </div>
        <div>
          <label htmlFor="whatsapp" className={label}>WhatsApp</label>
          <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" className={input} placeholder="(00) 00000-0000" />
        </div>
        <div className="md:col-span-3">
          <label htmlFor="mensagem" className={label}>Mensagem</label>
          <textarea id="mensagem" name="mensagem" required rows={3} className={`${input} resize-y`} placeholder="Conte sobre sua escola ou rede" />
        </div>
      </div>
      <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6">
        <button type="submit" className="rounded-full bg-black text-[#f2efe9] px-12 py-4 font-mono text-sm tracking-[0.1em] hover:opacity-80 transition-opacity">
          Entre em contato
        </button>
        <p role="alert" className="font-mono text-sm tracking-[0.06em] text-[#a25b4c]">{error}</p>
      </div>
    </form>
  );
}

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="flex items-start justify-between gap-8 px-6 md:px-12 py-6 md:py-8">
          <Link href="/" aria-label="AÍ Tecnologia — início" className="relative block w-36 h-10 shrink-0">
            <Image src="/assets/final-horizontal-white.svg" alt="AÍ Tecnologia" fill priority className="object-contain object-left" />
          </Link>
          <nav aria-label="Principal" className="hidden md:flex gap-10 pt-2">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="group relative font-mono text-sm tracking-[0.1em] text-white">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <p className="hidden lg:block font-mono text-sm leading-relaxed text-right normal-case tracking-normal text-[#B7B7B7]">
            Planejamos aulas.<br />Reforçamos o aprendizado.<br />Alfabetizamos com IA.
          </p>
          <a href="#contato" className="md:hidden pt-2 font-mono text-sm tracking-[0.1em] text-white">Contato</a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative h-screen min-h-[560px] flex flex-col justify-end px-6 md:px-12 pb-8 md:pb-12">
        <WaveCanvas />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative max-w-4xl mb-10 font-mono text-lg md:text-2xl leading-snug text-[#B7B7B7]"
        >
          Transformamos dados educacionais em <span className="bg-[#f2efe9] text-black px-1">inteligência pedagógica</span> para
          que cada aluno aprenda e cada professor ensine melhor.
        </motion.p>
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="relative w-full h-[clamp(64px,17vh,184px)]"
        >
          <span className="sr-only">AÍ Tecnologia — Educational Intelligence Lab</span>
          <svg aria-hidden="true" viewBox="0 0 1361 92" preserveAspectRatio="none" className="w-full h-full block">
            <text
              y="77"
              fill="#f2efe9"
              fontSize="96"
              fontWeight="800"
              letterSpacing="-1"
              textLength="1361"
              lengthAdjust="spacingAndGlyphs"
              style={{ fontFamily: "var(--font-display), Arial, sans-serif" }}
            >
              EDUCATIONAL INTELLIGENCE LAB
            </text>
          </svg>
        </motion.h1>
      </section>

      {/* Statement */}
      <section className="px-6 md:px-12 py-40 md:py-56 grid md:grid-cols-2 gap-10">
        <div />
        <div>
          <h2 className="font-sans text-4xl md:text-6xl font-bold leading-[0.95] text-white">
            <AnimatedText text="Antes de ensinar, planeje." />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 font-mono text-lg md:text-xl text-[#B7B7B7]">An AI method for brazilian education.</p>
          </Reveal>
        </div>
      </section>

      {/* 02 Imersão */}
      <section id="imersao" className="px-6 md:px-12 py-32 border-t border-border-subtle">
        <Label n="02">Imersão</Label>
        <Reveal>
          <p className="max-w-5xl font-mono text-xl md:text-3xl leading-snug text-[#B7B7B7]">
            Um laboratório de inteligência educacional. A AÍ Tecnologia transforma currículo, contexto e dados de aprendizagem
            em <span className="text-white">ferramentas que trabalham ao lado do professor</span> — do planejamento da aula à
            correção da redação. Não automatizamos o ensino. Ampliamos quem ensina.
          </p>
        </Reveal>
      </section>

      {/* 03 O Problema */}
      <section className="px-6 md:px-12 py-32 border-t border-border-subtle">
        <Label n="03">O Problema</Label>
        <div className="grid md:grid-cols-2 gap-16">
          <h2 className="font-sans text-3xl md:text-5xl font-bold leading-tight text-white">
            <AnimatedText text="Toda aula começa muito antes da sala de aula." />
          </h2>
          <Reveal className="flex flex-col gap-6 font-mono text-base md:text-lg normal-case tracking-normal leading-relaxed text-text-secondary">
            <p>Entre o currículo e o aprendizado há pessoas. Há tempo, contexto e realidades muito diferentes.</p>
            <p>Professores gastam horas em tarefas que não são ensinar. Alunos ficam para trás sem que ninguém perceba a tempo.</p>
            <p className="text-white">Usamos IA para devolver tempo a quem ensina e atenção a quem aprende.</p>
          </Reveal>
        </div>
      </section>

      {/* 04 A Virada */}
      <section className="px-6 md:px-12 py-32 border-t border-border-subtle">
        <Label n="04">A Virada</Label>
        <h2 className="max-w-4xl font-sans text-3xl md:text-5xl font-bold leading-tight text-white mb-20">
          <AnimatedText text="A AÍ Tecnologia reduz o custo de aprender tarde demais." />
        </h2>
        <ul className="border-t border-border-subtle">
          {DESAFIOS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <li className="grid md:grid-cols-[3rem_1fr_1.4fr] gap-4 md:gap-10 py-8 border-b border-border-subtle">
                <span className="font-mono text-xs text-text-secondary">0{i + 1}</span>
                <h3 className="font-mono text-lg text-white">{t}</h3>
                <p className="font-mono text-base normal-case tracking-normal text-text-secondary">{d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* 05 A Tese */}
      <section className="px-6 md:px-12 py-32 border-t border-border-subtle">
        <Label n="05">A Tese</Label>
        <div className="grid md:grid-cols-2 gap-16">
          <h2 className="font-sans text-3xl md:text-5xl font-bold leading-tight text-white">
            <AnimatedText text="Aprendizagem não é aleatória. É complexa, mas mensurável." />
          </h2>
          <Reveal className="flex flex-col gap-6 font-mono text-base md:text-lg normal-case tracking-normal leading-relaxed text-text-secondary">
            <p>Alunos seguem padrões. Erram nos mesmos pontos, avançam em ritmos próprios, respondem a estímulos diferentes.</p>
            <p>Quando esses padrões ficam visíveis, o professor deixa de reagir e passa a antecipar.</p>
          </Reveal>
        </div>
        <div className="mt-24 pt-12 border-t border-border-subtle grid md:grid-cols-3 gap-12">
          {STATS.map(([n, l, d], i) => (
            <Reveal key={l} delay={i * 0.1}>
              <p className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-white">{n}</p>
              <p className="mt-4 mb-3 font-mono text-sm tracking-[0.08em] text-white">{l}</p>
              <p className="font-mono text-sm normal-case tracking-normal leading-relaxed text-text-secondary">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 06 Produtos */}
      <section id="produtos" className="px-6 md:px-12 py-32 border-t border-border-subtle">
        <Label n="06">Produtos</Label>
        <div className="grid md:grid-cols-2 border-t border-l border-border-subtle">
          {PRODUTOS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                href={`/produto/${p.slug}`}
                className="group flex flex-col justify-between gap-16 h-full min-h-72 p-8 md:p-12 border-r border-b border-border-subtle hover:bg-[#0b0b0c] transition-colors"
              >
                <span className="font-mono text-xs text-text-secondary">0{i + 1}</span>
                <div>
                  <h3 className="font-sans text-3xl md:text-4xl font-bold text-white">{p.name}</h3>
                  <p className="mt-4 max-w-md font-mono text-base normal-case tracking-normal text-text-secondary">{p.desc}</p>
                  <span className="mt-8 inline-block font-mono text-xs tracking-[0.12em] text-[#B7B7B7] group-hover:text-white transition-colors">
                    Saiba mais →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 07 O Método */}
      <section id="metodo" className="px-6 md:px-12 py-32 border-t border-border-subtle">
        <Label n="07">O Método</Label>
        <h2 className="max-w-4xl font-sans text-3xl md:text-5xl font-bold leading-tight text-white mb-20">
          <AnimatedText text="Do currículo ao aprendizado individual." />
        </h2>
        <div className="grid md:grid-cols-5 gap-px bg-border-subtle border border-border-subtle">
          {METODO.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08} className="bg-black p-8 flex flex-col gap-10 min-h-64">
              <span className="font-mono text-xs text-text-secondary">0{i + 1}</span>
              <div>
                <h3 className="font-mono text-base text-white mb-3">{t}</h3>
                <p className="font-mono text-sm normal-case tracking-normal leading-relaxed text-text-secondary">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 08 Como funciona */}
      <section className="px-6 md:px-12 py-32 border-t border-border-subtle">
        <Label n="08">Como funciona</Label>
        <p className="font-sans text-2xl md:text-4xl font-bold text-white mb-16">Entrada → IA → Saída</p>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            ["Entrada", "Currículo, série, componente, perfil da turma e objetivo pedagógico."],
            ["IA", "Modelos ajustados ao contexto educacional brasileiro geram e avaliam conteúdo."],
            ["Saída", "Planos de aula, exercícios adaptativos, feedback de redação e relatórios de evolução."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1} className="border-t border-border-subtle pt-8">
              <span className="font-mono text-xs text-text-secondary">0{i + 1}</span>
              <h3 className="mt-6 mb-3 font-mono text-lg text-white">{t}</h3>
              <p className="font-mono text-sm normal-case tracking-normal leading-relaxed text-text-secondary">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 09 Fechamento */}
      <section className="px-6 md:px-12 py-40 border-t border-border-subtle">
        <Label n="09">Fechamento</Label>
        <h2 className="max-w-5xl font-sans text-4xl md:text-7xl font-bold leading-[0.95] text-white">
          <AnimatedText text="Uma ferramenta para ensinar melhor." />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl font-mono text-base md:text-lg normal-case tracking-normal leading-relaxed text-text-secondary">
            Somos uma equipe pequena trabalhando na fronteira entre inteligência artificial e educação para resolver um
            problema enorme: dar a cada aluno a atenção que ele precisa.
          </p>
        </Reveal>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-[#f2efe9] text-black px-6 md:px-12 py-32">
        <div className="flex items-center gap-4 mb-14 font-mono text-xs tracking-[0.14em] text-black/50">
          <span>Contato</span>
          <span className="flex-1 h-px bg-black/20" />
        </div>
        <h2 className="max-w-4xl mb-20 font-sans text-4xl md:text-6xl font-bold leading-[0.95]">Qual inovação você quer levar para a sua escola?</h2>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-20 border-t border-border-subtle flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6">
          <p className="font-sans text-2xl md:text-3xl font-bold text-white">Educational Intelligence Lab</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-mono text-lg normal-case tracking-normal text-[#B7B7B7] hover:text-white transition-colors">
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className="flex flex-col md:items-end gap-3 font-mono text-xs tracking-[0.12em] text-text-secondary">
          <nav aria-label="Rodapé" className="flex flex-wrap gap-6 mb-6">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            ))}
          </nav>
          <Link href="/termos" className="hover:text-white transition-colors">Termos de uso</Link>
          <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          <p className="mt-6">© 2026 AÍ Tecnologia &amp; Educação</p>
        </div>
      </footer>
    </main>
  );
}
