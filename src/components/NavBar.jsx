import { Link } from "react-router-dom";
import logo from "../assets/_d825c2ac-640e-4283-8f4e-d7fb167e7369 (1).png";
import MyDropdown from "./MyDropdown";

const NavBar = () => {
  return (
    <nav id="navBar">
      <img id="navLogo" src={logo} alt="Logo estremo" />

      <Link to="/" className="navLayout homeButton ">
        Home
      </Link>

      <MyDropdown />

      <div className="mt-2">
        <input type="text" placeholder="Cerca" name="cerca" id="cerca" />
      </div>
    </nav>
  );
};

export default NavBar;
