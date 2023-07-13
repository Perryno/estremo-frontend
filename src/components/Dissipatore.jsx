import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dissipatore extends Component {
  state = {
    dissipatori: [],
    selectedDissipatore: null
  };

  componentDidMount() {
    console.log("Richiesta dissipatori in corso...");
    fetch("http://localhost:8080/dissipatore")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati dissipatori ricevuti:", data);
        this.setState({ dissipatori: data });
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }

  handleDissipatoreSelection = (dissipatore) => {
    this.setState({ selectedDissipatore: dissipatore });
    this.props.onDissipatoreSelected(dissipatore);
  };

  render() {
    const { dissipatori, selectedDissipatore } = this.state;

    return (
      <div>
        <div>
          <h3 className="selezionaScritta">Seleziona un dissipatore</h3>
          <div className="d-flex">
            {dissipatori.map((dissipatore) => (
              <div className={selectedDissipatore === dissipatore ? "selected" : ""} key={dissipatore.id}>
                <button onClick={() => this.handleDissipatoreSelection(dissipatore)}>{dissipatore.nome}</button>
              </div>
            ))}
          </div>
        </div>
        {selectedDissipatore && (
          <div className="avantiDiv">
            {" "}
            <Link className="freccia" to="/gpu">
              AVANTI
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Dissipatore;
