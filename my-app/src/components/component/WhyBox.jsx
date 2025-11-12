import './WhyBox.css';

export default function WhyBox({ title, image, children }) {
  return (
    <div className="Why-box">
        {image && <img src={image} alt={title} className="why-image" />}
        <h2>{title}</h2>
        <p>{children}</p>
    </div>
  );
}
