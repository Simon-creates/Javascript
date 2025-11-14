import { Link } from 'react-router-dom';
import './Pricing.css';
import PricingBox from '../component/PricingBox.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Pricing() {
  return (
    <section className="pricing">
        <div className="pricing-top">
            <div className="pricing-subtitle">
                Pricing plan
            </div>
            <h1>Find the Perfect Plan for <br/> Your Storage Needs</h1>
        </div>
        <div className="pricing-bottom">
            <PricingBox 
            title="Small Unit"
            price="50"
            period="/month"
            description="Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit."
            features={[
            "Nam nec ipsum in dolor",
            "Fusce nec ligula ut arcu",
            "Aliquam pulvinar arcu in",
            "Duis gravida enim porta",
            "Etiam eget libero non ligula",
            ]}
            buttonText="Rent Now"
            />
            <PricingBox 
            title="Small Unit"
            price="50"
            period="/month"
            description="Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit."
            features={[
            "Nam nec ipsum in dolor",
            "Fusce nec ligula ut arcu",
            "Aliquam pulvinar arcu in",
            "Duis gravida enim porta",
            "Etiam eget libero non ligula",
            ]}
            buttonText="Rent Now"    
            style={{ 
                backgroundColor: '#12372A',
                color: '#fff'                
            }}                       
            />
            <PricingBox 
            title="Large Unit"
            price="150"
            period="/month"
            description="Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit."
            features={[
            "Nam nec ipsum in dolor",
            "Fusce nec ligula ut arcu",
            "Aliquam pulvinar arcu in",
            "Duis gravida enim porta",
            "Etiam eget libero non ligula",
            ]}
            buttonText="Rent Now"                                    
            />
            <PricingBox 
            title="Executive Unit"
            price="200"
            period="/month"
            description="Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit."
            features={[
            "Nam nec ipsum in dolor",
            "Fusce nec ligula ut arcu",
            "Aliquam pulvinar arcu in",
            "Duis gravida enim porta",
            "Etiam eget libero non ligula",
            ]}
            buttonText="Rent Now"                             
            />
        </div>
            
    </section>    
  );
}