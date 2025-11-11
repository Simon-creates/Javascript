import { Link } from 'react-router-dom';
import './Services.css';
import InfoBox from '../component/InfoBox';


export default function Services() {
  return (
    <section className="Services"> 
        <div className="services-container">
            <div className="services-top">
                <div className="services-top-left">
                    <div className="subtitle">Our Services</div>
                    <div className="title">Specialized Storage for <br/> Every Special Item</div>
                </div>
                <div className="services-top-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>
            </div>          
        </div>  
        <div className="services-container-bottom">
            <div className="services-bottom">
                


                <div className="left-column">
                    <InfoBox title="Diverse Unit Sizes">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </InfoBox>
                    <InfoBox title="Moving Assistance">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </InfoBox>
                </div>

                <div className="middle-column">
                    <div className="gray-square"></div>
                </div>

                <div className="right-column">
                    <InfoBox title="Vehicle Storage">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </InfoBox>
                    <InfoBox title="Top-Notch Security">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </InfoBox>                  
                </div>
            </div>
        </div>
    </section>    
  );
}