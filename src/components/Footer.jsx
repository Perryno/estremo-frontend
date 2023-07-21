import { Link } from "react-router-dom";

import { BsFillCursorFill } from "react-icons/bs";

const Footer = () => {
  const latitude = 45.504921914798274; // Latitudine
  const longitude = 8.816885199756788; // Longitudine

  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  return (
    <footer className="footer ">
      <div className="row topFooter">
        <Link className="col-sm-4 col-md-4 col-lg-2 footerItem" to="info">
          Info
        </Link>
        <Link className="col-sm-4 col-md-4 col-lg-2 footerItem" to="fondatori">
          Fondatori
        </Link>
        <Link className="col-sm-4 col-md-4 col-lg-2 footerItem" to="contatti">
          Contatti
        </Link>
        <Link to="lavora" className="col-sm-4 col-md-4 col-lg-2 footerItem">
          Lavora con noi (me)
        </Link>
        <Link to="assistenza" className="col-sm-4 col-md-4 col-lg-2 footerItem">
          Assistenza
        </Link>
        <Link className="col-sm-4 col-md-4 col-lg-2 footerItem" to="contatti">
          404
        </Link>
      </div>
      <div>
        <div className="underFooter">
          <BsFillCursorFill className="iconaCursore" size={14} />
          <a className="footerItem" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            Via Geltrude Beolchi 31, 20012 Cuoggino MI
          </a>
        </div>
        <div className="text-start text-white cp">&copy; 2023 EstremoSRL. Tutti i diritti riservati.</div>
      </div>
    </footer>
  );
};

export default Footer;
