import AboutUs from "../sections/AboutUs";
import About from "../sections/About";
import Logos from "../sections/Logos";
import Testimonials from "../sections/Testimonials";
import Subscribe from "../sections/Subscribe";
import Why from "../sections/Why";

export default function AboutPage() {
  return (
   <main>
      <AboutUs />
      <About />
      <Logos />      
      <Testimonials />      
      <Why />
      <Subscribe />
    </main>
  );
}