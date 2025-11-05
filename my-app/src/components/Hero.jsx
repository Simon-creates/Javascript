import { Link } from 'react-router-dom';
import '../App.css';

function Hero() {
  return (
    <div className="hero">
      <h1>H1 text</h1>
      
      <Link to="/projects" className="hero-button">
        Knapp/länk
      </Link>
    </div>

 ); 
  
}

export default Hero;