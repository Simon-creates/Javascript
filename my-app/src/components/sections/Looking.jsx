import { Link } from 'react-router-dom';
import './Looking.css';


export default function Looking() {
  return (
    <section className="looking">
        <div className="looking-container">
            <h1 className="looking-title">
                Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.
            </h1>
            <p className="looking-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
            </p>
            <a href="#" className="btn btn--primary">Book Now</a> 
        </div>           
    </section>    
  );
}