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
        <h3>Seleziona un Pc Case</h3>
        <div className="d-flex">
          {pcCases.map((pcCase) => (
            <div className={selectedPcCase === pcCase ? "selected" : ""} key={pcCase.id}>
              <button onClick={() => this.handlePcCaseSelection(pcCase)}>{pcCase.nome}</button>
            </div>
          ))}
        </div>
        {selectedPcCase && <Link to="/summary">Freccia</Link>}
      </div>
    );
  }
}

export default PcCase;
