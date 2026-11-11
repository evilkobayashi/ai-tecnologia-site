import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  GraduationCap,
  HeartHandshake,
  Cpu,
  Brain,
  Lock,
  Compass,
  Layers,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Matriz de Conformidade MEC 2026 e Ética em IA — AÍ Tecnologia e Educação",
  description:
    "Demonstrativo integral de conformidade do ecossistema AÍ Tecnologia com o Documento Orientador de IA na Educação Básica (MEC / UNESCO 2026), ECA Digital e LGPD.",
  alternates: {
    canonical: "/conformidade",
  },
  robots: { index: true, follow: true },
};

const PRINCIPLES = [
  {
    num: "01",
    title: "Intencionalidade pedagógica e centralidade humana",
    mecRef: "Capítulo 3, Item 3.3.1",
    desc: "A tecnologia é estritamente servidora do projeto educativo e do vínculo afetivo/formativo entre professor e estudante. Rejeita-se a automação cega da docência.",
    implementation: "Em todas as plataformas, as saídas são copilotos para educadores ou mediadores socráticos discentes. O professor mantém a soberania pedagógica incondicional.",
  },
  {
    num: "02",
    title: "Salvaguardas de aprendizagem e anti-descarregamento cognitivo",
    mecRef: "Capítulo 3, Item 3.3.2",
    desc: "A IA não deve atuar como 'muleta cognitiva' que substitua o esforço intelectual reflexivo do estudante (combate ao cognitive offloading).",
    implementation: "O Reforça AÍ possui trava socrática que impede a entrega de respostas prontas; o Redação Nota 10 AÍ não gera redações substitutivas, incentivando a reescrita autoral.",
  },
  {
    num: "03",
    title: "Confiabilidade pedagógica e monitoramento",
    mecRef: "Capítulo 3, Item 3.3.3",
    desc: "Rigor técnico-conceitual das informações geradas, com rastreabilidade de habilidades curriculares e monitoramento periódico das aprendizagens.",
    implementation: "Mapeamento minucioso de códigos e competências da BNCC (EF01 a EM13) com métricas de validação formativa pela equipe pedagógica.",
  },
  {
    num: "04",
    title: "Letramento em IA (Aprender COM e SOBRE IA)",
    mecRef: "Capítulo 3, Item 3.3.4",
    desc: "Fomento simultâneo ao uso de ferramentas e à compreensão crítica de seu funcionamento, limites éticos e impactos ecológicos e sociais.",
    implementation: "Integração das diretrizes de BNCC Computação (CNE/CP nº 1/2022) e Diretrizes de Educação Digital e Midiática (CNE/CEB nº 2/2025).",
  },
  {
    num: "05",
    title: "Agência e participação docente e discente",
    mecRef: "Capítulo 3, Item 3.3.5",
    desc: "Autonomia didático-pedagógica irrestrita do professor para aprovar, editar, recalibrar ou rejeitar qualquer sugestão emitida pela máquina.",
    implementation: "Workflow explícito Teacher-in-the-Loop no Planeja AÍ com checkbox obrigatório de curadoria e dashboards com override docente total no Reforça AÍ.",
  },
  {
    num: "06",
    title: "Proteção de dados e não-vigilância",
    mecRef: "Capítulo 3, Item 3.3.6",
    desc: "Estrita conformidade com a LGPD (Lei 13.709/2018) e ECA Digital (Lei 15.211/2025). Rejeição expressa a reconhecimento facial e monitoramento afetivo.",
    implementation: "Sem reconhecimento facial; áudios de crianças no Alfabetiza AÍ processados estritamente em memória volátil e descartados imediatamente pós-inferência; zero venda de dados.",
  },
  {
    num: "07",
    title: "Equidade e diversidade epistêmica",
    mecRef: "Capítulo 3, Item 3.3.7",
    desc: "Mitigação ativa de vieses de raça, gênero e classe. Valorização da diversidade cultural brasileira e recursos adaptáveis a diferentes realidades.",
    implementation: "Conformidade com as Leis 10.639/03 e 11.645/08, modelos com prompts calibrados contra estereótipos, geração de atividades para AEE/PEI e suporte a IA Desplugada.",
  },
  {
    num: "08",
    title: "Bem-estar e rejeição a designs persuasivos",
    mecRef: "Capítulo 3, Item 3.3.8",
    desc: "Interfaces sem mecanismos predatórios de engajamento, sem anúncios comerciais e com incentivo explícito ao equilíbrio com atividades fora da tela.",
    implementation: "Ambientes desprovidos de publicidade infantil, interfaces serenas sem loops compulsivos de atenção e fomento a dinâmicas lúdicas corporais e sem tela.",
  },
  {
    num: "09",
    title: "Sustentabilidade e não-dependência sistêmica",
    mecRef: "Capítulo 3, Item 3.3.9",
    desc: "Garantia de portabilidade de dados escolares, formatos abertos, combate ao vendor lock-in e responsabilidade energética/ambiental.",
    implementation: "Exportação em formatos abertos (JSON, CSV, PDF, DOCX) e arquitetura modular compatível com modelos nacionais soberanos do PBIA (Sabiá-4/Tucano).",
  },
  {
    num: "10",
    title: "Transparência, explicabilidade e alerta de alucinação",
    mecRef: "Capítulo 3, Item 3.3.10",
    desc: "Comunicação transparente sobre a natureza probabilística da IA generativa, alertas permanentes de checagem e auditabilidade de critérios.",
    implementation: "Avisos claros de risco de alucinação em todas as interfaces de geração e documentação acessível dos parâmetros avaliativos utilizados.",
  },
];

