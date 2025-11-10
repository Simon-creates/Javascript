import { Link } from 'react-router-dom';
import './Hero.css';


export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="link-welcome">
          <Link to="/">Welcome to StorAid</Link> {" "}
        </div>  
        <div className="hero-content">
          <h1>Space Simplified, <br/> Storage Perfected</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
        </div>      
        <div className="discover-button">
          <button>Discover More</button>
        </div>        
      </div>  
      <div className="hero-image">
          <img src="/images/Hero_img.svg" alt="Hero image" />
        </div>    
            
    </section>    
  );
}