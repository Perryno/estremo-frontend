import React, { Component } from "react";
import { Link } from "react-router-dom";

class Summary extends Component {
  render() {
    const {
      selectedBrand,
      selectedProcessor,
      selectedMotherboard,
      selectedRam,
      selectedDissipatore,
      selectedGpu,
      selectedSsd,
      selectedPsu,
      selectedPcCase
    } = this.props;

    return (
      <div>
        <h2>Riepilogo della configurazione</h2>

        <p>Processore selezionato: {selectedProcessor && selectedProcessor.nome}</p>
        <p>Scheda madre selezionata: {selectedMotherboard && selectedMotherboard.nome}</p>
        <p>RAM selezionata: {selectedRam && selectedRam.nome}</p>
        <p>Dissipatore selezionato: {selectedDissipatore && selectedDissipatore.nome}</p>
        <p>Scheda grafica selezionata: {selectedGpu && selectedGpu.nome}</p>
        <p>SSD selezionato: {selectedSsd && selectedSsd.nome}</p>
        <p>Alimentatore selezionato: {selectedPsu && selectedPsu.nome}</p>
        <p>Cabinet selezionato: {selectedPcCase && selectedPcCase.nome}</p>
      </div>
    );
  }
}

export default Summary;
