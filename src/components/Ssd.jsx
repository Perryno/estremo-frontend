import React, { Component } from "react";
import { Link } from "react-router-dom";

class Ssd extends Component {
  state = {
    ssds: [],
    selectedSsd: null
  };

  componentDidMount() {
    console.log("Richiesta SSD in corso...");
    fetch("http://localhost:8080/ssd")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati SSD ricevuti:", data);
        this.setState({ ssds: data });
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }

  handleSsdSelection = (ssd) => {
    this.setState({ selectedSsd: ssd });
    this.props.onSsdSelected(ssd);
  };

  //Funzione per Terabyte
  formatCapacity(ssd) {
    if (ssd.capacita > 999) {
      const tb = ssd.capacita / 1000;
      return `${tb} TB`;
    } else {
      return `${ssd.capacita} GB`;
    }
  }

  render() {
    const { ssds, selectedSsd } = this.state;

    // Ordina gli elementi in base al prezzo
    const sortedSsds = ssds.sort((a, b) => a.prezzo - b.prezzo);

    return (
      <div>
        <div>
          <h2 className="selezionaScritta">Seleziona un SSD</h2>
          <div className="componentContainer row gap-3">
            {sortedSsds.map((ssd) => (
              <div
                key={ssd.id}
                className="onClickDiv col-sm-12 col-md-5 col-xl-2"
                onClick={() => this.handleSsdSelection(ssd)}
              >
                <div className={selectedSsd === ssd ? "selected divButton" : "divButton"}>
                  <div className="Layout">
                    <div className="fs-4 mb-1">{ssd.nome}</div>
                    <div>Capacità: {this.formatCapacity(ssd)}</div>
                    <div>prezzo: {ssd.prezzo}&euro;</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedSsd && (
          <div className="avantiDiv">
            <Link className="freccia" to="/psu">
              AVANTI
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Ssd;
