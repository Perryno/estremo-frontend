import React, { Component } from "react";
import { Link } from "react-router-dom";

class Motherboard extends Component {
  state = {
    motherboards: [],
    selectedMotherboard: null
  };

  componentDidMount() {
    const brand = this.props.selectedBrand === "amd" ? "AM5" : "LGA1700";

    console.log("Richiesta Motherboard in corso...");
    console.log(brand);
    fetch(`http://localhost:8080/motherboard/socket/${brand}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati motherboard ricevuti:", data);
        this.setState({ motherboards: data });
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }

  handleMotherboardSelection = (motherboard) => {
    this.setState({ selectedMotherboard: motherboard });
    this.props.onMotherboardSelected(motherboard);
  };

  isSelectionValid = () => {
    return this.state.selectedMotherboard !== null;
  };

  render() {
    const { motherboards, selectedMotherboard } = this.state;

    // Ordina gli elementi in base al prezzo
    const sortedMotherboards = motherboards.sort((a, b) => a.prezzo - b.prezzo);
    return (
      <div>
        <div>
          <div className="selPrice mb-5">
            {" "}
            <h3 className="selezionaScritta ">Seleziona una scheda madre</h3>
            <div className="totalPrice">Totale: {this.props.totalPrice}&euro;</div>
          </div>

          <div className="componentContainer row gap-3">
            {sortedMotherboards.map((motherboard) => (
              <div
                className="onClickDiv col-sm-12 col-md-5 col-xl-2"
                key={motherboard.id}
                onClick={() => this.handleMotherboardSelection(motherboard)}
              >
                <div className={selectedMotherboard === motherboard ? "selected divButton" : "divButton"}>
                  <div className="Layout">
                    <div className="fs-4 mb-1">{motherboard.nome}</div>
                    <div>Prezzo: {motherboard.prezzo}&euro;</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedMotherboard && (
          <div className="avantiDiv">
            {" "}
            <Link className="freccia" to="/ram">
              AVANTI
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Motherboard;
