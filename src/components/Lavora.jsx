import React from "react";

const Lavora = () => {
  return (
    <div>
      <div className="info">
        <h3>Lavora con noi (Me) - Estremo</h3>
        <p>
          Siamo un'azienda giovane e dinamica nel settore degli sport estremi. Cerchiamo persone appassionate, motivate
          e pronte a mettersi alla prova per unirsi al nostro team. Se sei un amante dell'avventura e desideri fare
          parte di un'azienda innovativa, abbiamo l'opportunità giusta per te.
        </p>

        <p>
          Offriamo un ambiente di lavoro stimolante, possibilità di crescita professionale e la possibilità di lavorare
          su progetti emozionanti. Valorizziamo la creatività, la collaborazione e l'intraprendenza.
        </p>

        <p>I requisiti per il ruolo includono:</p>
        <ul className="list-unstyled">
          <li>- Esperienza nel settore informatico</li>
          <li>- Capacità di lavorare in team e comunicare in modo efficace</li>
          <li>- Orientamento al risultato e attitudine proattiva</li>
          <li>- Flessibilità e adattabilità ai cambiamenti</li>
          <li>- Motivazione a imparare e crescere professionalmente</li>
        </ul>

        <p>
          Se pensi di essere la persona giusta per il nostro team, inviaci il tuo curriculum vitae e una lettera di
          presentazione che descriva la tua esperienza e motivazione. Sarà un piacere conoscere te e valutare la tua
          candidatura.
        </p>

        <p>Unisciti a noi per un'esperienza estrema e stimolante!</p>

        <p>Contattaci:</p>
        <ul className="list-unstyled">
          <li>
            Email:{" "}
            <a className="text-decoration-none text-white" href="mailto:info@estremo.com">
              info@estremo.com
            </a>
          </li>
          <li>Telefono: +39 1234567890</li>
        </ul>
      </div>
    </div>
  );
};

export default Lavora;
