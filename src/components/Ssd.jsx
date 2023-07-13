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

  render() {
    const { ssds, selectedSsd } = this.state;
    return (
      <div>
        <h2 className="selezionaScritta">Seleziona un SSD</h2>
        <div className="d-flex">
          {ssds.map((ssd) => (
            <div className={selectedSsd === ssd ? "selected" : ""} key={ssd.id}>
              <button onClick={() => this.handleSsdSelection(ssd)}>{ssd.nome}</button>
            </div>
          ))}
        </div>
        {selectedSsd && (
          <div className="avantiDiv">
            {" "}
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
