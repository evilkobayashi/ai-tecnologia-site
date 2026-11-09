import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso — AÍ Tecnologia e Educação",
  description:
    "Termos e condições de uso das plataformas educacionais da AÍ Tecnologia e Educação para escolas, redes e usuários.",
  alternates: {
    canonical: "/termos",
  },
  robots: { index: true, follow: true },
};

export default function Termos() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f7f4ee] text-[#1f1b16]">
      <Navbar />

      <main className="py-16 md:py-24 px-6 md:px-8 flex-1 max-w-3xl mx-auto w-full">
        <span className="bncc-code mb-4">Documento institucional</span>
        <h1 className="font-serif text-[36px] md:text-[44px] leading-[1.1] text-[#1f1b16] mb-8">
          Termos de uso
        </h1>

        <div className="flex flex-col gap-6 text-[15px] leading-[24px] text-[#5e554a]">
          <p>
            Bem-vindo aos Termos de Uso da AÍ Tecnologia e Educação. Ao acessar ou utilizar nossas plataformas educacionais (Planeja AÍ, Reforça AÍ, Redação Nota 10 AÍ e Alfabetiza AÍ), você concorda com as condições descritas abaixo.
          </p>

          <div>
            <h2 className="text-[18px] leading-6 font-medium text-[#1f1b16] mb-2">
              1. Aceitação dos termos
            </h2>
            <p>
              Ao utilizar nossos serviços, o usuário ou instituição de ensino declara ter lido, compreendido e aceitado estes Termos de Uso.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] leading-6 font-medium text-[#1f1b16] mb-2">
              2. Finalidade pedagógica
            </h2>
            <p>
              Nossas plataformas apoiam o planejamento docente, a recomposição de aprendizagens, a avaliação diagnóstica de redação e o letramento. O uso deve respeitar as diretrizes escolares e a legislação brasileira vigente.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] leading-6 font-medium text-[#1f1b16] mb-2">
              3. Propriedade intelectual
            </h2>
            <p>
              Todo o código, arquitetura, marcas e interfaces presentes nas soluções pertencem à AÍ Tecnologia e Educação Ltda., sendo protegidos pela legislação de propriedade intelectual. Os planos de aula e textos produzidos pelos professores e alunos pertencem aos respectivos autores e instituições.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] leading-6 font-medium text-[#1f1b16] mb-2">
              4. Responsabilidades e disponibilidade
            </h2>
            <p>
              As sugestões geradas por inteligência artificial atuam como instrumento de apoio ao professor, cabendo sempre ao profissional da educação a revisão e validação final do conteúdo aplicado em sala de aula.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
