import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Hem</Link> |{" "}
      <Link to="/about">Om oss</Link> |{" "}
      <Link to="/contact">Kontakt</Link>
    </nav>
  );
}
