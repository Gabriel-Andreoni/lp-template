import { Menu } from "../components/Menu";
import { Footer } from "../sections/Footer";
import { ProductCard } from "../components/ProductCard";
import Image from "next/image";

import './playgrounds.css';
import SlideImage1 from './images/slide-image-1.jpg';
import CardImage1 from '../sections/ProductList/img/card-1.jpg'


export default function Playgrounds() {
    return (
        <>
            <Menu />

            <main className="playground-madeira--wrapper">
                <div className="playground--header"></div>
                <div className="playground--content--container">
                    <div className="content-box">
                        <div className="content-box--header">
                            <h1>Playground de Madeira</h1>
                            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ullam, numquam accusamus, pariatur fugit voluptatibus asperiores reprehenderit harum non dolores cum aliquam impedit earum minus quam provident consequuntur odio quia.</h3>
                        </div>
                        <div className="content-box--content">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae est distinctio aperiam tempore deserunt ut fugiat, esse eos assumenda rem eum facere sit optio nemo soluta ullam, labore iste placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt, maiores consequatur accusantium voluptatum reprehenderit distinctio iure temporibus laudantium! In pariatur ab deserunt rerum sit, ex praesentium! Rerum, mollitia impedit!</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae est distinctio aperiam tempore deserunt ut fugiat, esse eos assumenda rem eum facere sit optio nemo soluta ullam, labore iste placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt, maiores consequatur accusantium voluptatum reprehenderit distinctio iure temporibus laudantium! In pariatur ab deserunt rerum sit, ex praesentium! Rerum, mollitia impedit!</p>

                        </div>
                    </div>
                    <div className="slide-box">
                        <div className="slide">
                            <Image src={SlideImage1} alt="Slide Image 1" className="image" width={600} height={400} />
                        </div>
                    </div>

                </div>
            </main>
            <div className="related-products">
                <ul className="related-products--content">
                    <h2 className="related-products--title">Playgrounds Ideais para o Seu Espaço</h2>
                    <ProductCard
                        title="Playground Infantil"
                        description="Um playground seguro e divertido para crianças de todas as idades."
                        image={CardImage1}
                        link="#"
                    />
                    <ProductCard
                        title="Playground Infantil"
                        description="Um playground seguro e divertido para crianças de todas as idades."
                        image={CardImage1}
                        link="#"
                    />
                    <ProductCard
                        title="Playground Infantil"
                        description="Um playground seguro e divertido para crianças de todas as idades."
                        image={CardImage1}
                        link="#"
                    />
                    <ProductCard
                        title="Playground Infantil"
                        description="Um playground seguro e divertido para crianças de todas as idades."
                        image={CardImage1}
                        link="#"
                    />
                </ul>
            </div>
            <Footer />
        </>
    )
}