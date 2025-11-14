import { Link } from 'react-router-dom';
import './Navbar.css'; 


export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="navbar-top">
        <div className="contact-info">
          <span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
            +46 8 123 122 44
          </span>
          <span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z"/>
            </svg>
            contact@domain.come
            </span>            
        </div>
        <div className="social-media">
          <img src="/images/Facebook.svg" alt="Facebook" />
          <img src="/images/Twitter.svg" alt="X" />
          <img src="/images/Instagram.svg" alt="Instagram" />
          <img src="/images/Youtube.svg" alt="Youtube" />
        </div>      
      </div>

      <div className="navbar-bottom">
        <div className="logo">
          <img src="/images/Logo.svg" alt="Logo StoreAid" />
        </div>
        <div className="pages">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="book-button">
          <button>Book Now</button>
        </div>
      </div>      
    </nav>
  );
}

