import React from "react";

const Contatti = () => {
  return (
    <div className="info">
      <h3>Contattaci</h3>
      <p>Per qualsiasi domanda, richiesta o informazione, non esitare a contattarci tramite i seguenti metodi:</p>
      <div>
        <h4>Email</h4>
        <p className="">
          <a href="mailto:info@estremo.com" className="text-decoration-none text-white ">
            info@estremo.com
          </a>
        </p>
      </div>
      <div>
        <h4>Telefono</h4>
        <p>Numero di telefono: +39 123 456789</p>
      </div>
      <div>
        <h4>Indirizzo</h4>
        <p>Via Geltrude Beolchi 31, 20012 Cuoggino MI</p>
      </div>
    </div>
  );
};

export default Contatti;
