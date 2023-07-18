import React, { Component } from "react";
import { Link } from "react-router-dom";

class PcCase extends Component {
  state = {
    pcCases: [],
    selectedPcCase: null
  };

  componentDidMount() {
    console.log("Richiesta Pc Case in corso...");
    fetch("http://localhost:8080/pccase")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati Pc Case ricevuti:", data);
        this.setState({ pcCases: data });
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }

  handlePcCaseSelection = (pcCase) => {
    this.setState({ selectedPcCase: pcCase });
    this.props.onPcCaseSelected(pcCase);
  };

  render() {
    const { pcCases, selectedPcCase } = this.state;

    // Ordina gli elementi in base al prezzo
    const sortedPcCases = pcCases.sort((a, b) => a.prezzo - b.prezzo);
    return (
      <div>
        <div>
          <div className="selPrice mb-5">
            {" "}
            <h3 className="selezionaScritta ">Seleziona un case</h3>
            <div className="totalPrice">Totale: {this.props.totalPrice}&euro;</div>
          </div>
          <div className="componentContainer row gap-3">
            {sortedPcCases.map((pcCase) => (
              <div
                key={pcCase.id}
                className="onClickDiv col-sm-12 col-md-5 col-xl-2"
                onClick={() => this.handlePcCaseSelection(pcCase)}
              >
                <div className={selectedPcCase === pcCase ? "selected divButton" : "divButton"}>
                  <div className="Layout">
                    <div className="fs-4 mb-1">{pcCase.nome}</div>
                    <div>prezzo: {pcCase.prezzo}&euro;</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedPcCase && (
          <div className="avantiDiv">
            <Link className="freccia" to="/summary">
              AVANTI
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default PcCase;
