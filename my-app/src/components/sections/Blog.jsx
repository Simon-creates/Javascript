import './Blog.css';
import BlogPost from '../component/BlogPost.jsx';
import { useEffect, useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Blog() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://win25-jsf-assignment.azurewebsites.net/api/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error("API error:", err));
  }, []);

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

          {blogs.length === 0 && <p>Laddar blogginlägg...</p>}

          {blogs.map(blog => (
            <BlogPost
              key={blog.id}
              date={new Date(blog.created).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
              title={blog.title}
              description={blog.description}
              image={blog.imageUrl}
            />
          ))}

        </div>
      </div>

    </section>    
  );
}
