import './WhyBox.css';

export default function WhyBox({ title, children }) {
  return (
    <div className="Why-box">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}