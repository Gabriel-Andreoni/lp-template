import './about.css';
import { Atop } from '@/app/components/AtopFont';

export function About() {
    return (
        <section className="about--container">

            <div className="about--companyLogo">
                
            </div>

            <div className="about--content">
                <h1 className={`about--title ${Atop.className}`}>Em nós você pode confiar</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam molestias quas impedit distinctio maxime libero optio, ipsam natus dolorem sequi iusto in ut officiis doloribus deleniti qui explicabo rem mollitia!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam molestias quas impedit distinctio maxime libero optio, ipsam natus dolorem sequi iusto in ut officiis doloribus deleniti qui explicabo rem mollitia!</p>
            </div>
        </section>
    );
}