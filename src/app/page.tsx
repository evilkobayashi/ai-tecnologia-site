"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  FileText,
  Mic,
  PenTool,
  SlidersHorizontal,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CONTACT_EMAIL = "contato@aitecnologia.xyz";
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

function FadeIn({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

const DESAFIOS = [
  {
    code: "01",
    bncc: "Gestão docente",
    color: "#1d4ed8",
    title: "Sobrecarga burocrática do professor",
    desc: "Horas semanais consumidas preenchendo grades, formulários da secretaria, relatórios AEE e correções repetitivas.",
  },
  {
    code: "02",
    bncc: "EF06MA01",
    color: "#b45309",
    title: "Defasagem silenciosa entre bimestres",
    desc: "Alunos avançam de série com lacunas de base em matemática e ciências que só aparecem nas avaliações externas.",
  },
  {
    code: "03",
    bncc: "EF15LP01",
    color: "#047857",
    title: "Barreira do teclado na alfabetização",
    desc: "Crianças nos anos iniciais, estudantes neurodivergentes e turmas de EJA travam em interfaces que exigem digitação.",
  },
  {
    code: "04",
    bncc: "EM13LP01",
    color: "#be123c",
    title: "Devolutiva tardia na produção textual",
    desc: "Turmas inteiras entregam redações e recebem a correção semanas depois, quando o argumento já esfriou.",
  },
  {
    code: "05",
    bncc: "EF09MA06",
    color: "#1d4ed8",
    title: "Uma única aula para trinta ritmos",
    desc: "Sem visibilidade das dúvidas individuais fora da sala, o planejamento semanal não reflete a dificuldade real da turma.",
  },
];

const PRODUTOS = [
  {
    slug: "planeja-ai",
    name: "Planeja AÍ",
    psychologyRole: "Ordem, método e confiança institucional",
    accentHex: "#1d4ed8",
    accentBg: "rgba(29, 78, 216, 0.08)",
    accentBorder: "rgba(29, 78, 216, 0.22)",
    audience: "Professores e coordenação",
    bncc: "EF01–EM13 • SEMED / Privada",
    span: "lg:col-span-7",
    desc: "Gera planos de aula diários, semanais e adaptações AEE/PEI já diagramados no modelo oficial da sua Secretaria de Educação, escola particular ou cursinho.",
    metricLabel: "Exportação oficial",
    metricValue: "PDF e DOCX A4 prontos para visto",
    externalUrl: "https://planeja.aitecnologia.xyz",
  },
  {
    slug: "reforca-ai",
    name: "Reforça AÍ",
    psychologyRole: "Curiosidade ativa, energia e descoberta",
    accentHex: "#b45309",
    accentBg: "rgba(180, 83, 9, 0.08)",
    accentBorder: "rgba(180, 83, 9, 0.22)",
    audience: "Ensino Fundamental II e Médio",
    bncc: "EF06MA01 • EF09MA06",
    span: "lg:col-span-5",
    desc: "Tutor socrático que lê a foto do caderno via OCR e conduz o aluno por perguntas passo a passo, sem entregar a resposta pronta.",
    metricLabel: "Mediação pedagógica",
    metricValue: "100% socrática, sem resposta pronta",
    externalUrl: "https://reforca.aitecnologia.xyz",
  },
  {
    slug: "redacao-nota-10-ia",
    name: "Redação Nota 10 AÍ",
    psychologyRole: "Rigor avaliativo, foco e revisão textual",
    accentHex: "#be123c",
    accentBg: "rgba(190, 18, 60, 0.08)",
    accentBorder: "rgba(190, 18, 60, 0.22)",
    audience: "Ensino Médio e pré-vestibular",
    bncc: "Matriz ENEM C1–C5",
    span: "lg:col-span-5",
    desc: "Avalia redações manuscritas ou digitadas nas 5 competências do ENEM, FUVEST e VUNESP, apontando desvios linha a linha com verificação de autoria.",
    metricLabel: "Critérios avaliados",
    metricValue: "5 competências (0 a 1000 pontos)",
    externalUrl: "https://redacao.aitecnologia.xyz",
  },
  {
    slug: "alfabetiza-ai",
    name: "Alfabetiza AÍ",
    psychologyRole: "Acolhimento, calma sensorial e evolução",
    accentHex: "#047857",
    accentBg: "rgba(4, 120, 87, 0.08)",
    accentBorder: "rgba(4, 120, 87, 0.22)",
    audience: "Anos iniciais, TEA/TDAH e EJA",
    bncc: "EF01LP02 • EF15LP01",
    span: "lg:col-span-7",
    desc: "Ambiente de letramento 100% controlado por voz. O estudante fala ao microfone, recebe escuta fonética paciente e avança sem depender de teclado.",
    metricLabel: "Interface de uso",
    metricValue: "Voz nativa, zero digitação",
    externalUrl: "https://alfabetiza.aitecnologia.xyz",
  },
];

const METODO = [
  {
    step: "01",
    color: "#1d4ed8",
    title: "Diagnóstico da rede",
    desc: "Mapeamos o modelo de documento da secretaria ou escola, séries atendidas e matriz curricular local.",
  },
  {
    step: "02",
    color: "#1d4ed8",
    title: "Ancoragem na BNCC",
    desc: "Cada habilidade, objeto de conhecimento e rubrica é vinculado aos códigos oficiais da Base.",
  },
  {
    step: "03",
    color: "#b45309",
    title: "Prática discente ativa",
    desc: "Alunos estudam por voz, foto do caderno ou escrita de redação com mediação passo a passo.",
  },
  {
    step: "04",
    color: "#be123c",
    title: "Ponte pedagógica",
    desc: "As dúvidas reais da turma alimentam automaticamente o painel de planejamento do professor.",
  },
  {
    step: "05",
    color: "#047857",
    title: "Decisão docente",
    desc: "O professor revisa, ajusta e aprova o plano de recomposição. A tecnologia apoia quem ensina.",
  },
];

type PreviewTab = "planeja" | "reforca" | "redacao" | "alfabetiza";

const TABS: {
  id: PreviewTab;
  label: string;
  bncc: string;
  color: string;
  bgSoft: string;
  icon: typeof FileText;
}[] = [
  {
    id: "planeja",
    label: "Planeja AÍ",
    bncc: "EF09MA06",
    color: "#1d4ed8",
    bgSoft: "rgba(29, 78, 216, 0.1)",
    icon: FileText,
  },
  {
    id: "reforca",
    label: "Reforça AÍ",
    bncc: "EF07MA18",
    color: "#b45309",
    bgSoft: "rgba(180, 83, 9, 0.1)",
    icon: SlidersHorizontal,
  },
  {
    id: "redacao",
    label: "Redação Nota 10",
    bncc: "EM13LP01",
    color: "#be123c",
    bgSoft: "rgba(190, 18, 60, 0.1)",
    icon: PenTool,
  },
  {
    id: "alfabetiza",
    label: "Alfabetiza AÍ",
    bncc: "EF01LP02",
    color: "#047857",
    bgSoft: "rgba(4, 120, 87, 0.1)",
    icon: Mic,
  },
];

function EcosystemPreview() {
  const [tab, setTab] = useState<PreviewTab>("planeja");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setTab((prev) => {
        const idx = TABS.findIndex((t) => t.id === prev);
        return TABS[(idx + 1) % TABS.length].id;
      });
    }, 5200);
    return () => clearInterval(timer);
  }, [paused]);

  const currentTabMeta = TABS.find((t) => t.id === tab) || TABS[0];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="rounded-[16px] bg-[#ede7db] p-2 border border-[rgba(28,25,21,0.09)] shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="rounded-[10px] bg-[#fcfaf5] border border-[rgba(28,25,21,0.09)] overflow-hidden">
        {/* Top bar */}
        <div className="h-12 px-4 bg-[#f6f3ec] border-b border-[rgba(28,25,21,0.09)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full transition-colors duration-300"
              style={{ backgroundColor: currentTabMeta.color }}
            />
            <span className="font-mono text-[12px] leading-4 text-[#574f45]">
              Simulador do ciclo pedagógico • 9º Ano B
            </span>
          </div>
          <span
            className="px-2 py-0.5 rounded-[4px] font-mono text-[12px] leading-4 font-medium tabular-nums transition-colors duration-300"
            style={{
              backgroundColor: currentTabMeta.bgSoft,
              color: currentTabMeta.color,
            }}
          >
            {currentTabMeta.bncc}
          </span>
        </div>

        {/* Product switcher with semantic color indicators */}
        <div className="p-2 bg-[#f6f3ec]/60 border-b border-[rgba(28,25,21,0.09)] grid grid-cols-2 sm:grid-cols-4 gap-1">
          {TABS.map((item) => {
            const Icon = item.icon;
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setPaused(true);
                  setTab(item.id);
                }}
                className={`relative h-9 px-3 rounded-[8px] flex items-center gap-2 text-[13px] leading-5 font-medium overflow-hidden transition-colors duration-150 ${
                  active
                    ? "bg-[#1c1915] text-[#f6f3ec]"
                    : "text-[#574f45] hover:bg-[#ede7db] hover:text-[#1c1915]"
                }`}
              >
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  style={{ color: active ? "#f6f3ec" : item.color }}
                />
                <span className="truncate">{item.label}</span>
                {active && !paused && (
                  <motion.span
                    key={`progress-${item.id}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5.2, ease: "linear" }}
                    style={{
                      backgroundColor: item.color,
                      transformOrigin: "left center",
                    }}
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Animated preview canvas */}
        <div className="p-6 min-h-[372px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {tab === "planeja" && (
              <motion.div
                key="planeja"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
                className="flex-1 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-[rgba(28,25,21,0.09)]">
                    <div>
                      <p className="font-mono text-[12px] leading-4 text-[#786f63]">
                        Secretaria Municipal de Educação • Modelo Oficial A4
                      </p>
                      <h3 className="mt-1 text-[18px] leading-6 font-medium text-[#1c1915]">
                        Plano de Aula Semanal — Matemática (9º Ano)
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-[6px] bg-[#1d4ed8]/10 text-[#1d4ed8] font-mono text-[12px] leading-4 font-medium shrink-0">
                      Pronto para visto
                    </span>
                  </div>

                  <div className="rounded-[8px] border border-[rgba(28,25,21,0.09)] overflow-hidden">
                    <div className="grid grid-cols-12 bg-[#f6f3ec] px-3 py-2 text-[12px] leading-4 font-mono text-[#786f63] border-b border-[rgba(28,25,21,0.09)]">
                      <span className="col-span-2">Dia</span>
                      <span className="col-span-3">Código BNCC</span>
                      <span className="col-span-7">Objeto de conhecimento e mediação</span>
                    </div>
                    {[
                      ["Segunda", "EF09MA06", "Funções: relação de dependência entre duas variáveis"],
                      ["Quarta", "EF09MA06", "Recomposição: isolamento de incógnita (dados do Reforça AÍ)"],
                      ["Sexta", "EF09MA09", "Resolução contextualizada e adaptação PEI/AEE"],
                    ].map(([day, code, obj], i) => (
                      <motion.div
                        key={day}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: EASE_OUT, delay: i * 0.05 }}
                        className="grid grid-cols-12 px-3 py-2.5 text-[13px] leading-5 border-b last:border-b-0 border-[rgba(28,25,21,0.09)] items-center"
                      >
                        <span className="col-span-2 font-medium text-[#1c1915]">{day}</span>
                        <span className="col-span-3 font-mono text-[12px] text-[#1d4ed8] tabular-nums">{code}</span>
                        <span className="col-span-7 text-[#574f45]">{obj}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(28,25,21,0.09)] flex items-center justify-between gap-4 text-[13px] leading-5">
                  <span className="text-[#574f45]">
                    Ponte pedagógica ativa:{" "}
                    <strong className="font-medium text-[#1c1915]">14 alunos</strong> revisaram equações ontem no Reforça AÍ
                  </span>
                  <span className="font-mono text-[12px] text-[#1d4ed8] tabular-nums">DOCX • PDF</span>
                </div>
              </motion.div>
            )}

            {tab === "reforca" && (
              <motion.div
                key="reforca"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
                className="flex-1 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4 pb-3 border-b border-[rgba(28,25,21,0.09)]">
                    <div>
                      <p className="font-mono text-[12px] leading-4 text-[#786f63]">
                        Foto do caderno lida via OCR • Sem resposta pronta
                      </p>
                      <h3 className="mt-1 text-[18px] leading-6 font-medium text-[#1c1915]">
                        Tutoria Socrática — Equação do 1º Grau
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-[6px] bg-[#b45309]/10 text-[#b45309] font-mono text-[12px] leading-4 font-medium tabular-nums">
                      2x + 6 = 18
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: EASE_OUT }}
                      className="p-3.5 rounded-[8px] bg-[#f6f3ec] border border-[rgba(28,25,21,0.09)] border-l-[3px] border-l-[#b45309]"
                    >
                      <p className="font-mono text-[12px] leading-4 text-[#b45309] mb-1">
                        Pergunta guia • Tutor Reforça AÍ
                      </p>
                      <p className="text-[14px] leading-5 text-[#1c1915]">
                        Para deixar o termo <span className="font-mono font-medium">2x</span> sozinho do lado esquerdo, qual operação fazemos com o <span className="font-mono font-medium">+ 6</span> dos dois lados da igualdade?
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.08 }}
                      className="p-3.5 rounded-[8px] bg-[#ede7db] border border-[rgba(28,25,21,0.09)] self-end max-w-[85%]"
                    >
                      <p className="font-mono text-[12px] leading-4 text-[#786f63] mb-1">Aluno • 9º Ano B</p>
                      <p className="text-[14px] leading-5 text-[#1c1915]">
                        Subtraímos 6 dos dois lados, ficando 2x = 12
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: EASE_OUT, delay: 0.16 }}
                      className="p-3.5 rounded-[8px] bg-[#047857]/10 border border-[#047857]/25"
                    >
                      <p className="text-[14px] leading-5 text-[#1c1915]">
                        Correto. Agora basta dividir os dois lados por 2 para encontrar o valor de <span className="font-mono font-medium">x</span>.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(28,25,21,0.09)] flex items-center justify-between text-[13px] leading-5 text-[#574f45]">
                  <span>Raciocínio autônomo enviado para o Planeja AÍ</span>
                  <span className="font-mono text-[12px] text-[#b45309] tabular-nums">+15 pontos de estudo</span>
                </div>
              </motion.div>
            )}

            {tab === "redacao" && (
              <motion.div
                key="redacao"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
                className="flex-1 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4 pb-3 border-b border-[rgba(28,25,21,0.09)]">
                    <div>
                      <p className="font-mono text-[12px] leading-4 text-[#786f63]">
                        Matriz Oficial INEP / ENEM • Verificação de originalidade ativa
                      </p>
                      <h3 className="mt-1 text-[18px] leading-6 font-medium text-[#1c1915]">
                        Laudo Diagnóstico por Competência
                      </h3>
                    </div>
                    <span className="font-mono text-[20px] leading-6 font-medium text-[#be123c] tabular-nums">
                      920 <span className="text-[13px] text-[#786f63]">/ 1000</span>
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {[
                      ["C1", "Domínio da norma padrão da língua portuguesa", 160, false],
                      ["C2", "Compreensão do tema e repertório sociocultural", 200, true],
                      ["C3", "Seleção e organização de argumentos", 200, true],
                      ["C4", "Mecanismos linguísticos de coesão textual", 160, false],
                      ["C5", "Proposta de intervenção com 5 elementos", 200, true],
                    ].map(([code, label, score, full], idx) => (
                      <div key={String(code)} className="grid grid-cols-12 items-center gap-3 text-[13px] leading-5">
                        <span className="col-span-1 font-mono text-[12px] text-[#786f63] tabular-nums">{code}</span>
                        <span className="col-span-7 text-[#1c1915] truncate">{label}</span>
                        <div className="col-span-3 h-2 rounded-full bg-[#ede7db] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(Number(score) / 200) * 100}%` }}
                            transition={{ duration: 0.45, ease: EASE_OUT, delay: idx * 0.05 }}
                            className={`h-full rounded-full ${full ? "bg-[#047857]" : "bg-[#be123c]"}`}
                          />
                        </div>
                        <span className="col-span-1 font-mono text-[12px] text-right text-[#1c1915] tabular-nums">
                          {score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-[8px] bg-[#be123c]/8 border border-[#be123c]/20 text-[13px] leading-5 text-[#574f45]">
                  <strong className="font-medium text-[#1c1915]">Nota de revisão (Linha 14):</strong> Substitua a vírgula antes do conectivo <span className="font-mono text-[#be123c]">portanto</span> por ponto e vírgula para evitar período justaposto.
                </div>
              </motion.div>
            )}

            {tab === "alfabetiza" && (
              <motion.div
                key="alfabetiza"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
                className="flex-1 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4 pb-3 border-b border-[rgba(28,25,21,0.09)]">
                    <div>
                      <p className="font-mono text-[12px] leading-4 text-[#786f63]">
                        Modo de baixo estímulo • Escuta fonética por voz
                      </p>
                      <h3 className="mt-1 text-[18px] leading-6 font-medium text-[#1c1915]">
                        Consciência Fonêmica e Silábica
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-[6px] bg-[#047857]/10 text-[#047857] font-mono text-[12px] leading-4 font-medium">
                      Voz ativa
                    </span>
                  </div>

                  <div className="p-4 rounded-[8px] bg-[#f6f3ec] border border-[rgba(28,25,21,0.09)] border-l-[3px] border-l-[#047857] flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[12px] text-[#786f63]">Desafio sonoro guiado</span>
                      <span className="font-mono text-[12px] text-[#047857]">Sem teclado</span>
                    </div>
                    <p className="text-[16px] leading-6 text-[#1c1915]">
                      Ouça a palavra{" "}
                      <span className="px-2 py-0.5 rounded-[4px] bg-[#047857]/12 text-[#047857] font-mono font-medium">
                        CA — SA
                      </span>{" "}
                      e repita no microfone o som da primeira sílaba
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-3 text-[13px] text-[#574f45]">
                      <span className="px-2.5 py-1 rounded-[6px] bg-[#047857]/10 text-[#047857] font-mono font-medium">
                        Fonema /k/ + /a/ reconhecido com precisão
                      </span>
                      <span>Feedback em áudio acolhedor</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(28,25,21,0.09)] flex items-center justify-between text-[13px] leading-5 text-[#574f45]">
                  <span>Desenhado para anos iniciais, TEA/TDAH e EJA</span>
                  <span className="font-mono text-[12px] text-[#047857]">Mapa fonético atualizado</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-[12px] leading-4 text-[#1d4ed8] font-medium tabular-nums">{number}</span>
      <span className="font-mono text-[12px] leading-4 text-[#574f45]">{label}</span>
      <span className="flex-1 h-px bg-[rgba(28,25,21,0.09)]" />
    </div>
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
      setError("Preencha seu nome, um e-mail institucional ou pessoal válido e a mensagem.");
      return;
    }
    setError("");
    const body = `${msg}\n\n${nome}\n${email}\n${String(f.get("whatsapp") || "")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Contato pelo site — ${nome}`
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full h-11 px-3.5 rounded-[8px] bg-[#fcfaf5] border border-[rgba(28,25,21,0.14)] text-[15px] leading-5 text-[#1c1915] placeholder:text-[#786f63] focus:outline-none focus:border-[#1d4ed8] transition-colors duration-150";
  const labelClass = "block mb-2 text-[13px] leading-5 font-medium text-[#1c1915]";

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="nome" className={labelClass}>
            Nome completo
          </label>
          <input id="nome" name="nome" required autoComplete="name" className={inputClass} placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="nome@escola.edu.br"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            Telefone ou WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="(00) 00000-0000"
          />
        </div>
        <div className="md:col-span-3">
          <label htmlFor="mensagem" className={labelClass}>
            Como podemos apoiar sua escola ou secretaria
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            rows={4}
            className="w-full p-3.5 rounded-[8px] bg-[#fcfaf5] border border-[rgba(28,25,21,0.14)] text-[15px] leading-6 text-[#1c1915] placeholder:text-[#786f63] focus:outline-none focus:border-[#1d4ed8] transition-colors duration-150 resize-y"
            placeholder="Informe a rede de ensino, número aproximado de turmas ou qual solução deseja conhecer"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          className="h-11 px-6 rounded-[8px] bg-[#1d4ed8] text-white text-[14px] leading-5 font-medium inline-flex items-center justify-center gap-2 hover:bg-[#1e40af] active:scale-[0.98] transition-[background-color,transform] duration-150 w-fit"
        >
          <span>Enviar mensagem</span>
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
        {error && (
          <p role="alert" className="text-[13px] leading-5 text-[#be123c]">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = window.location.search;
      const hash = window.location.hash;
      if (search.includes("code=")) {
        window.location.href = `https://redacao.aitecnologia.xyz/auth/callback${search}`;
      } else if (hash.includes("access_token=")) {
        window.location.href = `https://redacao.aitecnologia.xyz/dashboard${hash}`;
      }
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ec] text-[#1c1915]">
      <Navbar />

      <main className="flex-1">
        {/* Hero — Asymmetric split */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-8 py-16 lg:py-24 min-h-[calc(100vh-64px)] flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-[4px] bg-[#1d4ed8]/10 text-[#1d4ed8] font-mono text-[12px] leading-4 font-medium tabular-nums">
                  BNCC • EF01 ao EM13
                </span>
                <span className="text-[13px] leading-5 text-[#574f45]">
                  Redes Municipais, Estaduais e Escolas Privadas
                </span>
              </div>

              <h1 className="font-serif text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.04] tracking-[-0.02em] text-[#1c1915]">
                Inteligência pedagógica que devolve tempo ao professor e acompanha{" "}
                <span className="editorial-highlight">cada aluno</span>
              </h1>

              <p className="mt-6 text-[18px] sm:text-[20px] leading-[28px] text-[#574f45] max-w-[36rem]">
                Do planejamento semanal no modelo oficial da sua secretaria à tutoria socrática, correção de redação ENEM e alfabetização por voz.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#produtos"
                  className="h-12 px-5 rounded-[8px] bg-[#1d4ed8] text-white text-[15px] leading-5 font-medium inline-flex items-center gap-2 hover:bg-[#1e40af] active:scale-[0.98] transition-[background-color,transform] duration-150"
                >
                  <span>Conhecer as 4 plataformas</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </a>
                <a
                  href="#contato"
                  className="h-12 px-5 rounded-[8px] bg-[#ede7db] border border-[rgba(28,25,21,0.09)] text-[#1c1915] text-[15px] leading-5 font-medium inline-flex items-center hover:bg-[#e3dccd] active:scale-[0.98] transition-[background-color,transform] duration-150"
                >
                  Agendar demonstração
                </a>
              </div>

              {/* Color-coded pillar strip */}
              <div className="mt-12 pt-6 border-t border-[rgba(28,25,21,0.09)] w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Planejamento", sub: "Modelo oficial A4", color: "#1d4ed8" },
                  { label: "Tutoria Socrática", sub: "Sem resposta pronta", color: "#b45309" },
                  { label: "Redação ENEM", sub: "5 competências", color: "#be123c" },
                  { label: "Alfabetização", sub: "100% por voz", color: "#047857" },
                ].map((pillar) => (
                  <div key={pillar.label} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: pillar.color }}
                      />
                      <span className="text-[13px] leading-5 font-medium text-[#1c1915]">
                        {pillar.label}
                      </span>
                    </div>
                    <p className="text-[12px] leading-4 text-[#786f63] pl-4">{pillar.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.08 }}
              className="lg:col-span-6"
            >
              <EcosystemPreview />
            </motion.div>
          </div>
        </section>

        {/* 01 Contexto / Imersão */}
        <section id="imersao" className="border-t border-[rgba(28,25,21,0.09)] py-20 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <SectionHeader number="01" label="Contexto pedagógico" />
            <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#1c1915]">
                  Não automatizamos o ensino. Entregamos instrumentos para quem ensina em sala de aula
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-4 text-[15px] leading-[22px] text-[#574f45]">
                <p>
                  Sistemas educacionais comuns operam isolados: o estudante tenta estudar sozinho em casa, o professor perde o fim de semana preenchendo planilhas e a coordenação só descobre a defasagem após o fechamento do bimestre.
                </p>
                <p className="text-[#1c1915] font-medium">
                  A AÍ Tecnologia conecta a prática diária do aluno diretamente ao planejamento semanal do professor.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 02 O Problema e os Desafios */}
        <section className="border-t border-[rgba(28,25,21,0.09)] py-20 md:py-24 bg-[#fcfaf5]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <SectionHeader number="02" label="O problema na ponta" />
            <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-6">
                <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.12] tracking-[-0.02em] text-[#1c1915]">
                  Toda aula começa muito antes de abrir o caderno
                </h2>
              </div>
              <div className="lg:col-span-6 text-[15px] leading-[22px] text-[#574f45]">
                <p>
                  Reduzimos o tempo entre a dúvida do aluno e a intervenção pedagógica do professor, atuando nos cinco gargalos mais frequentes da educação básica brasileira.
                </p>
              </div>
            </FadeIn>

            <div className="border-t border-[rgba(28,25,21,0.09)]">
              {DESAFIOS.map((item, idx) => (
                <FadeIn key={item.code} delay={idx * 0.04}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-6 border-b border-[rgba(28,25,21,0.09)] items-baseline">
                    <div className="md:col-span-2 flex items-center gap-3">
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-mono text-[12px] text-[#786f63] tabular-nums">{item.code}</span>
                      <span className="bncc-code">{item.bncc}</span>
                    </div>
                    <h3 className="md:col-span-3 text-[16px] leading-6 font-medium text-[#1c1915]">
                      {item.title}
                    </h3>
                    <p className="md:col-span-7 text-[15px] leading-[22px] text-[#574f45]">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 03 Produtos do Ecossistema — Com Psicologia das Cores por Eixo Pedagógico */}
        <section id="produtos" className="border-t border-[rgba(28,25,21,0.09)] py-20 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <SectionHeader number="03" label="Plataformas do ecossistema" />

            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#1c1915] max-w-2xl">
                Quatro plataformas criadas para a realidade das escolas brasileiras
              </h2>
              <p className="text-[14px] leading-5 text-[#574f45] max-w-sm">
                Cada solução possui identidade visual pensada para seu momento cognitivo e compartilha indicadores com o professor.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {PRODUTOS.map((prod, idx) => (
                <FadeIn
                  key={prod.slug}
                  delay={idx * 0.05}
                  className={`${prod.span} rounded-[12px] bg-[#fcfaf5] border border-[rgba(28,25,21,0.09)] overflow-hidden flex flex-col justify-between shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-[rgba(28,25,21,0.2)] transition-colors duration-150`}
                >
                  {/* Semantic color bar at top of card */}
                  <div className="h-1 w-full" style={{ backgroundColor: prod.accentHex }} />

                  <div className="p-6 flex-1 flex flex-col justify-between gap-8">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                        <span className="font-mono text-[12px] leading-4 text-[#786f63] tabular-nums">
                          0{idx + 1} • {prod.audience}
                        </span>
                        <span
                          className="px-2.5 py-0.5 rounded-[4px] font-mono text-[12px] leading-4 font-medium tabular-nums"
                          style={{
                            backgroundColor: prod.accentBg,
                            color: prod.accentHex,
                            border: `1px solid ${prod.accentBorder}`,
                          }}
                        >
                          {prod.bncc}
                        </span>
                      </div>

                      <h3 className="font-serif text-[28px] md:text-[32px] leading-[1.15] text-[#1c1915]">
                        {prod.name}
                      </h3>

                      <p className="mt-3 text-[15px] leading-[22px] text-[#574f45] max-w-xl">
                        {prod.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[rgba(28,25,21,0.09)] flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[12px] leading-4 text-[#786f63]">{prod.metricLabel}</p>
                        <p
                          className="mt-0.5 text-[14px] leading-5 font-medium tabular-nums"
                          style={{ color: prod.accentHex }}
                        >
                          {prod.metricValue}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/produto/${prod.slug}`}
                          className="h-9 px-3.5 rounded-[8px] text-white text-[13px] leading-5 font-medium inline-flex items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-[opacity,transform] duration-150"
                          style={{ backgroundColor: prod.accentHex }}
                        >
                          <span>Detalhes técnicos</span>
                          <ArrowRight size={16} strokeWidth={1.5} />
                        </Link>
                        <a
                          href={prod.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-9 px-3.5 rounded-[8px] bg-[#ede7db] text-[#1c1915] hover:bg-[#e2dacb] text-[13px] leading-5 inline-flex items-center gap-1.5 transition-colors duration-150"
                        >
                          <span>Abrir app</span>
                          <ArrowUpRight size={16} strokeWidth={1.5} className="text-[#574f45]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 04 O Método & Como Funciona */}
        <section id="metodo" className="border-t border-[rgba(28,25,21,0.09)] py-20 md:py-24 bg-[#fcfaf5]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <SectionHeader number="04" label="Método de implantação" />

            <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-6">
                <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.12] tracking-[-0.02em] text-[#1c1915]">
                  Do currículo da rede ao acompanhamento individual
                </h2>
              </div>
              <div className="lg:col-span-6 text-[15px] leading-[22px] text-[#574f45]">
                <p>
                  Aprendizagem deixa rastros claros. Quando os erros recorrentes da turma em matemática, leitura ou redação aparecem organizados por habilidade da BNCC, o professor deixa de apagar incêndios e antecipa a recomposição.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {METODO.map((item, idx) => (
                <FadeIn
                  key={item.step}
                  delay={idx * 0.05}
                  className="rounded-[12px] bg-[#f6f3ec] border border-[rgba(28,25,21,0.09)] p-6 flex flex-col justify-between gap-8"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span
                      className="font-mono text-[12px] leading-4 font-medium tabular-nums"
                      style={{ color: item.color }}
                    >
                      Etapa {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[16px] leading-6 font-medium text-[#1c1915] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-5 text-[#574f45]">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Fluxo Entrada -> Processamento -> Saída */}
            <FadeIn className="mt-12 rounded-[12px] bg-[#ede7db] border border-[rgba(28,25,21,0.09)] p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  tag: "01 • Entrada",
                  color: "#1d4ed8",
                  title: "Contexto real da turma",
                  items: [
                    "Modelo de formulário oficial da secretaria ou escola",
                    "Série, componente curricular e habilidades BNCC",
                    "Fotos de atividades no caderno, voz ou redação",
                  ],
                },
                {
                  tag: "02 • Processamento pedagógico",
                  color: "#b45309",
                  title: "Modelos calibrados para o Brasil",
                  items: [
                    "Mapeamento automático de códigos BNCC e diretrizes",
                    "Restrição socrática que impede cola ou resposta pronta",
                    "Avaliação por rubrica oficial (ENEM C1–C5 e fonética)",
                  ],
                },
                {
                  tag: "03 • Saída para a escola",
                  color: "#047857",
                  title: "Documentos prontos e indicadores",
                  items: [
                    "Plano de aula e PEI/AEE em PDF e Word editável",
                    "Devolutiva individual imediata para o estudante",
                    "Mapa de defasagens da turma para a próxima aula",
                  ],
                },
              ].map((col) => (
                <div key={col.tag} className="flex flex-col gap-3">
                  <span
                    className="font-mono text-[12px] leading-4 font-medium"
                    style={{ color: col.color }}
                  >
                    {col.tag}
                  </span>
                  <h3 className="text-[18px] leading-6 font-medium text-[#1c1915]">{col.title}</h3>
                  <ul className="mt-1 flex flex-col gap-2">
                    {col.items.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-[14px] leading-5 text-[#574f45]">
                        <Check size={16} strokeWidth={1.5} style={{ color: col.color }} className="shrink-0 mt-0.5" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* 05 Contato */}
        <section id="contato" className="border-t border-[rgba(28,25,21,0.09)] py-20 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <SectionHeader number="05" label="Implantação e contato" />

            <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <h2 className="font-serif text-[32px] md:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#1c1915]">
                  Leve o ecossistema AÍ para a sua escola ou rede de ensino
                </h2>
                <p className="text-[15px] leading-[22px] text-[#574f45]">
                  Configuramos o modelo oficial de plano de aula da sua instituição e liberamos o ambiente piloto para professores e coordenadores.
                </p>
                <div className="mt-4 pt-6 border-t border-[rgba(28,25,21,0.09)] flex flex-col gap-2 text-[14px] leading-5 text-[#574f45]">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} strokeWidth={1.5} className="text-[#1d4ed8]" />
                    <span>Atendimento para Secretarias de Educação (B2G) e Escolas Privadas (B2B)</span>
                  </div>
                  <p className="font-mono text-[13px] text-[#1c1915]">{CONTACT_EMAIL}</p>
                </div>
              </div>

              <div className="lg:col-span-7 rounded-[12px] bg-[#ede7db] border border-[rgba(28,25,21,0.09)] p-6 md:p-8">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
