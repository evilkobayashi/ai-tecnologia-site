import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Termos() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 flex-grow max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-primary-900 mb-8">Termos de Uso</h1>
        <div className="prose prose-slate max-w-none text-text-secondary space-y-6">
          <p>
            Bem-vindo aos Termos de Uso da AÍ Tecnologia e Educação. Ao acessar ou usar nossas soluções (Alfabetiza AÍ, Reforça AÍ, Planeja AÍ), você concorda com estes termos.
          </p>
          
          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao utilizar nossos serviços, você concorda em ficar vinculado a estes Termos. Se você não concordar com alguma parte dos termos, não poderá acessar o serviço.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">2. Uso das Soluções</h2>
          <p>
            Nossas soluções de Inteligência Artificial são projetadas para apoiar a educação. O usuário compromete-se a não utilizar as plataformas para fins ilegais ou não autorizados.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, recursos e funcionalidades presentes em nossos serviços são de propriedade exclusiva da AÍ Tecnologia e Educação Ltda. e são protegidos pelas leis brasileiras de direitos autorais e propriedade intelectual.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">4. Limitação de Responsabilidade</h2>
          <p>
            A AÍ Tecnologia não será responsável por quaisquer danos indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
