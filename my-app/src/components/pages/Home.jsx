import Hero from "../sections/Hero";
import About from "../sections/About";
import Logos from "../sections/Logos";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Why from "../sections/Why";
import Pricing from "../sections/Pricing";
import Looking from "../sections/Looking";
import Blog from "../sections/Blog";
import Subscribe from "../sections/Subscribe";


export default function Home() {

  return (
    <section>
      <Hero />
      <About />
      <Logos />
      <Services />
      <Testimonials />
      <Why />
      <Pricing />
      <Looking />
      <Blog />
      <Subscribe />      
    </section>
  );
}