const PRODUCTS_COMPLIANCE = [
  {
    slug: "planeja-ai",
    name: "Planeja AÍ",
    target: "Docentes e Coordenação",
    role: "Copiloto de Planejamento BNCC e AEE",
    complianceSummary: "Conformidade Plena com Agência Docente e BNCC Computação",
    safeguards: [
      "Banner e workflow Teacher-in-the-Loop com confirmação de curadoria prévia pelo educador",
      "Alerta obrigatório de risco de alucinação conceitual e dever de checagem de fontes",
      "Incorporação das dimensões de Pensamento Computacional e Cultura Digital (CNE 1/2022 e 2/2025)",
      "Módulo de estratégias para IA Desplugada (atividades lúdicas sem tela em sala de aula)",
      "Adequação ao formato documental oficial da rede pública ou escola sem aprisionamento",
    ],
  },
  {
    slug: "reforca-ai",
    name: "Reforça AÍ",
    target: "Estudantes do EF II e Ensino Médio",
    role: "Tutor Socrático Adaptativo",
    complianceSummary: "Salvaguarda Anti-Descarregamento Cognitivo",
    safeguards: [
      "Trava algorítmica socrática: não fornece o dever pronto, guiando com pistas graduais",
      "Aviso contínuo de estímulo à metacognição discente e autonomia reflexiva",
      "Dashboard do professor com prerrogativa de calibrar e sobrescrever trilhas recomendadas",
      "Ausência de perfilamento comercial de menores (Art. 22 do ECA Digital)",
      "Zero compartilhamento de cadernos ou resoluções para treino público de IA",
    ],
  },
  {
    slug: "redacao-nota-10-ia",
    name: "Redação Nota 10 AÍ",
    target: "Estudantes e Professores de Redação",
    role: "Apoio Diagnóstico Formativo",
    complianceSummary: "Parecer Consultivo e Primazia Docente na Correção",
    safeguards: [
      "Nota e critérios apresentados como instrumento auxiliar de estudo, não como veredito oficial",
      "Preservação da autoridade soberana do professor de Língua Portuguesa na atribuição de notas",
      "Explicabilidade dos critérios baseados na matriz pedagógica do ENEM / SAEB",
      "Incentivo ativo à reescrita crítica em vez de substituição por texto gerado",
      "Vedação de retenção das produções textuais para treinamento de modelos comerciais",
    ],
  },
  {
    slug: "alfabetiza-ai",
    name: "Alfabetiza AÍ",
    target: "Educação Infantil e Anos Iniciais",
    role: "Letramento Fonético e Apoio à Alfabetização",
    complianceSummary: "Proteção Integral de Menores (ECA Digital e LGPD Art. 11/14)",
    safeguards: [
      "Processamento efêmero de voz em tempo real: áudios de crianças descartados imediatamente após inferência",
      "Zero armazenamento de gravações de voz ou biometria facial infantil",
      "Exigência de mediação e supervisão parental ou do professor alfabetizador em sala",
      "Card institucional recomendando momentos desplugados, motricidade fina e jogos corporais",
      "Total conformidade com o Art. 7º e 8º da Lei nº 15.211/2025 (Privacidade por padrão)",
    ],
  },
];

