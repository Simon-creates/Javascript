import { Link } from 'react-router-dom';
import './Blog.css';
import BlogPost from '../component/BlogPost.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Blog() {
  return (
    <section className="blog">    
        <div className="blog-container">
            <div className="blog-top">
                <div className="blog-top-left">
                    <div className="subtitle">Latest Blog and News</div>
                    <div className="title">Check Out Our Latest Blog <br/>and News Update</div>
                </div>
                <div className="blog-top-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>
            </div>          
        </div>  
        <div className="blog-container-bottom">
            <div className="blog-bottom"> 
                <BlogPost
                date="August 17, 2025"
                title="Safe and Secure: The Importance of Choosing the Right Storage"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…"
                
                />
                <BlogPost
                date="July 12, 2025"
                title="Storage Trends 2024: What’s New in the World of Storage"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…"
                />
                <BlogPost
                date="April 8, 2025"
                title="Free Up Your Space, Free Up Your Life: The Power of Decluttering"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…"
                />
                           
            </div>
        </div>
    </section>    
  );
}