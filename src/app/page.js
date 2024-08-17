
import Chalets from "./components/Chalets";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Proyectos from "./components/Proyectos";
import Servicios from "./components/Servicios";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Nosotros />
      <Servicios />
      <Chalets />
      <Proyectos />
    </main>
  );
}
