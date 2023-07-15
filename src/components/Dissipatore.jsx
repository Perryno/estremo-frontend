import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dissipatore extends Component {
  state = {
    dissipatori: [],
    selectedDissipatore: null
  };

  componentDidMount() {
    console.log("Richiesta dissipatori in corso...");
    fetch("http://localhost:8080/dissipatore")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati dissipatori ricevuti:", data);
        this.setState({ dissipatori: data });
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }

  handleDissipatoreSelection = (dissipatore) => {
    this.setState({ selectedDissipatore: dissipatore });
    this.props.onDissipatoreSelected(dissipatore);
  };

  render() {
    const { dissipatori, selectedDissipatore } = this.state;

    // Ordina gli elementi in base al prezzo
    const sortedDissipatori = dissipatori.sort((a, b) => a.prezzo - b.prezzo);
    return (
      <div>
        <div>
          <div className="selPrice mb-5">
            {" "}
            <h3 className="selezionaScritta ">Seleziona un dissipatore</h3>
            <div className="totalPrice">Totale: {this.props.totalPrice}&euro;</div>
          </div>
          <div className="componentContainer row gap-3">
            {sortedDissipatori.map((dissipatore) => (
              <div
                key={dissipatore.id}
                className="onClickDiv col-sm-12 col-md-5 col-xl-2"
                onClick={() => this.handleDissipatoreSelection(dissipatore)}
              >
                <div className={selectedDissipatore === dissipatore ? "selected divButton" : "divButton"}>
                  <div className="Layout">
                    <div className="fs-4 mb-1">{dissipatore.nome}</div>
                    <div>Prezzo: {dissipatore.prezzo}&euro;</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedDissipatore && (
          <div className="avantiDiv">
            <Link className="freccia" to="/gpu">
              AVANTI
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Dissipatore;
