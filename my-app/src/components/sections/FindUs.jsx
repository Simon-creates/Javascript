import './FindUs.css';
import ContactBox from '../component/ContactBox';


export default function FindUs() {
  return (
    <section className="FindUs-wrapper">
      <div className="FindUs-container">
        <div className="FindUs-left">
            <div className="FindUs-image">
                <img src="/images/FindUs.svg" alt="FindUs image" />
            </div>
        </div>

        <div className="FindUs-right">
            <div className="FindUs-content">
            <h1>Find Us On:</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <ContactBox
            title="Call Center"
            description="+46 8 123 122 44"
            icon="bi bi-telephone-fill"
            />
             <ContactBox
            title="Email Address"
            description="contact@domain.com"
            icon="bi bi-envelope"
            />
             <ContactBox
            title="Location"
            description="Klarabergsviadukten 90, Stockholm"
            icon="bi bi-pin-map"
            />    
            <div className="contact-social-media">
                <h3 className="social-media-title">Our Social Media</h3>
                <div className="social-divider"></div>
                <div className="social-media">
                    <img src="/images/Facebook.svg" alt="Facebook" />
                    <img src="/images/Twitter.svg" alt="X" />
                    <img src="/images/Instagram.svg" alt="Instagram" />
                    <img src="/images/Youtube.svg" alt="Youtube" />
                </div> 
            </div>                

            </div>    
        </div>
      </div>       
    </section>    
  );
}