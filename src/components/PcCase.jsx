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
    return (
      <div>
        <h2 className="selezionaScritta">Seleziona un Pc Case</h2>
        <div className="d-flex">
          {pcCases.map((pcCase) => (
            <div className={selectedPcCase === pcCase ? "selected" : ""} key={pcCase.id}>
              <button onClick={() => this.handlePcCaseSelection(pcCase)}>{pcCase.nome}</button>
            </div>
          ))}
        </div>
        {selectedPcCase && (
          <div className="avantiDiv">
            {" "}
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
