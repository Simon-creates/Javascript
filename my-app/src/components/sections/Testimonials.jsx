import './Testimonials.css';
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <section className="Testimonials"> 

      <div className="testimonials-container">
        <img src="/images/Testimonials_background.svg" alt="Testimonials" className="background"/>
        
        <div className="testimonial-overlay">
          <div className="testimonial-top">
            <div className="h3-testimonial">Testimonials</div>
            <div className="h1-testimonial">See What Our Client Have to Say</div>
            <div className="p-testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</div>

          </div>

          <div className="testimonial-bottom">
            {testimonials.length === 0 && <p>Laddar testimonials...</p>}

            {testimonials.map(t => (
              <div key={t.id} className="testimonial-card">
                <p className="testimonial-rating">
                  {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                </p>
               

                <p className="testimonial-comment">{t.comment}</p>

                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-company">{t.companyName}</p>

                 <img 
                  src={t.avatarUrl} 
                  alt={t.name} 
                  className="testimonial-avatar"
                />
              </div>
            ))}
          </div>          
        </div>        
      </div> 
    </section>
  );
}
