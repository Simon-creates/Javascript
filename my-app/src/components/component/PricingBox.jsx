import './PricingBox.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function PricingBox({ title, price, period, description, features, buttonText, className, style }) {
  return (
    <div className={`pricing-box ${className || ""}`} style={style}>
      <h3>{title}</h3>
      <div className="price">
        <span className="currency">$</span>
        <span className="amount">{price}</span>
        <span className="period">{period}</span>
      </div>
      <p className="description">{description}</p>
      <hr className="divider" />
      <ul className="features">
        {features && features.map((f, i) => (
          <li key={i}><i className="bi bi-check-circle-fill"></i> {f}</li>
        ))}
      </ul>
      <button className="btn btn-pricing">{buttonText}</button>
      
    </div>
  );
}
