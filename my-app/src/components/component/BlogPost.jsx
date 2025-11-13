import './BlogPost.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function BlogPost({ date, title, description }) {
  return (
    <div className="blogpost">
        <div className="blog-gray"></div>

        <span className="date">            
            <i className="bi bi-journal-text"style={{ marginRight: "0.5rem" }}></i>            
            {date}</span>
        <h3 className="h3-blog">{title}</h3>
        <p className="description">{description}</p>
        <ul className="readmore">
            <li>
                Read more <i className="bi bi-arrow-right"></i>
            </li>
        </ul>

        
    </div>
  );
}
