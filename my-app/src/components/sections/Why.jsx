import { Link } from 'react-router-dom';
import './Why.css';
import WhyBox from '../component/WhyBox';



export default function Why() {
  return (
    <section className="Why"> 
    <div className="Why-container">
        <div className="Why-left">
            <h2>Why Choose Us</h2>
            <h1>Choose Us for Exceptional <br/> Storage Solutions</h1>
            <WhyBox 
            title="Security and Safety"
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            image="../public/images/Why1.svg"
            >                
            </WhyBox>
            <WhyBox title="Flexible and Affordable"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            image="../public/images/Why2.svg"
            ></WhyBox>
            <WhyBox title="Clean and Well-Maintained Facilities"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            image="../public/images/Why3.svg"
            ></WhyBox>
            <WhyBox title="24/7 and Convenient Access"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            image="../public/images/Why4.svg"
            ></WhyBox>       
        
        </div>

        <div className="Why-right">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            <div className="Why-gray"></div>
        </div>  
    </div>
           
    </section>    
  );
}