import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, UserCheck, AlertTriangle, Cpu, GraduationCap, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso e Princípios Éticos — AÍ Tecnologia e Educação",
  description:
    "Termos de uso, governança pedagógica e salvaguardas éticas das plataformas da AÍ Tecnologia e Educação alinhados às Diretrizes MEC / UNESCO 2026 e à BNCC Computação.",
  alternates: {
    canonical: "/termos",
  },
  robots: { index: true, follow: true },
};

export default function Termos() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f7f4ee] text-[#1f1b16]">
      <Navbar />

      <main className="py-16 md:py-24 px-6 md:px-8 flex-1 max-w-4xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#047857]/10 text-[#047857] text-[12px] font-mono mb-4">
          <GraduationCap size={14} />
          <span>Diretrizes MEC 2026 • Centralidade Humana • Agência Docente</span>
        </div>

        <h1 className="font-serif text-[36px] md:text-[46px] leading-[1.1] text-[#1f1b16] mb-4">
          Termos de Uso e Carta de Princípios Éticos
        </h1>

        <p className="text-[16px] md:text-[18px] leading-[28px] text-[#5e554a] mb-10">
          Condições contratuais, salvaguardas pedagógicas e compromissos éticos de utilização das ferramentas educacionais da AÍ Tecnologia e Educação (Planeja AÍ, Reforça AÍ, Redação Nota 10 AÍ e Alfabetiza AÍ), estruturados em conformidade com o <i>Documento Orientador de Inteligência Artificial na Educação Básica</i> (MEC / UNESCO 2026).
        </p>

        {/* Banner de Centralidade Humana e Human-in-the-Loop */}
        <div className="p-6 rounded-2xl bg-[#ede7dc] border border-[rgba(31,27,22,0.12)] mb-12 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#1f1b16] font-semibold text-[16px]">
            <UserCheck className="text-[#1d4ed8]" size={20} />
            Princípio Inegociável: Primazia Epistêmica do Educador (Human-in-the-Loop)
          </div>
          <p className="text-[14px] leading-[22px] text-[#463f35]">
            Nossas soluções de inteligência artificial operam exclusivamente como <strong>instrumentos de copilotagem e apoio cognitivo</strong>. Sob nenhuma circunstância a IA substitui o julgamento profissional, a empatia e a soberania pedagógica do professor. O professor é o autor, curador e autoridade final de qualquer plano, atividade ou avaliação aplicada em ambiente escolar.
          </p>
        </div>

        <div className="flex flex-col gap-10 text-[15px] leading-[26px] text-[#5e554a]">
          {/* 1. Aceitação */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">01.</span> Aceitação e Escopo do Serviço
            </h2>
            <p>
              Ao acessar, cadastrar-se ou utilizar qualquer ferramenta do ecossistema da <strong>AÍ Tecnologia e Educação Ltda.</strong>, o usuário (professor, estudante, coordenador, gestor de rede ou responsável legal) manifesta concordância integral com estes Termos de Uso e com nossa <Link href="/privacidade" className="text-[#1d4ed8] underline">Política de Privacidade</Link>.
            </p>
            <p>
              Nossos serviços destinam-se exclusivamente a finalidades formativas, didáticas e de gestão escolar no âmbito da Educação Básica (Educação Infantil, Ensino Fundamental, Ensino Médio e Educação de Jovens e Adultos - EJA), além de cursinhos preparatórios e pré-vestibulares comunitários.
            </p>
          </section>

          {/* 2. Papel da IA e Natureza Consultiva */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">02.</span> Papel Auxiliar da IA e Natureza Diagnóstica
            </h2>
            <p>
              Em alinhamento direto com o Capítulo 3 do Documento Orientador do MEC (2026):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Planejamento Escolar (Planeja AÍ):</strong> Os esboços, sugestões de sequências didáticas e adaptações curriculares (AEE/PEI) gerados são pontos de partida sugestivos. Cabe ao docente revisar, adaptar ao Projeto Político Pedagógico (PPP) da escola e validar os conteúdos antes da aplicação.</li>
              <li><strong>Diagnóstico de Redação (Redação Nota 10 AÍ):</strong> As análises de competências textuais e propostas de pontuação constituem <i>feedback formativo consultivo</i>. A IA não substitui a banca avaliadora nem a sensibilidade interpretativa do professor de Língua Portuguesa sobre a autoria, estilo e intencionalidade do texto.</li>
              <li><strong>Tutoria Socrática (Reforça AÍ):</strong> A IA atua na condução de perguntas graduadas que estimulam o aluno a pensar, sem jamais emitir decisões finais sobre aprovação, reprovação ou classificação acadêmica.</li>
              <li><strong>Alfabetização Fonética (Alfabetiza AÍ):</strong> As respostas fonéticas auxiliam o ritmo de aprendizagem de crianças, exigindo a mediação presencial do professor alfabetizador ou dos pais.</li>
            </ul>
          </section>

          {/* 3. Alerta de Alucinação e Limitações dos Modelos */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">03.</span> Transparência Algorítmica e Aviso de Risco de Alucinação
            </h2>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-600/20 text-[#1f1b16]">
              <div className="flex items-center gap-2 font-semibold mb-1">
                <AlertTriangle size={18} className="text-amber-700" />
                Aviso Mandatório sobre Modelos Probabilísticos de Linguagem
              </div>
              <p className="text-[14px] leading-[22px] text-[#463f35]">
                Sistemas de Inteligência Artificial generativa operam por predição estatística de padrões linguísticos e <strong>não possuem discernimento factual, autocrítica ou senso comum humano</strong>. Como consequência inerente à tecnologia, os modelos podem apresentar "alucinações" (geração de fatos inexatos, citações fictícias, datas incorretas ou raciocínios equivocados). O usuário educador deve exercer rigor crítico e checagem de fontes previamente à utilização do material com estudantes.
              </p>
            </div>
          </section>

          {/* 4. Salvaguardas contra Descarregamento Cognitivo */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">04.</span> Combate ao Descarregamento Cognitivo (Anti-Cognitive Offloading)
            </h2>
            <p>
              O <strong>Princípio 2 do MEC (2026)</strong> alerta expressamente para o risco de acomodação intelectual e atrofia do pensamento crítico provocado pelo consumo passivo de respostas sintéticas prontas.
            </p>
            <p>
              Por esse motivo, nossas ferramentas discentes incorporam <strong>travas pedagógicas ativas</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>O Reforça AÍ é proibido de fornecer respostas diretas aos deveres de casa, limitando-se a perguntas investigativas e pistas socráticas;</li>
              <li>O Redação Nota 10 AÍ não reescreve redações prontas para o aluno, mas oferece perguntas de reflexão sobre coesão, argumentação e ortografia;</li>
              <li>Incentivamos rotinas "desplugadas", recomendando a alternância com momentos de escrita à mão, leitura em livros físicos e debate coletivo.</li>
            </ul>
          </section>

          {/* 5. Equidade, Antirracismo e Diversidade Epistêmica */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">05.</span> Equidade e Conformidade com as Leis 10.639/03 e 11.645/08
            </h2>
            <p>
              Em conformidade com o <strong>Princípio 7 do MEC</strong> e a legislação educacional brasileira, os modelos e prompts das plataformas são calibrados para combater vieses discriminatórios (de gênero, raça, etnia, classe social e regionalismo) e valorizar a história e a cultura afro-brasileira e dos povos indígenas, promovendo pluralismo de visões e equidade de oportunidades de aprendizagem.
            </p>
          </section>

          {/* 6. Propriedade Intelectual e Autoria dos Materiais */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">06.</span> Propriedade Intelectual e Titularidade de Conteúdos
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plataforma e Código:</strong> Todos os sistemas, códigos-fonte, algoritmos, marcas, identidade visual e arquiteturas de software pertencem com exclusividade à AÍ Tecnologia e Educação Ltda. e estão protegidos perante o INPI (Instituto Nacional da Propriedade Industrial) e as leis de patentes e direitos autorais.</li>
              <li><strong>Conteúdo Produzido por Professores e Alunos:</strong> Planos de aula, redações, anotações e roteiros adaptados pelos educadores e estudantes permanecem sob a titularidade e autoria moral de seus respectivos criadores e instituições educacionais contratantes. A AÍ Tecnologia e Educação não reivindica direitos autorais sobre a produção pedagógica gerada pelos usuários.</li>
            </ul>
          </section>

          {/* 7. Uso Responsável e Condutas Proibidas */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[20px] font-medium text-[#1f1b16] flex items-center gap-2">
              <span className="font-mono text-[14px] text-[#1d4ed8]">07.</span> Condutas Proibidas e Uso Indevido
            </h2>
            <p>É estritamente vedado ao usuário:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Inserir dados pessoais desnecessários de estudantes menores de idade nas caixas de texto ou prompts abertos;</li>
              <li>Utilizar as plataformas para gerar conteúdos difamatórios, fraudulentos, com teor discriminatório ou que violem os Direitos Humanos;</li>
              <li>Tentar descompilar, realizar engenharia reversa, extrair sistematicamente dados (<i>scraping</i>) ou burlar mecanismos de controle de quota e autenticação;</li>
              <li>Apresentar saídas cruas de IA como se fossem avaliações humanas conclusivas sem a devida mediação profissional.</li>
            </ul>
          </section>

          {/* 8. Disponibilidade, Suporte e Foro */}
          <section className="flex flex-col gap-3 p-6 rounded-2xl bg-[#efe9df] border border-[rgba(31,27,22,0.1)]">
            <h2 className="text-[18px] font-medium text-[#1f1b16] flex items-center gap-2">
              <BookOpen size={20} className="text-[#1d4ed8]" />
              Disponibilidade, Atualizações e Contato Legal
            </h2>
            <p className="text-[14px] leading-[22px]">
              Estes termos poderão ser revisados periodicamente para acompanhar as atualizações regulatórias da ANPD, do Conselho Nacional de Educação (CNE) e do Ministério da Educação. Mudanças substanciais serão comunicadas previamente aos gestores escolares e professores cadastrados.
            </p>
            <div className="text-[14px] font-mono text-[#1f1b16] pt-1">
              <p>Contato Jurídico e Ouvidoria: <a href="mailto:contato@aitecnologia.xyz" className="text-[#1d4ed8] underline">contato@aitecnologia.xyz</a></p>
              <p>Foro: Comarca de Queimados / Rio de Janeiro, Brasil.</p>
            </div>
            <div className="pt-3 border-t border-[rgba(31,27,22,0.1)] flex items-center gap-4 text-[13px]">
              <Link href="/conformidade" className="text-[#1d4ed8] hover:underline font-medium">
                Conheça a Matriz de Conformidade MEC 2026 →
              </Link>
              <Link href="/privacidade" className="text-[#5e554a] hover:text-[#1f1b16]">
                Leia a Política de Privacidade e LGPD →
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
