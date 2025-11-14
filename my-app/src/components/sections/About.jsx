import { Link } from 'react-router-dom';
import './About.css'; 


export default function About() {
  return (
    <section className="About">
        <div className="about_container"> 
            <div className="stats-wrapper">
                <div className="gray-background"></div>
                <div className="about_stats">
                    <div><div className="about-strong">12+</div><span>Years of Experience</span></div>
                    <div><div className="about-strong">150K+</div><span>Satisfied Clients</span></div>
                    <div><div className="about-strong">35+</div><span>Warehouse</span></div>
                </div>
            </div>

            <div className="about_content">
                <h5 className="about_subtitle">About Us</h5>
                <h2 className="about_title">Providing a Safe Space for Your Treasured Items</h2>
                <p className="about_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. 
                    Nulla quis nulla leo. Mauris ac blandit nisl, non sodales augue. Phasellus eget elit gravida.
                </p>

                <div className="about_cards">
                    <div className="about_card">
                    <h4>Vision</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusam.</p>
                    </div>
                    <div className="about_card about_card--border">
                    <h4>Mission</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusam.</p>
                    </div>
                </div>

                <div className="about_buttons">
                    <a href="#" className="btn btn--primary">Discover More</a>
                    <div className="about_info">
                    <img src="/images/About_phone.svg" alt="About phone" className="about_phone-icon" />
                    <div className="about-phone">                        
                        <p>More Information</p>
                        <strong>+46 8 123 122 44</strong>
                    </div>
                </div>
            </div>           
         </div>
        </div>  
    </section>    
  );
}