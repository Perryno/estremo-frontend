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
        <div className="cards container row">
          <div className="card rem18 col-sm-12 col-md-6 col-lg-3">
            <img src={pcAzzurro} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
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
