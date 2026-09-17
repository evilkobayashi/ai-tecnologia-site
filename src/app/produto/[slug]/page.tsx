import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import Footer from '@/components/Footer';

const productsData = {
  'alfabetiza-ai': {
    name: 'Alfabetiza AÍ',
    tag: 'Lançamento',
    description: 'A primeira Inteligência Artificial de Voz criada especificamente para alfabetização no Brasil.',
    longDescription: 'O Alfabetiza AÍ revoluciona o processo de aprendizagem da leitura e escrita. Através de uma interface Voice-First, crianças, alunos neurodivergentes e estudantes do EJA podem interagir com a IA apenas falando. O sistema avalia a pronúncia, soletração e compreensão fonética em tempo real, guiando o aluno sem que ele precise saber ler previamente para usar a plataforma.',
    features: [
      'Interface 100% controlada por voz',
      'Avaliação fonética em tempo real',
      'Módulo Kids (Lúdico e gamificado)',
      'Módulo EJA (Respeitoso e focado no adulto)',
      'Foco em neurodivergência e TDAH'
    ],
    platformUrl: '#',
    color: 'amber'
  },
  'reforca-ai': {
    name: 'Reforça AÍ',
    tag: 'Lançamento 2026',
    description: 'O tutor socrático que ensina a pensar em vez de dar a resposta.',
    longDescription: 'Diferente das IAs comuns que apenas cospem a resposta do dever de casa, o Reforça AÍ atua como um tutor socrático. O aluno tira uma foto da tarefa, e a IA faz perguntas guiadas, ajudando o estudante a chegar na resposta por conta própria. Tudo isso em um ambiente gamificado onde o aluno ganha \"Aura\" ao invés de notas.',
    features: [
      'Leitura de cadernos por Foto (OCR com IA)',
      'Método Socrático (Não dá a resposta pronta)',
      'Gamificação avançada (Aura, Títulos, Streaks)',
      'Relatório de evolução por competência',
      'Bússola Vocacional em formato Tinder-swipe'
    ],
    platformUrl: '#',
    color: 'cyan'
  },
  'planeja-ai': {
    name: 'Planeja AÍ',
    tag: 'Ao Vivo',
    description: 'O co-piloto do professor brasileiro. Planos de aula e AEE em 60 segundos.',
    longDescription: 'O Planeja AÍ foi criado para devolver o final de semana aos professores. A plataforma gera planos de aula completos, 100% alinhados à BNCC, com metodologias ativas e cronogramas detalhados. Além disso, gera adaptações AEE e PEI automáticas para alunos com necessidades especiais, algo que antes levava horas.',
    features: [
      'Geração de Planos de Aula via IA',
      'Alinhamento automático com a BNCC',
      'Adaptações AEE e PEI automáticas',
      'Interface super-rápida e sem fricção',
      'Exportação direta para PDF e formatos oficiais'
    ],
    platformUrl: 'https://planejaai.xyz',
    color: 'emerald'
  },
  'redacao-nota-10-ia': {
    name: 'Redação Nota 10 AÍ',
    tag: 'Ao Vivo',
    description: 'Correção instantânea de redações nos padrões ENEM, FUVEST e VUNESP.',
    longDescription: 'A plataforma definitiva para quem quer dominar a escrita. O aluno escreve sua redação, envia a foto ou o texto, e nossa Inteligência Artificial avalia minuciosamente cada uma das 5 competências exigidas pelo MEC. O feedback é detalhado, apontando exatamente onde melhorar na gramática, coesão, coerência e proposta de intervenção.',
    features: [
      'Correção baseada nos critérios reais do ENEM',
      'Feedback instantâneo (menos de 10 segundos)',
      'Apontamento visual de erros gramaticais',
      'Sugestões de melhoria por competência',
      'Histórico de evolução da nota'
    ],
    platformUrl: 'https://redacao-nota-10-ia.vercel.app',
    color: 'violet'
  }
};

export default async function ProdutoPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = productsData[resolvedParams.slug as keyof typeof productsData];

  if (!product) {
    notFound();
  }

  const theme = {
    amber: {
      bgHover: 'hover:bg-accent-amber/90',
      bg10: 'bg-accent-amber/10',
      bg5: 'bg-accent-amber/5',
      text: 'text-accent-amber',
      border20: 'border-accent-amber/20',
      bgBase: 'bg-accent-amber',
      shadow: 'shadow-accent-amber/30'
    },
    cyan: {
      bgHover: 'hover:bg-accent-cyan/90',
      bg10: 'bg-accent-cyan/10',
      bg5: 'bg-accent-cyan/5',
      text: 'text-accent-cyan',
      border20: 'border-accent-cyan/20',
      bgBase: 'bg-accent-cyan',
      shadow: 'shadow-accent-cyan/30'
    },
    emerald: {
      bgHover: 'hover:bg-accent-emerald/90',
      bg10: 'bg-accent-emerald/10',
      bg5: 'bg-accent-emerald/5',
      text: 'text-accent-emerald',
      border20: 'border-accent-emerald/20',
      bgBase: 'bg-accent-emerald',
      shadow: 'shadow-accent-emerald/30'
    },
    violet: {
      bgHover: 'hover:bg-accent-violet/90',
      bg10: 'bg-accent-violet/10',
      bg5: 'bg-accent-violet/5',
      text: 'text-accent-violet',
      border20: 'border-accent-violet/20',
      bgBase: 'bg-accent-violet',
      shadow: 'shadow-accent-violet/30'
    }
  };

  const t = theme[product.color as keyof typeof theme];

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      <main className="flex-grow pt-32 pb-24 px-6 max-w-5xl mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary-600 transition-colors mb-12">
          <ArrowLeft size={20} /> Voltar para o Ecossistema
        </Link>
        
        <ScrollReveal>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-border-subtle relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-64 h-64 ${t.bg10} rounded-bl-full -z-10`} />
            
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${t.bg10} ${t.text} border ${t.border20}`}>
                {product.tag}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              {product.name}
            </h1>
            
            <p className="text-xl text-text-secondary mb-12 font-medium leading-relaxed max-w-3xl">
              {product.description}
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Sparkles className={t.text} size={24} /> O que é?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              <div className={`${t.bg5} rounded-3xl p-8 border ${t.border20}`}>
                <h3 className="text-lg font-bold text-text-primary mb-5">Principais Recursos</h3>
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`${t.text} shrink-0 mt-0.5`} size={20} />
                      <span className="text-text-secondary font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center gap-6">
              {product.platformUrl !== '#' ? (
                <a 
                  href={product.platformUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${t.bgBase} hover:opacity-90 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg ${t.shadow} flex items-center gap-3 active:scale-95 w-full sm:w-auto justify-center`}
                >
                  Acessar a Plataforma <ExternalLink size={20} />
                </a>
              ) : (
                <button 
                  disabled
                  className="bg-border-subtle text-text-secondary font-bold py-4 px-8 rounded-2xl cursor-not-allowed flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  Plataforma em Breve
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
