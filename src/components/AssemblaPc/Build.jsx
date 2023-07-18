import React, { Component } from "react";
import { Link } from "react-router-dom";
import intel from "../../assets/Intel_Core_2020_logo.svg.png";
import amd from "../../assets/Ryzen-AMD-White-Logo.wine.png";

class Build extends Component {
  state = {
    selectedBrand: null
  };

  handleBrandSelection = (brand) => {
    this.setState({ selectedBrand: brand });
    this.props.onBrandSelected(brand);
  };

  isSelectionValid = () => {
    return this.state.selectedBrand !== null;
  };

  render() {
    const { selectedBrand } = this.state;

    return (
      <div>
        <h3 className="selezionaScritta ">Seleziona un brand</h3>
        <div className="buttonContainer gap-4 row mt-5">
          <button
            onClick={() => this.handleBrandSelection("Intel")}
            className={`intel logoBox col-md-5  ${selectedBrand === "Intel" ? "selected" : ""}`}
          >
            <div>
              <img src={intel} alt="intel" />
            </div>
          </button>

          <button
            onClick={() => this.handleBrandSelection("amd")}
            className={`amd logoBox col-md-5 ${selectedBrand === "amd" ? "selected" : ""}`}
          >
            <div>
              <img src={amd} alt="amd" />
            </div>
          </button>
        </div>
        {selectedBrand && (
          <div className="avantiDiv">
            {" "}
            <Link className="freccia" to="/cpu">
              AVANTI
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Build;
