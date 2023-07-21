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

  //modulare o no
  renderModularityIcon(psu) {
    if (psu.modulare) {
      return <span>&#10004;</span>; // Spunta (✔)
    } else {
      return <span>&#10008;</span>; // Croce (✘)
    }
  }

  render() {
    const { psus, selectedPsu } = this.state;

    // Ordina gli elementi in base al prezzo
    const sortedPsus = psus.sort((a, b) => a.prezzo - b.prezzo);

    return (
      <div>
        <div>
          <div className="selPrice mb-5">
            {" "}
            <h3 className="selezionaScritta ">Seleziona un alimentatore</h3>
            <div className="totalPrice">Totale: {this.props.totalPrice}&euro;</div>
          </div>
          <div className="componentContainer row gap-3">
            {sortedPsus.map((psu) => (
              <div
                key={psu.id}
                className="onClickDiv col-sm-12 col-md-5 col-xl-2"
                onClick={() => this.handlePsuSelection(psu)}
              >
                <div className={selectedPsu === psu ? "selected divButton" : "divButton"}>
                  <div className="Layout">
                    <div className="fs-4 mb-1">{psu.nome}</div>
                    <div>Potenza: {psu.wattaggio}W</div>
                    <div>Modulare: {this.renderModularityIcon(psu)}</div>
                    <div>Prezzo: {psu.prezzo}&euro;</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="frecceDiv">
          <Link className="freccia-sinistra freccia" to="/ssd">
            INDIETRO
          </Link>
          {selectedPsu && (
            <Link className="freccia" to="/pccase">
              AVANTI
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Psu;
