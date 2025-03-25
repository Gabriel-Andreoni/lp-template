import { Menu } from '@/app/components/Menu';
import { Atop } from '@/app/components/AtopFont';
import './hero.css';



export function Hero() {
    return (
        <section className="hero--container">
            <div className="hero--body">
                <h1 className={`hero--title ${Atop.className}`}>Crie <span>Memórias Inesquecíveis</span></h1>
                <h2 className="hero--subtitle">Transforme o espaço da sua escola, condomínio ou parque em um lugar mágico.</h2>
                <h2 className='hero--subtitle'>Com playgrounds seguros, duráveis e cheios de diversão, oferecemos experiências que encantam crianças e tranquilizam adultos. Conheça nossas soluções e crie memórias que vão durar para sempre.</h2>

                <button className="hero--buttonCTA">Veja nosso catálogo</button>
            </div>

            <Menu />
        </section>
    )
}