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

    // Ordina gli elementi in base al prezzo
    const sortedGpus = gpus.sort((a, b) => a.prezzo - b.prezzo);
    return (
      <div>
        <div>
          <h2 className="selezionaScritta">Seleziona una scheda grafica</h2>
          <div className="componentContainer row gap-3">
            {sortedGpus.map((gpu) => (
              <div
                key={gpu.id}
                className="onClickDiv col-sm-12 col-md-5 col-xl-2"
                onClick={() => this.handleGpuSelection(gpu)}
              >
                <div className={selectedGpu === gpu ? "selected divButton" : "divButton"}>
                  <div className="Layout">
                    <div className="fs-4 mb-1">{gpu.nome}</div>
                    <div>VRAM: {gpu.vram}GB</div>
                    <div>prezzo: {gpu.prezzo}&euro;</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedGpu && (
          <div className="avantiDiv">
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
