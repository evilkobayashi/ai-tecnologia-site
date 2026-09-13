import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacidade() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 flex-grow max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-primary-900 mb-8">Política de Privacidade</h1>
        <div className="prose prose-slate max-w-none text-text-secondary space-y-6">
          <p>
            A AÍ Tecnologia e Educação valoriza e respeita a sua privacidade. Esta política descreve como coletamos, usamos e protegemos seus dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
          
          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">1. Coleta de Dados</h2>
          <p>
            Coletamos apenas as informações estritamente necessárias para o funcionamento de nossas soluções educacionais e para melhorar a experiência do usuário. 
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">2. Uso das Informações</h2>
          <p>
            Os dados coletados são utilizados exclusivamente para fins educacionais, operacionais e de comunicação. Não vendemos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">3. Proteção e Segurança</h2>
          <p>
            Empregamos medidas de segurança técnicas e organizacionais rigorosas, garantindo a criptografia e proteção total de dados de alunos e professores.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">4. Direitos do Titular</h2>
          <p>
            Você tem o direito de solicitar acesso, correção, atualização ou exclusão de seus dados pessoais a qualquer momento, conforme estipulado pela LGPD.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
