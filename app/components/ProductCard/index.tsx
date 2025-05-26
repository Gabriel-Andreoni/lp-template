import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import "./product-card.css";
type ProductCardProps = {
    image: StaticImageData;
    title: string;
    description: string;
    link: string;
}

export function ProductCard({ image, title, description, link }: ProductCardProps) {
    return (
        <li className="product--item">
            <div className="product--item--image">
                <Image src={image} alt="Imagem do primeiro card" />
            </div>
            <div className="product--item--body">
                <h2>{title}</h2>
                <p>{description}</p>
                <button>
                    <Link href={link}>Saiba mais</Link>
                </button>
            </div>
        </li>
    )
}