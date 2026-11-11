import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, FileText, CheckCircle2, UserCheck, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade, LGPD e ECA Digital — AÍ Tecnologia e Educação",
  description:
    "Diretrizes rigorosas de governança de dados para crianças, adolescentes e educadores em conformidade com a LGPD (Lei nº 13.709/2018), ECA Digital (Lei nº 15.211/2025) e as Diretrizes MEC 2026.",
  alternates: {
    canonical: "/privacidade",
  },
  robots: { index: true, follow: true },
};

export default function Privacidade() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f7f4ee] text-[#1f1b16]">
      <Navbar />

      <main className="py-16 md:py-24 px-6 md:px-8 flex-1 max-w-4xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] text-[12px] font-mono mb-4">
          <ShieldCheck size={14} />
          <span>LGPD • ECA Digital (Lei nº 15.211/2025) • Diretrizes MEC 2026</span>
        </div>

        <h1 className="font-serif text-[36px] md:text-[46px] leading-[1.1] text-[#1f1b16] mb-4">
          Política de Privacidade e Governança de Dados
        </h1>

        <p className="text-[16px] md:text-[18px] leading-[28px] text-[#5e554a] mb-10">
          Governança de dados de estudantes, professores e gestores escolares da Educação Básica, estruturada sob o princípio do melhor interesse da criança e do adolescente, privacidade por padrão (<i>privacy by default</i>) e as diretrizes do Ministério da Educação (MEC / UNESCO 2026).
        </p>

        {/* Resumo executivo / Destaque de salvaguardas */}
        <div className="p-6 rounded-2xl bg-[#fdfbf7] border border-[rgba(31,27,22,0.12)] shadow-sm mb-12 flex flex-col gap-4">
          <h2 className="text-[17px] font-medium text-[#1f1b16] flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#047857]" />
            Compromissos Fundamentais de Segurança e Não-Vigilância
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px] leading-[22px] text-[#5e554a]">
            <div className="p-3 rounded-xl bg-white/70 border border-[rgba(31,27,22,0.06)]">
              <strong className="text-[#1f1b16] block mb-1">Zero Perfilamento Comercial</strong>
              Proibição categórica de perfilamento comportamental e monetização de dados de crianças e adolescentes (Art. 22 do ECA Digital).
            </div>
            <div className="p-3 rounded-xl bg-white/70 border border-[rgba(31,27,22,0.06)]">
              <strong className="text-[#1f1b16] block mb-1">Repúdio à Vigilância Massiva</strong>
              Não utilizamos reconhecimento facial, leitura biométrica contínua ou detecção automatizada de emoções em sala de aula (Princípio 6 MEC 2026).
            </div>
            <div className="p-3 rounded-xl bg-white/70 border border-[rgba(31,27,22,0.06)]">
              <strong className="text-[#1f1b16] block mb-1">Zero Treinamento Externo</strong>
              Nenhum dado discente (redações, áudios, produções) é utilizado para treinar modelos fundacionais públicos de inteligência artificial de terceiros.
            </div>
            <div className="p-3 rounded-xl bg-white/70 border border-[rgba(31,27,22,0.06)]">
              <strong className="text-[#1f1b16] block mb-1">Biometria de Voz Efêmera</strong>
              No Alfabetiza AÍ, amostras de áudio são processadas estritamente em tempo real para devolutiva fonética e descartadas imediatamente após a inferência (Art. 11 LGPD).
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-[15px] leading-[26px] text-[#5e554a]">
          {/* Seção 1 */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">01.</span> Arcabouço Normativo Aplicável
            </h2>
            <p>
              Esta Política de Privacidade disciplina o tratamento de dados pessoais em todas as plataformas educacionais desenvolvidas pela <strong>AÍ Tecnologia e Educação</strong> (Planeja AÍ, Reforça AÍ, Redação Nota 10 AÍ e Alfabetiza AÍ), em cumprimento estrito a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#463f35]">
              <li><strong>Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD)</strong>, com destaque para o Art. 14 (melhor interesse da criança e do adolescente) e Art. 11 (proteção qualificada a dados sensíveis);</li>
              <li><strong>Lei nº 15.211/2025 (Estatuto da Criança e do Adolescente Digital — ECA Digital)</strong>, especialmente os Arts. 7º (privacidade e proteção de dados desde a concepção e por padrão), 8º (dever de avaliação de impacto no desenvolvimento infanto-juvenil) e 22 (vedação de perfilamento comercial);</li>
              <li><strong>Diretrizes do Ministério da Educação (MEC / UNESCO 2026)</strong> expressas no <i>Documento Orientador sobre caminhos curriculares e práticas éticas de uso de IA nas escolas</i>;</li>
              <li><strong>Resoluções do CNE (CNE/CP nº 1/2022 e CNE/CEB nº 2/2025)</strong> que integram a Educação Digital, Midiática e Computação à Educação Básica.</li>
            </ul>
          </section>

          {/* Seção 2 */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">02.</span> Princípio da Minimização e Coleta Estrita
            </h2>
            <p>
              Operamos segundo a doutrina da coleta mínima indispensável (<i>data minimization</i>). Não solicitamos nem armazenamos número de documentos pessoais (como CPF ou RG de estudantes), endereços residenciais ou dados de geolocalização exata de alunos em nenhuma das soluções pedagógicas.
            </p>
            <div className="overflow-x-auto my-2">
              <table className="w-full text-left text-[14px] border border-[rgba(31,27,22,0.12)] rounded-lg overflow-hidden">
                <thead className="bg-[#ede7dc] text-[#1f1b16] font-medium">
                  <tr>
                    <th className="p-3 border-b border-[rgba(31,27,22,0.1)]">Aplicação</th>
                    <th className="p-3 border-b border-[rgba(31,27,22,0.1)]">Dados Tratados</th>
                    <th className="p-3 border-b border-[rgba(31,27,22,0.1)]">Finalidade Específica</th>
                    <th className="p-3 border-b border-[rgba(31,27,22,0.1)]">Retenção</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(31,27,22,0.06)] bg-white/50">
                  <tr>
                    <td className="p-3 font-medium text-[#1f1b16]">Planeja AÍ</td>
                    <td className="p-3">Nome do docente, escola, componente curricular e etapa de ensino.</td>
                    <td className="p-3">Customização de plano de aula e adequação ao modelo oficial da rede.</td>
                    <td className="p-3">Durante a vigência da conta docente.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#1f1b16]">Reforça AÍ</td>
                    <td className="p-3">Pseudônimo do estudante, foto da questão do caderno, dúvidas socráticas.</td>
                    <td className="p-3">Mediação socrática de dúvidas e diagnóstico de lacunas em habilidades BNCC.</td>
                    <td className="p-3">Ciclo letivo escolar, com opção de expurgo periódico.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#1f1b16]">Redação Nota 10 AÍ</td>
                    <td className="p-3">Texto da proposta de redação e produção textual do estudante.</td>
                    <td className="p-3">Análise diagnóstica formativa estruturada nas 5 competências pedagógicas.</td>
                    <td className="p-3">Período de avaliação diagnóstica escolar.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#1f1b16]">Alfabetiza AÍ</td>
                    <td className="p-3">Áudio de voz em tempo real para fonética da alfabetização.</td>
                    <td className="p-3">Devolutiva fonética instantânea para mediação em sala.</td>
                    <td className="p-3"><strong>Descarte imediato pós-inferência</strong> (zero armazenamento persistente).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">03.</span> Proteção de Dados de Menores e ECA Digital (Lei nº 15.211/2025)
            </h2>
            <p>
              O tratamento de dados de crianças e adolescentes é regido pelos artigos 7º, 8º e 22 da Lei nº 15.211/2025:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Privacidade por Padrão (Art. 7º):</strong> Todas as configurações de fábrica das nossas plataformas vêm com as proteções de privacidade máximas ativadas. Nenhum recurso que amplie compartilhamento de dados pode ser pré-selecionado.</li>
              <li><strong>Auditoria de Impacto e Bem-Estar Mental (Art. 8º):</strong> As plataformas educacionais são avaliadas para prevenir mecanismos aditivos, <i>dark patterns</i> ou elementos de engajamento predatório que prejudiquem a concentração, o tempo de sono ou a sociabilidade do estudante.</li>
              <li><strong>Vedações Categóricas (Art. 22):</strong> É proibida a criação de perfis comportamentais para marketing, recomendação de produtos de consumo ou venda de relatórios de preferência infantil a anunciantes.</li>
            </ul>
          </section>

          {/* Seção 4 */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">04.</span> Salvaguardas Especiais: Biometria de Voz e Não-Vigilância
            </h2>
            <p>
              Alinhados ao <strong>Princípio 6 (Proteção de dados e não-vigilância)</strong> do Documento Orientador do MEC (2026):
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-600/20 text-[#1f1b16]">
                <strong className="block mb-1">Tratamento de Voz no Alfabetiza AÍ (Art. 11 da LGPD)</strong>
                <p className="text-[14px] text-[#5e554a]">
                  A voz de crianças é classificada como dado biométrico sensível. No Alfabetiza AÍ, o sinal de áudio capturado durante atividades de soletração é transmitido de forma cifrada (TLS 1.3), processado em memória volátil exclusivamente para verificar a correspondência grafema-fonema, e imediatamente destruído. Nenhuma gravação sonora é arquivada, nem utilizada para reconhecimento biométrico de identidade, nem cedida para alimentar bancos de voz de big techs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 text-[#1f1b16]">
                <strong className="block mb-1">Rejeição Explícita de Reconhecimento Facial e Emoções</strong>
                <p className="text-[14px] text-[#5e554a]">
                  Rechaçamos expressamente o uso de visão computacional para escaneamento facial massivo, contagem de piscar de olhos, monitoramento de microexpressões faciais ou inferência afetivo-emocional automatizada em ambiente escolar. Consideramos tais práticas contrárias ao bem-estar pedagógico e à integridade dos estudantes.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 5 */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">05.</span> Não-Utilização de Dados Escolares para Treino de IA
            </h2>
            <p>
              Ao utilizar provedores de infraestrutura de inferência (como modelos de linguagem de código aberto e instâncias corporativas dedicadas), mantemos cláusulas contratuais estritas de <i>Zero Data Retention for Training</i>. <strong>Planos de aula, redações de estudantes, cadernos fotografados e interações socráticas não são utilizados para aperfeiçoar modelos fundacionais de terceiros.</strong>
            </p>
          </section>

          {/* Seção 6 */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">06.</span> Segurança da Informação e Criptografia
            </h2>
            <p>
              Empregamos controles técnicos de padrão bancário e governamental:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Criptografia de ponta a ponta em trânsito com TLS 1.3 / HTTPS;</li>
              <li>Criptografia de dados em repouso com algoritmo AES-256;</li>
              <li>Controle de acesso rigoroso baseado em papéis (RBAC — docente, coordenação, gestor de rede);</li>
              <li>Pseudonimização e segregação lógica de bases de dados entre redes municipais e escolas clientes;</li>
              <li>Rotinas regulares de auditoria e testes de vulnerabilidade de software.</li>
            </ul>
          </section>

          {/* Seção 7 */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">07.</span> Direitos do Titular e Portabilidade
            </h2>
            <p>
              Educadores, estudantes e seus responsáveis legais podem, a qualquer momento e sem custos, exercer os direitos assegurados pelo Art. 18 da LGPD:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confirmação da existência de tratamento e acesso aos relatórios escolares pertinentes;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
              <li><strong>Portabilidade e Interoperabilidade (Princípio 9 MEC):</strong> Exportação de dados, planos de aula e relatórios formativos em formatos abertos e interoperáveis (JSON, CSV, PDF), sem aprisionamento tecnológico (<i>lock-in</i>);</li>
              <li>Revogação do consentimento concedido pelos pais ou responsáveis legais.</li>
            </ul>
          </section>

          {/* Seção 8 */}
          <section className="flex flex-col gap-3 p-6 rounded-2xl bg-[#efe9df] border border-[rgba(31,27,22,0.1)]">
            <h2 className="text-[18px] font-medium text-[#1f1b16] flex items-center gap-2">
              <UserCheck size={20} className="text-[#1d4ed8]" />
              Encarregado pelo Tratamento de Dados (DPO) e Contato
            </h2>
            <p className="text-[14px] leading-[22px]">
              Para dúvidas sobre esta política, solicitações de exclusão de dados de menores ou exercício de direitos de titular, contate o Encarregado pelo Tratamento de Dados Pessoais (DPO) da AÍ Tecnologia e Educação:
            </p>
            <div className="text-[14px] font-mono text-[#1f1b16] pt-1">
              <p>Canal Oficial: <a href="mailto:dpo@aitecnologia.xyz" className="text-[#1d4ed8] underline">dpo@aitecnologia.xyz</a></p>
              <p>Contato Institucional: <a href="mailto:contato@aitecnologia.xyz" className="text-[#1d4ed8] underline">contato@aitecnologia.xyz</a></p>
              <p>Prazo de Resposta: Até 15 (quinze) dias corridos conforme os parâmetros regulatórios da ANPD.</p>
            </div>
            <div className="pt-3 border-t border-[rgba(31,27,22,0.1)] flex items-center gap-4 text-[13px]">
              <Link href="/conformidade" className="text-[#1d4ed8] hover:underline font-medium">
                Ver Matriz de Conformidade MEC 2026 →
              </Link>
              <Link href="/termos" className="text-[#5e554a] hover:text-[#1f1b16]">
                Consultar Termos de Uso →
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
