import Image from 'next/image';
import './page-detail.css';
import MainImage from './images/main-image.jpg';
import MoreImages1 from './images/more-images-1.jpg';
import MoreImages2 from './images/more-images-2.jpg';
import MoreImages3 from './images/more-images-3.jpg';
import MoreImages4 from './images/more-images-4.jpg';
import { Menu } from '../components/Menu';


export default function PageDetail() {
    return (
        <section className="page-detail--wrapper">
            <Menu />
            <div className="page-detail--container">
                <div className="page-detail--image">
                    <aside className="more-images">
                        <Image src={MoreImages1} alt="" width={200} height={200} />
                        <Image src={MoreImages2} alt="" width={200} height={200} />
                        <Image src={MoreImages3} alt="" width={200} height={200} />
                        <Image src={MoreImages4} alt="" width={200} height={200} /> 
                    </aside>
                    <div className="main--image">
                        <Image src={MainImage} alt="" width={900}height={500} />
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
        </section>
    );
}