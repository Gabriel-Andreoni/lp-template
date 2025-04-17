import './about.css';
import { Atop } from '@/app/components/AtopFont';

export function About() {
    return (
        <section className="about--container">
            <h2 className={`about--container--title ${Atop.className}`}>Sobre Nós</h2>
            <div className="about--wrapper">

                <div className="about--content">
                    <div className="first--content-box">
                        <h2 className="content--box--title">Expertise com Resultados</h2>
                        <p className="content--box--text">Há 10 anos, projetamos playgrounds que reduzem custos com manutenção e aumentam a satisfação em escolas, condomínios e parques.</p>
                    </div>
                    <div className="second--content-box">
                        <h2 className="content--box--title">Segurança que Gera Confiança</h2>
                        <p className="content--box--text">Nossos playgrounds seguem as normas internacionais de segurança (como ASTM/INMETRO), com materiais anti-impacto e designs que evitam acidentes, garantindo tranquilidade para pais e gestores.</p>
                    </div>
                </div>
                <div className="about--content">
                    <div className="third--content-box">
                        <h2 className="content--box--title">Design que Estimula o Desenvolvimento</h2>
                        <p className="content--box--text">Cada estrutura é pensada para desenvolver habilidades motoras, cognitivas e sociais das crianças, com brinquedos adaptados por faixa etária.</p>
                    </div>
                    <div className="fourth--content-box">
                        <h2 className="content--box--title">Personalização Total</h2>
                        <p className="content--box--text">Do projeto à instalação, criamos playgrounds sob medida para seu espaço, orçamento e público. Transformamos áreas subutilizadas em pontos de alegria e valorização do imóvel.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}