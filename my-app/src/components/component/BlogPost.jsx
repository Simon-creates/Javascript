import './BlogPost.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function BlogPost({ date, title, description, image }) {
  return (
    <div className="blogpost">

        {image && (
          <img src={image} alt={title} className="blog-image" />
        )}

        <span className="date">            
            <i className="bi bi-journal-text" style={{ marginRight: "0.5rem" }}></i>            
            {date}
        </span>

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
