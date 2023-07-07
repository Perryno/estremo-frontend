import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
function MyDropdown() {
  return (
    <>
      <Dropdown className="mt-2">
        <Dropdown.Toggle variant="grey" className="border-0 MyDropdown" id="dropdown-basic">
          Componenti
        </Dropdown.Toggle>

        <Dropdown.Menu variant="primary" className="dropdown">
          <Link to="componenti/processori" className="dropdownItem">
            <Dropdown.Item as="div">Processori</Dropdown.Item>
          </Link>
          <Link to="componenti/gpu" className="dropdownItem">
            <Dropdown.Item as="div">Schede video</Dropdown.Item>
          </Link>
          <Link to="componenti/ram" className="dropdownItem">
            <Dropdown.Item as="div">Ram</Dropdown.Item>
          </Link>
          <Link to="componenti/ssd" className="dropdownItem">
            <Dropdown.Item as="div">Memorie</Dropdown.Item>
          </Link>
          <Link to="componenti/psu" className="dropdownItem">
            <Dropdown.Item as="div">Alimentatori</Dropdown.Item>
          </Link>
          <Link to="componenti/dissipatori" className="dropdownItem">
            <Dropdown.Item as="div">Dissipatori</Dropdown.Item>
          </Link>
          <Link to="componenti/case" className="dropdownItem">
            <Dropdown.Item as="div">Case</Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default MyDropdown;
