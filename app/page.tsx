import { About } from "./sections/About";
import { Clients } from "./sections/Clients";
import { Hero } from "./sections/Hero";
import { ProductList } from "./sections/ProductList";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
      <About />
      <Clients />
    </main>
  )
}