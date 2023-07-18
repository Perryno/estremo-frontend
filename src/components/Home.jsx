import { Link } from "react-router-dom";

import Preassemblati from "./Preassemblati";
const Home = () => {
  return (
    <div id="home">
      <div>
        <h1 id="estremoGaming">ESTREMO GAMING</h1>
        <div className="assemblaCont">
          <Link to={"build"} className="text-decoration-none">
            <h2 id="assembla">Assembla il tuo PC</h2>
          </Link>
        </div>
      </div>
      <Preassemblati />
    </div>
  );
};

export default Home;
