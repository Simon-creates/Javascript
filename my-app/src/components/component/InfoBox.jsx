import './InfoBox.css';

export default function InfoBox({ title, children }) {
  return (
    <div className="info-box">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
