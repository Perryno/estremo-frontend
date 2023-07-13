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
    return (
      <div>
        <div>
          <h3 className="selezionaScritta">Seleziona una RAM</h3>
          <div className="d-flex">
            {rams.map((ram) => (
              <div className={selectedRam === ram ? "selected" : ""} key={ram.id}>
                <button onClick={() => this.handleRamSelection(ram)}>{ram.nome}</button>
              </div>
            ))}
          </div>
        </div>
        {selectedRam && (
          <div className="avantiDiv">
            {" "}
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
