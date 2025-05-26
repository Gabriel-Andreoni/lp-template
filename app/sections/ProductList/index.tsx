import { ProductCard } from '@/app/components/ProductCard';
import './product-list.css';

import CardImage1 from './img/card-1.jpg';
import CardImage2 from './img/card-2.jpg';
import CardImage3 from './img/card-3.jpg';

const clientImages = [
  {
    id: 1,
    src: CardImage1,
    alt: 'Imagem do Produto 1'
  },
  {
    id: 2,
    src: CardImage2,
    alt: 'Imagem do Produto 2'
  },
  {
    id: 3,
    src: CardImage3,
    alt: 'Imagem do Produto 3'
  }
]


export function ProductList() {
  return (
    <section className="products-list--container">
      <h1 className={`products--title`}>O Playground <span>dos sonhos está aqui!</span></h1>

      <ul className="products-list--grid">
        {clientImages.map((client: any, index: number) => {
          return (
            <ProductCard
              key={index}
              image={client.src}
              title={"Playground de Madeira"}
              description={`lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
              link={`#`}
            />
          )
        })}
      </ul>

    </section>
  );
}