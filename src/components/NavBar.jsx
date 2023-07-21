import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/IMG_7137.PNG";

class NavBar extends Component {
  handleResetState = () => {
    // La tua implementazione handleResetState
  };

  render() {
    return (
      <nav id="navBar">
        <img id="navLogo" src={logo} alt="Logo estremo" />

        <Link to="/" className="navLayout homeButton" onClick={this.handleResetState}>
          Home
        </Link>
        <Link to="assistenza" className="navLayout homeButton">
          Assistenza
        </Link>

        {/* Aggiungi i link ai social media con le icone */}
        <div className="socialMediaLinks navLayout homeButton">
          <a href="https://www.instagram.com/ACCOUNT_INSTAGRAM" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram icon"></i>
          </a>
          <a href="https://www.facebook.com/ACCOUNT_FACEBOOK" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook icon"></i>
          </a>
          <a href="https://twitter.com/ACCOUNT_TWITTER" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter icon"></i>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
