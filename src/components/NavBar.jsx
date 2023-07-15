import { Link } from "react-router-dom";
import logo from "../assets/_d825c2ac-640e-4283-8f4e-d7fb167e7369 (1).png";
import MyDropdown from "./MyDropdown";
import { Component } from "react";

class NavBar extends Component {
  handleResetState = () => {
    const resetState = {
      selectedBrand: null,
      selectedProcessor: null,
      selectedMotherboard: null,
      selectedRam: null,
      selectedDissipatore: null,
      selectedGpu: null,
      selectedSsd: null,
      selectedPsu: null,
      selectedPcCase: null,
      totalPrice: 0
    };

    this.props.onResetState(resetState);
  };

  render() {
    return (
      <nav id="navBar">
        <img id="navLogo" src={logo} alt="Logo estremo" />

        <Link to="/" className="navLayout homeButton" onClick={this.handleResetState}>
          Home
        </Link>

        <MyDropdown />

        <div className="mt-2">
          <input type="text" placeholder="Cerca" name="cerca" id="cerca" />
        </div>
      </nav>
    );
  }
}

export default NavBar;
