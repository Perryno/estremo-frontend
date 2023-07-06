import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer">
      <Link to="info">Info</Link>
      <Link to="fondatori">Fondatori</Link>
      <div>Via Geltrude 11</div>
      <Link to="contatti">Contatti</Link>
    </footer>
  );
};

export default Footer;
