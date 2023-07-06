import pcAzzurro from "../assets/azzurro.webp";
const Home = () => {
  return (
    <div id="home">
      <div>
        <h1 id="estremoGaming">ESTREMO GAMING</h1>
        <div className="assemblaCont">
          <h2 id="assembla">Assembla il tuo PC</h2>
        </div>
      </div>
      <div>
        <h3 className="text-start">PC preassemblati</h3>
        <div className="cards">
          <div class="card rem18">
            <img src={pcAzzurro} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
