import Image from 'next/image';
import './product-list.css';
import CardImage1 from './img/card-1.jpg';
import CardImage2 from './img/card-2.jpg';
import CardImage3 from './img/card-3.jpg';
import Link from 'next/link';

export function ProductList() {
  return (
    <section className="products-list--container">
      <h1 className={`products--title`}>O Playground <span>dos sonhos está aqui!</span></h1>

      <ul className="products-list--grid">
        <li className="product--item">
          <div className="product--item--image">
            <Image src={CardImage1} alt="Imagem do primeiro card" />
          </div>
          <div className="product--item--body">
            <h2>Playground de madeira</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsa non rerum iusto esse perferendis aut velit consequatur laboriosam.</p>
            <button>
              <Link href="/playgrounds">Saiba mais</Link>
            </button>
          </div>
        </li>

        <li className="product--item">
          <div className="product--item--image">
            <Image src={CardImage2} alt="Imagem do primeiro card" />
          </div>
          <div className="product--item--body">
            <h2>Playground de madeira</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsa non rerum iusto esse perferendis aut velit consequatur laboriosam.</p>
            <button>
              <Link href="/playgrounds">Saiba mais</Link>
            </button>
          </div>
        </li>

        <li className="product--item">
          <div className="product--item--image">
            <Image src={CardImage3} alt="Imagem do primeiro card" />
          </div>
          <div className="product--item--body">
            <h2>Playground de madeira</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsa non rerum iusto esse perferendis aut velit consequatur laboriosam.</p>
            <button>
              <Link href="/playgrounds">Saiba mais</Link>
            </button>
          </div>
        </li>
      </ul>

    </section>
  );
}