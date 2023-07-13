import React, { Component } from "react";
import { Link } from "react-router-dom";

class Psu extends Component {
  state = {
    psus: [],
    selectedPsu: null
  };

  componentDidMount() {
    console.log("Richiesta PSU in corso...");
    fetch("http://localhost:8080/psu")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati PSU ricevuti:", data);
        this.setState({ psus: data });
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }

  handlePsuSelection = (psu) => {
    this.setState({ selectedPsu: psu });
    this.props.onPsuSelected(psu);
  };

  render() {
    const { psus, selectedPsu } = this.state;
    return (
      <div>
        <h2 className="selezionaScritta">Seleziona un PSU</h2>
        <div className="d-flex">
          {psus.map((psu) => (
            <div className={selectedPsu === psu ? "selected" : ""} key={psu.id}>
              <button onClick={() => this.handlePsuSelection(psu)}>{psu.nome}</button>
            </div>
          ))}
        </div>
        {selectedPsu && (
          <div className="avantiDiv">
            {" "}
            <Link className="freccia" to="/pccase">
              AVANTI
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Psu;
