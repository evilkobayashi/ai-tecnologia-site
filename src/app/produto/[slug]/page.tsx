import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck, GraduationCap, AlertCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const productsData = {
  "planeja-ai": {
    name: "Planeja AÍ",
    status: "Em produção",
    accentHex: "#1d4ed8",
    accentSoft: "rgba(29, 78, 216, 0.1)",
    accentBorder: "rgba(29, 78, 216, 0.22)",
    bncc: "EF01–EM13 • SEMED / Privada",
    audience: "Professores, coordenadores pedagógicos e secretarias de educação",
    description:
      "Planos de aula diários, semanais e adaptações AEE/PEI gerados diretamente no formulário oficial da sua rede ou escola.",
    longDescription:
      "Em vez de entregar textos soltos que obrigam o professor a recortar e colar em tabelas, o Planeja AÍ já gera o documento diagramado no layout exigido pela sua Secretaria de Educação, escola particular ou cursinho. Inclui cabeçalho institucional, códigos e habilidades da BNCC, objetivos de conhecimento, recursos didáticos e campo de visto da coordenação.",
    features: [
      "Diagramação automática no modelo oficial da sua SEMED, SME ou escola privada",
      "Alinhamento integral com códigos e competências da BNCC",
      "Geração de planos de Atendimento Educacional Especializado (AEE e PEI)",
      "Ponte pedagógica que sugere aulas de reforço com base nas dúvidas da turma",
      "Exportação pronta para impressão e assinatura em PDF e Word (DOCX)",
    ],
    mecCompliance: {
      badge: "Conformidade MEC 2026 • Teacher-in-the-Loop & BNCC Computação",
      principleHighlight: "Princípios 1, 4, 5 e 10 (Centralidade Humana, Agência Docente e Alerta de Alucinação)",
      summary: "Preserva a agência incondicional do professor sobre o currículo e exige curadoria ativa antes da aplicação em sala de aula.",
      safeguards: [
        "Workflow Teacher-in-the-Loop com confirmação explícita de curadoria pedagógica prévia pelo educador",
        "Aviso institucional permanente de risco de alucinação probabilística e dever de checagem de fontes",
        "Incorporação dos eixos de Pensamento Computacional e Cultura Digital (Resolução CNE/CP 1/2022 e CNE/CEB 2/2025)",
        "Sugestões dedicadas para atividades de IA Desplugada (dinâmicas concretas sem tela em sala de aula)",
      ],
    },
    platformUrl: "https://planeja.aitecnologia.xyz",
    artifactTitle: "Exemplo de saída • Plano Semanal Oficial (A4)",
    artifactMeta: "Turma 9º Ano • Matemática",
    artifactRows: [
      ["Segunda-feira", "EF09MA06", "Funções: relação de dependência unívoca entre duas variáveis"],
      ["Quarta-feira", "EF09MA06", "Atividade prática de recomposição a partir do mapa de dúvidas"],
      ["Sexta-feira", "EF09MA09", "Avaliação formativa + ficha adaptada PEI para inclusão"],
    ],
  },
  "reforca-ai": {
    name: "Reforça AÍ",
    status: "Em produção",
    accentHex: "#b45309",
    accentSoft: "rgba(180, 83, 9, 0.1)",
    accentBorder: "rgba(180, 83, 9, 0.22)",
    bncc: "EF06MA01 • EF09MA06",
    audience: "Estudantes do Ensino Fundamental II e Ensino Médio",
    description:
      "Tutor socrático que lê a foto do caderno e conduz o aluno por perguntas passo a passo, sem entregar a resposta pronta.",
    longDescription:
      "Enquanto ferramentas genéricas de IA entregam o dever resolvido e estimulam a cópia passiva, o Reforça AÍ funciona como um professor particular paciente. O aluno fotografa a questão no caderno ou livro didático, o sistema isola o enunciado via visão computacional e inicia um diálogo socrático com pistas graduais até que o próprio estudante construa o raciocínio.",
    features: [
      "Leitura de fórmulas, gráficos e cadernos manuscritos por foto (OCR)",
      "Trava pedagógica socrática que impede a entrega do dever pronto",
      "Progressão gamificada por constância de estudo e autonomia",
      "Mapeamento silencioso das principais dúvidas por habilidade BNCC",
      "Bússola vocacional integrada para escolha de cursos técnicos (ETEC e IFs)",
    ],
    mecCompliance: {
      badge: "Conformidade MEC 2026 • Anti-Descarregamento Cognitivo",
      principleHighlight: "Princípios 2, 5, 6 e 8 (Salvaguarda de Aprendizagem e Proteção de Menores)",
      summary: "Impede o cognitive offloading por meio de travas socráticas ativas que obrigam o estudante a raciocinar.",
      safeguards: [
        "Trava socrática estrita: a IA é impedida de fornecer respostas diretas aos deveres escolares",
        "Aviso metacognitivo discente ressaltando que o raciocínio e a resolução ativa pertencem ao aluno",
        "Dashboard do professor com controle total de recalibração e override das trilhas sugeridas",
        "Conformidade integral com o ECA Digital (Lei 15.211/2025): zero perfilamento comercial de crianças",
      ],
    },
    platformUrl: "https://reforca.aitecnologia.xyz",
    artifactTitle: "Exemplo de sessão • Mediação Socrática",
    artifactMeta: "Equação do 1º Grau • 2x + 6 = 18",
    artifactRows: [
      ["1. Leitura OCR", "EF07MA18", "Equação identificada na foto do caderno: 2x + 6 = 18"],
      ["2. Pergunta guia", "Mediação", "Qual operação aplicamos aos dois lados para remover o + 6?"],
      ["3. Registro", "Ponte BNCC", "Domínio registrado e enviado ao painel do professor"],
    ],
  },
  "redacao-nota-10-ia": {
    name: "Redação Nota 10 AÍ",
    status: "Em produção",
    accentHex: "#be123c",
    accentSoft: "rgba(190, 18, 60, 0.1)",
    accentBorder: "rgba(190, 18, 60, 0.22)",
    bncc: "EM13LP01 • Matriz ENEM C1–C5",
    audience: "Ensino Médio, pré-vestibular e concursos",
    description:
      "Avaliação diagnóstica de redações manuscritas ou digitadas nas cinco competências oficiais do ENEM, FUVEST e VUNESP.",
    longDescription:
      "Permite que o aluno receba devolutiva detalhada em segundos após escrever, enquanto o raciocínio ainda está fresco. O sistema avalia de 0 a 200 pontos cada uma das cinco competências da matriz do INEP, indica os desvios gramaticais e de coesão diretamente nas linhas do texto e audita a originalidade contra cópias da internet.",
    features: [
      "Avaliação estruturada nas 5 competências oficiais do ENEM (0 a 1000 pontos)",
      "Leitura de folha de redação manuscrita por foto ou texto digitado",
      "Apontamento linha a linha de desvios de norma culta, crase e conectivos",
      "Verificação de originalidade e repertório sociocultural",
      "Histórico de evolução da turma por competência para o professor de redação",
    ],
    mecCompliance: {
      badge: "Conformidade MEC 2026 • Parecer Consultivo e Primazia Docente",
      principleHighlight: "Princípios 1, 3, 5 e 10 (Soberania Avaliativa e Transparência de Critérios)",
      summary: "Laudos diagnósticos de apoio formativo, preservando inalterada a autoridade da banca examinadora e do professor.",
      safeguards: [
        "Aviso explícito de status consultivo e formativo, não constituindo veredito acadêmico sumário",
        "Preservação da primazia avaliativa do professor de Língua Portuguesa e garantia de revisão humana",
        "Explicabilidade minuciosa das notas por competência com apontamentos linguísticos objetivos",
        "Vedação categórica de retenção ou cessão das redações escolares para treino de modelos comerciais",
      ],
    },
    platformUrl: "https://redacao.aitecnologia.xyz",
    artifactTitle: "Exemplo de laudo • Matriz Oficial ENEM",
    artifactMeta: "Nota global: 920 / 1000",
    artifactRows: [
      ["Competência 1", "160 / 200", "Revisar pontuação antes de conectivos conclusivos (linha 14)"],
      ["Competência 2 e 3", "400 / 400", "Repertório produtivo e projeto de texto articulado"],
      ["Competência 4 e 5", "360 / 400", "Proposta de intervenção completa com 5 elementos válidos"],
    ],
  },
  "alfabetiza-ai": {
    name: "Alfabetiza AÍ",
    status: "Em produção",
    accentHex: "#047857",
    accentSoft: "rgba(4, 120, 87, 0.1)",
    accentBorder: "rgba(4, 120, 87, 0.22)",
    bncc: "EF01LP02 • EF15LP01",
    audience: "Anos iniciais, estudantes neurodivergentes (TEA/TDAH) e turmas de EJA",
    description:
      "Ambiente de letramento e consciência fonológica 100% por voz, sem necessidade de digitação.",
    longDescription:
      "Projetado para eliminar a barreira do teclado no início da alfabetização. Crianças pequenas, estudantes com TEA ou TDAH e jovens e adultos da EJA interagem apenas conversando pelo microfone do celular ou computador. O motor fonético avalia a pronúncia de fonemas, sílabas e palavras em tempo real, respondendo com acolhimento e sem sobrecarga visual.",
    features: [
      "Interação 100% controlada por voz, sem menus complexos ou teclado",
      "Análise fonética em tempo real de vogais, encontros consonantais e sílabas",
      "Interface de baixo estímulo visual adequada para estudantes com TEA e TDAH",
      "Trilha específica para Educação de Jovens e Adultos (EJA) sem infantilização",
      "Relatório de evolução fonêmica alinhado às habilidades EF01LP e EF15LP da BNCC",
    ],
    mecCompliance: {
      badge: "Conformidade MEC 2026 • ECA Digital & Biometria de Voz Efêmera",
      principleHighlight: "Princípios 6, 7 e 8 (Proteção Integral de Menores e Não-Vigilância)",
      summary: "Tratamento de voz infantil estritamente em tempo real, com descarte imediato e zero gravação persistente.",
      safeguards: [
        "Áudios processados exclusivamente em tempo real para devolutiva fonética e destruídos em memória volátil",
        "Conformidade com o Art. 11 e 14 da LGPD e Arts. 7º, 8º e 22 do ECA Digital (Lei 15.211/2025)",
        "Exigência mandatória de mediação pedagógica em sala ou supervisão parental ativa",
        "Recomendação integrada de dinâmicas corporais, motricidade fina e práticas lúdicas sem tela",
      ],
    },
    platformUrl: "https://alfabetiza.aitecnologia.xyz",
    artifactTitle: "Exemplo de trilha • Escuta Fonética por Voz",
    artifactMeta: "Consciência silábica • Sem digitação",
    artifactRows: [
      ["Estímulo sonoro", "EF01LP05", "Pronúncia guiada da palavra dividida em sílabas: BO — LA"],
      ["Escuta ativa", "Fonética", "Reconhecimento vocal da sílaba tônica [BÓ] sem teclado"],
      ["Relatório docente", "EF15LP01", "Progresso salvo no mapa de leitura individual da turma"],
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData[slug as keyof typeof productsData];
  if (!product) return {};

  const title = `${product.name} — AÍ Tecnologia e Educação`;
  const url = `https://www.aitecnologia.xyz/produto/${slug}`;

  return {
    title,
    description: product.description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url,
      siteName: "AÍ Tecnologia",
      locale: "pt_BR",
      title,
      description: product.description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.description,
    },
  };
}

export default async function ProdutoPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = productsData[resolvedParams.slug as keyof typeof productsData];

  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    url: product.platformUrl,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
    description: product.description,
    provider: {
      "@type": "Organization",
      name: "AÍ Tecnologia e Educação",
      url: "https://www.aitecnologia.xyz",
    },
  };

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-[#1c1915] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8">
          <Link
            href="/#produtos"
            className="inline-flex items-center gap-2 text-[14px] leading-5 text-[#574f45] hover:text-[#1c1915] transition-colors duration-150 mb-10"
          >
            <ArrowLeft size={16} strokeWidth={1.5} className="text-[#786f63]" />
            <span>Voltar para o ecossistema</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left column: Editorial overview */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="px-2.5 py-0.5 rounded-[4px] font-mono text-[12px] leading-4 font-medium tabular-nums"
                  style={{
                    backgroundColor: product.accentSoft,
                    color: product.accentHex,
                    border: `1px solid ${product.accentBorder}`,
                  }}
                >
                  {product.bncc}
                </span>
                <span className="px-2.5 py-0.5 rounded-[4px] bg-[#047857]/10 text-[#047857] font-mono text-[12px] leading-4">
                  {product.status}
                </span>
                <span className="px-2.5 py-0.5 rounded-[4px] bg-[#1d4ed8]/10 text-[#1d4ed8] font-mono text-[12px] leading-4 flex items-center gap-1">
                  <ShieldCheck size={12} />
                  MEC 2026 Auditado
                </span>
              </div>

              <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-[#1c1915]">
                {product.name}
              </h1>

              <p className="text-[18px] md:text-[20px] leading-[28px] text-[#574f45] max-w-[36rem]">
                {product.description}
              </p>

              <div className="pt-4 border-t border-[rgba(28,25,21,0.09)]">
                <p className="font-mono text-[12px] leading-4 text-[#786f63] mb-2">Público atendido</p>
                <p className="text-[15px] leading-[22px] text-[#1c1915] font-medium">{product.audience}</p>
              </div>

              <div className="pt-4 border-t border-[rgba(28,25,21,0.09)]">
                <h2 className="text-[18px] leading-6 font-medium text-[#1c1915] mb-3">
                  Funcionamento pedagógico
                </h2>
                <p className="text-[15px] leading-[24px] text-[#574f45]">{product.longDescription}</p>
              </div>

              {/* Seção de Conformidade Ética MEC 2026 */}
              <div className="pt-4 border-t border-[rgba(28,25,21,0.09)]">
                <div className="p-5 rounded-2xl bg-[#ede7db] border border-[rgba(28,25,21,0.1)] flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} className="text-[#047857]" />
                      <h3 className="text-[15px] font-semibold text-[#1c1915]">
                        {product.mecCompliance.badge}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#786f63]">MEC / UNESCO</span>
                  </div>

                  <p className="text-[13px] leading-[20px] text-[#574f45]">
                    {product.mecCompliance.summary}
                  </p>

                  <div className="pt-2 border-t border-[rgba(28,25,21,0.08)] space-y-2">
                    {product.mecCompliance.safeguards.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[13px] leading-[19px] text-[#1c1915]">
                        <Check size={14} className="text-[#047857] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[12px] font-mono text-[#786f63]">
                    <span>{product.mecCompliance.principleHighlight}</span>
                    <Link
                      href="/conformidade"
                      className="text-[#1d4ed8] hover:underline font-sans font-medium inline-flex items-center gap-1"
                    >
                      Ver Matriz Completa <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={product.platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-5 rounded-[8px] text-white text-[14px] leading-5 font-medium inline-flex items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-[opacity,transform] duration-150"
                  style={{ backgroundColor: product.accentHex }}
                >
                  <span>Acessar {product.name}</span>
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
                <Link
                  href="/#contato"
                  className="h-11 px-5 rounded-[8px] bg-[#ede7db] border border-[rgba(28,25,21,0.09)] text-[#1c1915] text-[14px] leading-5 font-medium inline-flex items-center hover:bg-[#e3dccd] transition-colors duration-150"
                >
                  Solicitar implantação na escola
                </Link>
              </div>
            </div>

            {/* Right column: Real artifact & technical specifications */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-[16px] bg-[#ede7db] p-2 border border-[rgba(28,25,21,0.09)]">
                <div className="rounded-[10px] bg-[#fcfaf5] border border-[rgba(28,25,21,0.09)] overflow-hidden">
                  <div className="h-1 w-full" style={{ backgroundColor: product.accentHex }} />
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-[rgba(28,25,21,0.09)]">
                      <span className="font-mono text-[12px] leading-4 text-[#786f63]">
                        {product.artifactTitle}
                      </span>
                      <span
                        className="font-mono text-[12px] leading-4 font-medium"
                        style={{ color: product.accentHex }}
                      >
                        {product.artifactMeta}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-col divide-y divide-[rgba(28,25,21,0.09)]">
                      {product.artifactRows.map(([col1, col2, col3]) => (
                        <div key={col1} className="py-3 flex flex-col gap-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[13px] leading-5 font-medium text-[#1c1915]">{col1}</span>
                            <span
                              className="px-2 py-0.5 rounded-[4px] font-mono text-[12px] leading-4 tabular-nums"
                              style={{
                                backgroundColor: product.accentSoft,
                                color: product.accentHex,
                              }}
                            >
                              {col2}
                            </span>
                          </div>
                          <p className="text-[13px] leading-5 text-[#574f45]">{col3}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[12px] bg-[#fcfaf5] border border-[rgba(28,25,21,0.09)] p-6">
                <h2 className="text-[16px] leading-6 font-medium text-[#1c1915] mb-4">
                  Recursos incluídos na plataforma
                </h2>
                <ul className="flex flex-col gap-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[14px] leading-5 text-[#574f45]">
                      <Check
                        size={16}
                        strokeWidth={1.5}
                        style={{ color: product.accentHex }}
                        className="shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
