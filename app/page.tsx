import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import { ProductList } from "./sections/ProductList";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
      <About />
    </main>
  )
}