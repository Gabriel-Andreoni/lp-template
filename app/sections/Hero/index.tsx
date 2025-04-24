import { Atop } from '@/app/components/AtopFont';
import './hero.css';



export function Hero() {
    return (
        <section className="hero--container">
            <div className="hero--content">
                <h1 className={`hero--content--title ${Atop.className}`}>Crie <span>Memórias Incríveis</span></h1>
                <p className="hero--content--text">Transforme o espaço da sua escola, condomínio ou parque em um lugar mágico! Com playgrounds seguros, duráveis e cheios de diversão, oferecemos experiências que encantam crianças e tranquilizam adultos. Conheça nossas soluções e crie memórias que vão durar para sempre.</p>
                <button className="hero--content--button">Faça um orçamento</button>
            </div>
        </section>
    )
}