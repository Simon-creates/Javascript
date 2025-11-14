import { Link } from 'react-router-dom';
import './FAQ.css';
import FAQAccordion from '../component/FAQAccordion';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function FAQ() {
  return (
    <section className="FAQ"> 
    <div className="FAQ-container">
        <div className="FAQ-left">
            <h2>FAQs</h2>
            <h1>Frequently Ask Questions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>    
        </div>

        <div className="Why-right">
            
             <FAQAccordion 
             question="fråga"
             answer="svar"
             />
        </div>  
    </div>
    
           
    </section>    
  );
}