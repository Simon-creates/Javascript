import './ContactBox.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ContactBox({ title, description, icon = "bi-geo-alt", className, style }) {
  return (
    <div className={`contactbox-box ${className || ""}`} style={style}>
      <div className="contactbox-icon-wrapper">
        <i className={`bi ${icon}`}></i>
      </div>
      <div className="contactbox-text">
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
