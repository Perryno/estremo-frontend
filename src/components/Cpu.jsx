import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cpu extends Component {
  state = {
    processors: [],
    selectedProcessor: null
  };

  componentDidMount() {
    const brand = this.props.selectedBrand === "amd" ? "AM5" : "LGA1700";

    console.log("Richiesta CPU in corso...");
    console.log(brand);
    fetch(`http://localhost:8080/cpu/socket/${brand}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati CPU ricevuti:", data);
        this.setState({ processors: data });
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }

  handleProcessorSelection = (processor) => {
    this.setState({ selectedProcessor: processor });
    this.props.onProcessorSelected(processor);
  };

  isSelectionValid = () => {
    return this.state.selectedProcessor !== null;
  };

  render() {
    const { processors, selectedProcessor } = this.state;
    return (
      <div>
        <div>
          <h2 className="selezionaScritta">Seleziona un processore</h2>
          <div className="d-flex">
            {processors.map((processor) => (
              <div className={selectedProcessor === processor ? "selected" : ""} key={processor.id}>
                <button onClick={() => this.handleProcessorSelection(processor)}>{processor.nome}</button>
              </div>
            ))}
          </div>
        </div>
        {selectedProcessor && (
          <div className="avantiDiv">
            {" "}
            <Link className="freccia" to="/motherboard">
              AVANTI
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Cpu;
