import React, { Component } from "react";
import { Link } from "react-router-dom";

class Gpu extends Component {
  state = {
    gpus: [],
    selectedGpu: null
  };

  componentDidMount() {
    console.log("Richiesta GPU in corso...");
    fetch("http://localhost:8080/gpu")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati GPU ricevuti:", data);
        this.setState({ gpus: data });
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }

  handleGpuSelection = (gpu) => {
    this.setState({ selectedGpu: gpu });
    this.props.onGpuSelected(gpu);
  };

  render() {
    const { gpus, selectedGpu } = this.state;
    return (
      <div>
        <h2 className="selezionaScritta">Seleziona una scheda grafica</h2>
        <div className="d-flex">
          {gpus.map((gpu) => (
            <div className={selectedGpu === gpu ? "selected" : ""} key={gpu.id}>
              <button onClick={() => this.handleGpuSelection(gpu)}>{gpu.nome}</button>
            </div>
          ))}
        </div>
        {selectedGpu && (
          <div className="avantiDiv">
            {" "}
            <Link className="freccia" to="/ssd">
              AVANTI
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Gpu;
