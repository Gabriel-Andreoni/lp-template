import Image from 'next/image';
import './product.css';
import MainImage from './images/main-image.jpg';
import MoreImages1 from './images/more-images-1.jpg';
import MoreImages2 from './images/more-images-2.jpg';
import MoreImages3 from './images/more-images-3.jpg';
import MoreImages4 from './images/more-images-4.jpg';
import CardImage1 from '../sections/ProductList/img/card-1.jpg'
import { Menu } from '../components/Menu';
import { Footer } from '../sections/Footer';
import Link from 'next/link';


export default function PageDetail() {
    return (
        <section className="page-detail--wrapper">
            <Menu />
            <div className="page-detail--container">
                <div className="page-detail--image">
                    <div className="main--image">
                        <Image src={MainImage} alt="" width={1600} height={900} />
                    </div>

                    <div className="more--images">
                        <Image src={MoreImages1} alt="" width={400} height={300} />
                        <Image src={MoreImages2} alt="" width={400} height={300} />
                        <Image src={MoreImages3} alt="" width={400} height={300} />
                        <Image src={MoreImages4} alt="" width={400} height={300} />
                    </div>

                </div>

                <div className="page-detail--content">
                    <div className="detail--content">
                        <h1>Playground de Madeira</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, harum quae error aut nam aliquid odio quod corrupti, ullam delectus molestias! Nesciunt repellat magni quidem deleniti minima alias dolor molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla quam natus iure assumenda necessitatibus, facere possimus at esse totam culpa quo provident odio id velit fugit aperiam vero? Quidem.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, harum quae error aut nam aliquid odio quod corrupti, ullam delectus molestias! Nesciunt repellat magni quidem deleniti minima alias dolor molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla quam natus iure assumenda necessitatibus, facere possimus at esse totam culpa quo provident odio id velit fugit aperiam vero? Quidem.</p>
                        <button>Fazer Orçamento</button>
                    </div>
                </div>
            </div>
            <div className="related-products">
                <ul className="related-products--content">
                    <h2 className="related-products--title">Produtos Relacionados</h2>
                    <li className="product--item">
                        <div className="product--item--image">
                            <Image src={CardImage1} alt="Imagem do primeiro card" />
                        </div>
                        <div className="product--item--body">
                            <h2>Playground de madeira</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsa non rerum iusto esse perferendis aut velit consequatur laboriosam.</p>
                            <button>
                                <Link href="/product">Saiba mais</Link>
                            </button>
                        </div>
                    </li>

                    <li className="product--item">
                        <div className="product--item--image">
                            <Image src={CardImage1} alt="Imagem do primeiro card" />
                        </div>
                        <div className="product--item--body">
                            <h2>Playground de madeira</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsa non rerum iusto esse perferendis aut velit consequatur laboriosam.</p>
                            <button><Link href="/product">Saiba mais</Link></button>
                        </div>
                    </li>

                    <li className="product--item">
                        <div className="product--item--image">
                            <Image src={CardImage1} alt="Imagem do primeiro card" />
                        </div>
                        <div className="product--item--body">
                            <h2>Playground de madeira</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsa non rerum iusto esse perferendis aut velit consequatur laboriosam.</p>
                            <button><Link href="/product">Saiba mais</Link></button>
                        </div>
                    </li>

                    <li className="product--item">
                        <div className="product--item--image">
                            <Image src={CardImage1} alt="Imagem do primeiro card" />
                        </div>
                        <div className="product--item--body">
                            <h2>Playground de madeira</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsa non rerum iusto esse perferendis aut velit consequatur laboriosam.</p>
                            <button><Link href="/product">Saiba mais</Link></button>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </section>
    );
}