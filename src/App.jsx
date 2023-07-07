import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Info from "./components/Info";
import Fondatori from "components/Fondatori";
function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/fondatori" element={<Fondatori />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;