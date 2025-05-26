import { ProductCard } from '@/app/components/ProductCard';
import './product-list.css';

import CardImage1 from './img/card-1.jpg';
import CardImage2 from './img/card-2.jpg';
import CardImage3 from './img/card-3.jpg';


export function ProductList() {
  return (
    <section className="products-list--container">
      <h1 className={`products--title`}>O Playground <span>dos sonhos está aqui!</span></h1>

      <ul className="products-list--grid">
        <ProductCard
          image={CardImage1}
          title="Playground de Madeira"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="/product/1"
        />
        <ProductCard
          image={CardImage2}
          title="Playground de Madeira"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="/product/2"
        />
        <ProductCard
          image={CardImage3}
          title="Playground de Madeira"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="/product/3"
        />
      </ul>

    </section>
  );
}