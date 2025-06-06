import { Menu } from "./components/Menu";
import { About } from "./sections/About";
import { Clients } from "./sections/Clients";
import { Hero } from "./sections/Hero";
import { ProductList } from "./sections/ProductList";

import './page.css'
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="main--container">
      <Menu />
      <Hero />
      <ProductList />
      <About />
      <Clients />
      <Footer />
    </main>
  )
}