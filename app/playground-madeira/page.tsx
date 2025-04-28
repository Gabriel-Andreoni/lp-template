import { Menu } from "../components/Menu";
import { Footer } from "../sections/Footer";
import Image from "next/image";

import './playground-madeira.css';
import SlideImage1 from './images/slide-image-1.jpg';

export default function PlaygroundMadeira() {
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

            <Footer />
        </>
    )
}