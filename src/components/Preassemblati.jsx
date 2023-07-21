import React, { Component } from "react";
import { Link } from "react-router-dom";
import pcAzzurro from "../assets/azzurro.webp";
import pcBlu from "../assets/blupc.png";
import pcNzxt from "../assets/nzxt.webp";
import pcBianco from "../assets/pc bianco.png";
import pcRosso from "../assets/pc rosso.png";
import pcRossoDue from "../assets/pc rosso 2.webp";
import pcFantc from "../assets/case che voglio io.png";
import pcBiancoColorato from "../assets/pc bianco ma colorato.png";

class Preassemblati extends Component {
  state = {
    preassemblati: []
  };

  componentDidMount() {
    // Effettua la fetch per ottenere i dati dei PC preassemblati
    fetch("http://localhost:8080/preassemblati")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ preassemblati: data });
      })
      .catch((error) => {
        console.log("Errore durante la fetch:", error);
      });
  }

  getPCImage = (id) => {
    switch (id) {
      case 1:
        return pcBlu;
      case 2:
        return pcNzxt;
      case 3:
        return pcAzzurro;
      case 4:
        return pcBianco;
      case 9:
        return pcRosso;
      case 10:
        return pcRossoDue;
      case 11:
        return pcBiancoColorato;
      case 12:
        return pcFantc;
      default:
        return pcAzzurro;
    }
  };

  render() {
    const { preassemblati } = this.state;
    const sortedPreassemblati = preassemblati.slice().sort((a, b) => a.prezzo - b.prezzo);
    return (
      <div>
        <h3 className="text-start mb-4 h2">PC preassemblati</h3>
        <div className="cards row preassemblatiContainer gap-5">
          {sortedPreassemblati.map((pc) => (
            <div
              className={`card rem18 col-sm-12 col-md-6 col-lg-3 ${pc.cpu.startsWith("R") ? "red-card" : "blue-card"}`}
              key={pc.id}
            >
              <img src={this.getPCImage(pc.id)} className="card-img-top" alt="PC" />
              <div className="card-body">
                <h5 className="card-title">{pc.nome}</h5>
                <p className="card-text">
                  CPU: {pc.cpu} <br />
                  GPU: {pc.gpu} <br />
                  SSD: {pc.ssd} <br />
                  Prezzo: {pc.prezzo}€ <br />
                </p>
                <Link
                  to={`/preassemblati/${pc.id}`}
                  className="btn btn-light
      "
                >
                  Acquista
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Preassemblati;
