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
            <WhyBox title="Security and Safety">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </WhyBox>
            <WhyBox title="Flexible and Affordable">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </WhyBox>
            <WhyBox title="Clean and Well-Maintained Facilities">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </WhyBox>
            <WhyBox title="24/7 and Convenient Access">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </WhyBox>        
        
        </div>

        <div className="Why-right">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            <div className="Why-gray"></div>
        </div>  
    </div>
           
    </section>    
  );
}