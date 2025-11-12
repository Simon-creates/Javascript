import Hero from "../sections/Hero";
import About from "../sections/About";
import Logos from "../sections/Logos";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Why from "../sections/Why";
import Pricing from "../sections/Pricing";
import Subscribe from "../sections/Subscribe";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL;
    

    fetch(`${baseUrl}/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: "user@example.com" }) 
    })
      .then(res => {
        if (!res.ok) throw new Error("API svarade inte");
        return res.json();
      })
      .then(data => console.log("Svar från /api/subscribe:", data))
      .catch(err => console.error("Fel vid API-anrop:", err));
  }, []);


  return (
    <section>
      <Hero />
      <About />
      <Logos />
      <Services />
      <Testimonials />
      <Why />
      <Pricing />
      <Subscribe />      
    </section>
  );
}
