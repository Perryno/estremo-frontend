import React, { useState } from "react";

const Assistenza = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [invioCompletato, setInvioCompletato] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui puoi implementare la logica per inviare il messaggio di assistenza
    // Puoi utilizzare fetch o altre librerie per comunicare con il backend

    // Dopo aver inviato il messaggio, reimposta lo stato del form
    setNome("");
    setEmail("");
    setMessaggio("");
    setInvioCompletato(true);
  };

  return (
    <div className="assistenzaContainer info ">
      <h3 className="mb-4 h2">Assistenza</h3>
      {invioCompletato ? (
        <div className="alert alert-success" role="alert">
          Messaggio inviato con successo! Ti risponderemo al più presto.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              placeholder="Inserisci il tuo nome e cognome"
              type="text"
              className="form-control"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              placeholder="inserisci la tua e-mail"
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="messaggio" className="form-label">
              Messaggio
            </label>
            <textarea
              placeholder="Cosa hai da dirci?"
              className="form-control"
              id="messaggio"
              value={messaggio}
              onChange={(e) => setMessaggio(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-light assistenzaButton">
            Invia
          </button>
        </form>
      )}
    </div>
  );
};

export default Assistenza;