export default function Conformidade() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f7f4ee] text-[#1f1b16]">
      <Navbar />

      <main className="py-16 md:py-24 px-6 md:px-8 flex-1 max-w-5xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] text-[12px] font-mono mb-4">
          <ShieldCheck size={14} />
          <span>MEC / UNESCO 2026 • Documento Orientador • Matriz Ética</span>
        </div>

        <h1 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-[#1f1b16] mb-4">
          Matriz de Conformidade MEC 2026
        </h1>

        <p className="text-[16px] md:text-[19px] leading-[28px] text-[#5e554a] mb-12">
          Demonstrativo técnico e pedagógico de alinhamento com as diretrizes do Ministério da Educação (MEC / UNESCO 2026) para o uso ético, seguro e pedagogicamente responsável de Inteligência Artificial na Educação Básica.
        </p>

        {/* Destaque Institucional MEC */}
        <div className="p-8 rounded-2xl bg-[#efe9df] border border-[rgba(31,27,22,0.12)] mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[rgba(31,27,22,0.1)] pb-6 mb-6">
            <div>
              <span className="text-[12px] font-mono text-[#7b7266] uppercase tracking-wider block mb-1">
                Marco Regulatório Oficial
              </span>
              <h2 className="text-[20px] md:text-[22px] font-serif text-[#1f1b16]">
                Inteligência Artificial na Educação Básica (MEC, 2026)
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[13px] font-mono bg-white/70 px-3 py-1.5 rounded-lg border border-[rgba(31,27,22,0.08)]">
              <CheckCircle2 size={16} className="text-[#047857]" />
              <span>Ecossistema 100% Auditado</span>
            </div>
          </div>

          <p className="text-[15px] leading-[25px] text-[#5e554a] mb-6">
            O documento orientador do MEC estabelece que o uso de sistemas de IA nas escolas deve subordinar-se à intencionalidade pedagógica, preservar a agência docente, proteger categoricamente a infância e a adolescência no meio digital e combater qualquer automação desprovida de rigor ético e curricular.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[14px]">
            <div className="p-4 rounded-xl bg-white/60 border border-[rgba(31,27,22,0.06)]">
              <span className="font-semibold text-[#1f1b16] block mb-1">Centralidade Humana</span>
              A IA auxilia o processo educativo, mas jamais substitui o papel relacional e decisório do professor.
            </div>
            <div className="p-4 rounded-xl bg-white/60 border border-[rgba(31,27,22,0.06)]">
              <span className="font-semibold text-[#1f1b16] block mb-1">Salvaguarda da Infância</span>
              Plena observância ao ECA Digital (Lei 15.211/2025) e proibição de perfilamento comercial de crianças.
            </div>
            <div className="p-4 rounded-xl bg-white/60 border border-[rgba(31,27,22,0.06)]">
              <span className="font-semibold text-[#1f1b16] block mb-1">Combate ao Offloading</span>
              Travas ativas que desafiam o estudante a raciocinar, vedando o descarregamento passivo de esforço cognitivo.
            </div>
          </div>
        </div>

        {/* Matriz dos 10 Princípios do MEC */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-[13px] font-mono text-[#1d4ed8] uppercase tracking-wider block mb-1">
              Capítulo 3 • Princípios Fundamentais
            </span>
            <h2 className="text-[26px] md:text-[32px] font-serif text-[#1f1b16]">
              Os 10 Princípios do MEC Aplicados no Ecossistema
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-[#fdfbf7] border border-[rgba(31,27,22,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[14px] font-semibold text-[#1d4ed8]">
                      Princípio {item.num}
                    </span>
                    <span className="text-[11px] font-mono text-[#7b7266] bg-[#efe9df] px-2 py-0.5 rounded">
                      {item.mecRef}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-medium text-[#1f1b16] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#5e554a] mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[rgba(31,27,22,0.08)] bg-emerald-500/5 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <span className="text-[12px] font-mono text-[#047857] block font-semibold mb-1">
                    Como aplicamos na AÍ Tecnologia:
                  </span>
                  <p className="text-[13px] leading-[20px] text-[#332d25]">
                    {item.implementation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabela Comparativa: O que a IA faz vs. O que só o ser humano pode fazer */}
        <section className="mb-20 p-8 rounded-2xl bg-[#efe9df] border border-[rgba(31,27,22,0.12)]">
          <div className="mb-6">
            <span className="text-[12px] font-mono text-[#7b7266] uppercase tracking-wider block mb-1">
              Diretrizes MEC 2026 • Tabela de Capacidades
            </span>
            <h2 className="text-[24px] md:text-[28px] font-serif text-[#1f1b16]">
              O que a IA faz e o que só o Ser Humano pode fazer
            </h2>
            <p className="text-[14px] text-[#5e554a] mt-1">
              A responsabilidade ética, curricular e afetiva da educação básica é e permanecerá exclusivamente humana.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px] border border-[rgba(31,27,22,0.12)] rounded-xl overflow-hidden">
              <thead className="bg-[#ede7dc] text-[#1f1b16] font-medium">
                <tr>
                  <th className="p-3.5 border-b border-[rgba(31,27,22,0.1)] w-1/4">Dimensão</th>
                  <th className="p-3.5 border-b border-[rgba(31,27,22,0.1)] w-3/8 text-amber-900 bg-amber-500/10">Capacidade da IA (Auxiliar)</th>
                  <th className="p-3.5 border-b border-[rgba(31,27,22,0.1)] w-3/8 text-emerald-900 bg-emerald-500/10">Prerrogativa Humana Insubstituível</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(31,27,22,0.06)] bg-white/70">
                <tr>
                  <td className="p-3.5 font-medium text-[#1f1b16]">Cognição</td>
                  <td className="p-3.5 text-[#5e554a]">Identifica correlações estatísticas em grandes volumes; não compreende causalidade nem contexto sutil.</td>
                  <td className="p-3.5 text-[#1f1b16] font-medium">Compreensão genuína de causalidade, raciocínio contextual adaptativo e intencionalidade formativa.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#1f1b16]">Autocrítica</td>
                  <td className="p-3.5 text-[#5e554a]">Não checa espontaneamente o que gera; sujeita a alucinações e reprodução de preconceitos.</td>
                  <td className="p-3.5 text-[#1f1b16] font-medium">Metacognição, rigor científico, revisão de hipóteses e questionamento contínuo das próprias certezas.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#1f1b16]">Criatividade</td>
                  <td className="p-3.5 text-[#5e554a]">Recombina padrões estatísticos prévios com tendência à homogeneização.</td>
                  <td className="p-3.5 text-[#1f1b16] font-medium">Criação autêntica, intencionalidade artística e expressão ancorada em vivência social real.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#1f1b16]">Emoções e Empatia</td>
                  <td className="p-3.5 text-[#5e554a]">Infere termos emocionais a partir de padrões textuais; não tem sentimentos nem personalidade.</td>
                  <td className="p-3.5 text-[#1f1b16] font-medium">Acolhimento afetivo real, vínculo professor-aluno, sensibilidade interpessoal e cuidado ético.</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#1f1b16]">Responsabilidade</td>
                  <td className="p-3.5 text-[#5e554a]">Não possui moralidade nem responde civil ou penalmente por suas saídas.</td>
                  <td className="p-3.5 text-[#1f1b16] font-medium">Agência moral soberana: o educador responde eticamente pelas decisões pedagógicas adotadas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Matriz das Aplicações Educacionais */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-[13px] font-mono text-[#1d4ed8] uppercase tracking-wider block mb-1">
              Ecossistema em Detalhes
            </span>
            <h2 className="text-[26px] md:text-[32px] font-serif text-[#1f1b16]">
              Salvaguardas Implementadas por Aplicação
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {PRODUCTS_COMPLIANCE.map((prod) => (
              <div
                key={prod.slug}
                className="p-6 md:p-8 rounded-2xl bg-[#fdfbf7] border border-[rgba(31,27,22,0.1)] shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[rgba(31,27,22,0.08)] pb-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-[22px] font-serif text-[#1f1b16]">{prod.name}</h3>
                      <span className="text-[12px] font-mono text-[#047857] bg-[#047857]/10 px-2.5 py-0.5 rounded-full">
                        {prod.complianceSummary}
                      </span>
                    </div>
                    <p className="text-[13px] font-mono text-[#7b7266] mt-1">
                      Público: {prod.target} • Função: {prod.role}
                    </p>
                  </div>
                  <Link
                    href={`/produto/${prod.slug}`}
                    className="inline-flex items-center gap-1.5 text-[14px] text-[#1d4ed8] hover:underline font-medium"
                  >
                    Ver detalhes do produto <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="space-y-2.5">
                  <span className="text-[12px] font-mono text-[#7b7266] uppercase tracking-wider block mb-2">
                    Travas e Salvaguardas Específicas:
                  </span>
                  {prod.safeguards.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[14px] leading-[22px] text-[#463f35]">
                      <CheckCircle2 size={16} className="text-[#047857] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rodapé institucional de governança */}
        <div className="p-8 rounded-2xl bg-[#ede7dc] border border-[rgba(31,27,22,0.1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[18px] font-serif text-[#1f1b16] mb-1">
              Dúvidas sobre nossa governança pedagógica?
            </h3>
            <p className="text-[14px] text-[#5e554a]">
              Nossa equipe de especialistas pedagógicos e encarregados de privacidade está disponível para reuniões institucionais com redes de ensino.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/privacidade"
              className="text-[14px] text-[#1d4ed8] hover:underline font-medium"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-[14px] text-[#1d4ed8] hover:underline font-medium"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
