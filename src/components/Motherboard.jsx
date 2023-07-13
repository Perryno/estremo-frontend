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
    return (
      <div>
        <div>
          <h2>Seleziona una scheda madre</h2>
          <div className="d-flex">
            {motherboards.map((motherboard) => (
              <div className={selectedMotherboard === motherboard ? "selected" : ""} key={motherboard.id}>
                <button onClick={() => this.handleMotherboardSelection(motherboard)}>{motherboard.nome}</button>
              </div>
            ))}
          </div>
        </div>
        {selectedMotherboard && <Link to="/ram">Freccia</Link>}
      </div>
    );
  }
}

export default Motherboard;
