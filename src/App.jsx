import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Build from "components/Build";
import Cpu from "components/Cpu";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Info from "./components/Info";
import Fondatori from "components/Fondatori";
import Lavora from "components/Lavora";
import Motherboard from "components/Motherboard";
import Ram from "components/Ram";
import Dissipatore from "components/Dissipatore";
import Gpu from "components/Gpu";
import Ssd from "components/Ssd";
import Psu from "components/Psu";
import PcCase from "components/PcCase";
import Summary from "components/Summary";
import NotFound from "components/NotFound";

class App extends Component {
  state = {
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
  handleBrandSelection = (brand) => {
    this.setState({
      selectedBrand: brand
    });
  };
  handleProcessorSelection = (processor) => {
    this.setState({ selectedProcessor: processor });
  };
  handleMotherboardSelection = (motherboard) => {
    this.setState({ selectedMotherboard: motherboard });
  };

  handleRamSelection = (ram) => {
    this.setState({ selectedRam: ram });
  };

  handleDissipatoreSelection = (dissipatore) => {
    this.setState({ selectedDissipatore: dissipatore });
  };

  handleGpuSelection = (gpu) => {
    this.setState({ selectedGpu: gpu });
  };
  handleSsdSelection = (ssd) => {
    this.setState({ selectedSsd: ssd });
  };
  handlePsuSelection = (psu) => {
    this.setState({ selectedPsu: psu });
  };
  handlePcCaseSelection = (pcCase) => {
    this.setState({ selectedPcCase: pcCase });
  };
  render() {
    const {
      selectedBrand,
      selectedProcessor,
      selectedMotherboard,
      selectedRam,
      selectedDissipatore,
      selectedGpu,
      selectedSsd,
      selectedPsu,
      selectedPcCase
    } = this.state;
    return (
      <div>
        <BrowserRouter>
          <div className="App ">
            <NavBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<Info />} />
              <Route path="/lavora" element={<Lavora />} />
              <Route path="/fondatori" element={<Fondatori />} />
              <Route path="/build" element={<Build onBrandSelected={this.handleBrandSelection} />} />
              <Route
                path="/cpu"
                element={<Cpu onProcessorSelected={this.handleProcessorSelection} selectedBrand={selectedBrand} />}
              />
              <Route
                path="/motherboard"
                element={
                  <Motherboard onMotherboardSelected={this.handleMotherboardSelection} selectedBrand={selectedBrand} />
                }
              />
              <Route path="/ram" element={<Ram onRamSelected={this.handleRamSelection} />} />

              <Route
                path="/dissipatore"
                element={<Dissipatore onDissipatoreSelected={this.handleDissipatoreSelection} />}
              />
              <Route path="/gpu" element={<Gpu onGpuSelected={this.handleGpuSelection} />} />
              <Route path="/ssd" element={<Ssd onSsdSelected={this.handleSsdSelection} />} />
              <Route path="/psu" element={<Psu onPsuSelected={this.handlePsuSelection} />} />
              <Route path="/pccase" element={<PcCase onPcCaseSelected={this.handlePcCaseSelection} />} />
              <Route
                path="/summary"
                element={
                  <Summary
                    selectedBrand={selectedBrand}
                    selectedProcessor={selectedProcessor}
                    selectedMotherboard={selectedMotherboard}
                    selectedRam={selectedRam}
                    selectedDissipatore={selectedDissipatore}
                    selectedGpu={selectedGpu}
                    selectedSsd={selectedSsd}
                    selectedPsu={selectedPsu}
                    selectedPcCase={selectedPcCase}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
