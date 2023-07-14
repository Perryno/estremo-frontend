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

    // Ordina gli elementi in base al prezzo
    const sortedProcessors = processors.sort((a, b) => a.prezzo - b.prezzo);
    return (
      <div>
        <div>
          <h2 className="selezionaScritta">Seleziona un processore</h2>
          <div className=" componentContainer row gap-3 ">
            {sortedProcessors.map((processor) => (
              <div
                key={processor.id}
                className="onClickDiv col-sm-12 col-md-5 col-xl-2 "
                onClick={() => this.handleProcessorSelection(processor)}
              >
                <div className={selectedProcessor === processor ? "selected divButton  " : "divButton  "}>
                  <div className="Layout">
                    <div className="fs-4 mb-1">{processor.nome}</div>
                    <div>Prezzo: {processor.prezzo}&euro;</div>
                  </div>
                </div>
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
