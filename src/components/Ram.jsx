import React, { Component } from "react";
import { Link } from "react-router-dom";

class Ram extends Component {
  state = {
    rams: [],
    selectedRam: null
  };

  componentDidMount() {
    console.log("Richiesta RAM in corso...");
    fetch("http://localhost:8080/ram")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati RAM ricevuti:", data);
        this.setState({ rams: data });
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }

  handleRamSelection = (ram) => {
    this.setState({ selectedRam: ram });
    this.props.onRamSelected(ram);
  };

  render() {
    const { rams, selectedRam } = this.state;

    // Ordina gli elementi in base al prezzo
    const sortedRams = rams.sort((a, b) => a.prezzo - b.prezzo);

    return (
      <div>
        <div>
          <div className="selPrice mb-5">
            {" "}
            <h3 className="selezionaScritta ">Seleziona delle RAM</h3>
            <div className="totalPrice">Totale: {this.props.totalPrice}&euro;</div>
          </div>
          <div className="componentContainer row gap-3">
            {sortedRams.map((ram) => (
              <div
                className="onClickDiv col-sm-12 col-md-5 col-xl-2"
                onClick={() => this.handleRamSelection(ram)}
                key={ram.id}
              >
                <div className={selectedRam === ram ? "selected divButton" : "divButton"}>
                  <div className="Layout">
                    <div className="fs-4 mb-1">{ram.nome}</div>
                    <div>Capacità: {ram.capacita}GB</div>
                    <div>Frequenza: {ram.frequenza}MHz</div>
                    <div>Prezzo: {ram.prezzo}&euro;</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedRam && (
          <div className="avantiDiv">
            <Link className="freccia" to="/dissipatore">
              AVANTI
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Ram;
