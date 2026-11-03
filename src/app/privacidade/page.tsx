import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacidade() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f7f4ee] text-[#1f1b16]">
      <Navbar />

      <main className="py-16 md:py-24 px-6 md:px-8 flex-1 max-w-3xl mx-auto w-full">
        <span className="bncc-code mb-4">Conformidade LGPD • Lei nº 13.709/2018</span>
        <h1 className="font-serif text-[36px] md:text-[44px] leading-[1.1] text-[#1f1b16] mb-8">
          Política de privacidade
        </h1>

        <div className="flex flex-col gap-6 text-[15px] leading-[24px] text-[#5e554a]">
          <p>
            A AÍ Tecnologia e Educação protege os dados de estudantes, professores e gestores escolares em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>

          <div>
            <h2 className="text-[18px] leading-6 font-medium text-[#1f1b16] mb-2">
              1. Coleta mínima de dados
            </h2>
            <p>
              Coletamos exclusivamente os dados necessários para o funcionamento das atividades pedagógicas, geração de planos de aula e acompanhamento de evolução escolar.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] leading-6 font-medium text-[#1f1b16] mb-2">
              2. Finalidade educacional exclusiva
            </h2>
            <p>
              As informações tratadas nas plataformas são utilizadas apenas para fins pedagógicos e operacionais da escola ou secretaria contratante. Não comercializamos nem compartilhamos dados de alunos ou docentes para fins publicitários.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] leading-6 font-medium text-[#1f1b16] mb-2">
              3. Segurança e proteção de menores
            </h2>
            <p>
              Aplicamos criptografia em trânsito e em repouso, controle de acesso por perfil escolar e anonimização de registros no processamento de modelos pedagógicos.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] leading-6 font-medium text-[#1f1b16] mb-2">
              4. Direitos do titular
            </h2>
            <p>
              O titular dos dados ou seu responsável legal pode solicitar acesso, retificação ou exclusão de informações pessoais a qualquer momento pelo canal institucional contato@aitecnologia.xyz.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
