import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Build from "components/AssemblaPc/Build";
import Cpu from "components/AssemblaPc/Cpu";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Info from "./components/Info";
import Fondatori from "components/Fondatori";
import Lavora from "components/Lavora";
import Motherboard from "components/AssemblaPc/Motherboard";
import Ram from "components/AssemblaPc/Ram";
import Dissipatore from "components/AssemblaPc/Dissipatore";
import Gpu from "components/AssemblaPc/Gpu";
import Ssd from "components/AssemblaPc/Ssd";
import Psu from "components/AssemblaPc/Psu";
import PcCase from "components/AssemblaPc/PcCase";
import Summary from "components/AssemblaPc/Summary";
import NotFound from "components/NotFound";
import DettagliPreassemblato from "components/DettagliPreassemblato";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

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

  calculateTotalPrice = () => {
    const {
      selectedDissipatore,
      selectedGpu,
      selectedMotherboard,
      selectedPcCase,
      selectedProcessor,
      selectedPsu,
      selectedRam,
      selectedSsd
    } = this.state;

    let totalPrice = 0;

    // Aggiungi i prezzi dei singoli componenti al prezzo totale
    if (selectedDissipatore) {
      totalPrice += selectedDissipatore.prezzo;
    }
    if (selectedGpu) {
      totalPrice += selectedGpu.prezzo;
    }
    if (selectedMotherboard) {
      totalPrice += selectedMotherboard.prezzo;
    }
    if (selectedPcCase) {
      totalPrice += selectedPcCase.prezzo;
    }
    if (selectedProcessor) {
      totalPrice += selectedProcessor.prezzo;
    }
    if (selectedPsu) {
      totalPrice += selectedPsu.prezzo;
    }
    if (selectedRam) {
      totalPrice += selectedRam.prezzo;
    }
    if (selectedSsd) {
      totalPrice += selectedSsd.prezzo;
    }

    return totalPrice;
  };
  handleResetState = (resetState) => {
    this.setState(resetState);
  };
  handleBrandSelection = (brand) => {
    this.setState({
      selectedBrand: brand
    });
  };
  handleProcessorSelection = (processor) => {
    this.setState({ selectedProcessor: processor }, () => {
      this.setState({ totalPrice: this.calculateTotalPrice() });
    });
  };

  handleMotherboardSelection = (motherboard) => {
    this.setState({ selectedMotherboard: motherboard }, () => {
      this.setState({ totalPrice: this.calculateTotalPrice() });
    });
  };

  handleRamSelection = (ram) => {
    this.setState({ selectedRam: ram }, () => {
      this.setState({ totalPrice: this.calculateTotalPrice() });
    });
  };

  handleDissipatoreSelection = (dissipatore) => {
    this.setState({ selectedDissipatore: dissipatore }, () => {
      this.setState({ totalPrice: this.calculateTotalPrice() });
    });
  };

  handleGpuSelection = (gpu) => {
    this.setState({ selectedGpu: gpu }, () => {
      this.setState({ totalPrice: this.calculateTotalPrice() });
    });
  };

  handleSsdSelection = (ssd) => {
    this.setState({ selectedSsd: ssd }, () => {
      this.setState({ totalPrice: this.calculateTotalPrice() });
    });
  };

  handlePsuSelection = (psu) => {
    this.setState({ selectedPsu: psu }, () => {
      this.setState({ totalPrice: this.calculateTotalPrice() });
    });
  };

  handlePcCaseSelection = (pcCase) => {
    this.setState({ selectedPcCase: pcCase }, () => {
      this.setState({ totalPrice: this.calculateTotalPrice() });
    });
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
      selectedPcCase,
      totalPrice
    } = this.state;
    return (
      <div>
        <PayPalScriptProvider
          options={{ clientId: "AXai-geAXdhjBK_8IAGGDUwOr5s8cE2gphvhwXiGssWIBqKmsgq0fSmhgyDMarkiNbb3_cbvewyoUFrM" }}
        >
          <BrowserRouter>
            <div className="App ">
              <NavBar onResetState={this.handleResetState} />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/lavora" element={<Lavora />} />
                <Route path="/fondatori" element={<Fondatori />} />
                <Route path="/build" element={<Build onBrandSelected={this.handleBrandSelection} />} />
                <Route
                  path="/cpu"
                  element={
                    <Cpu
                      totalPrice={totalPrice}
                      onProcessorSelected={this.handleProcessorSelection}
                      selectedBrand={selectedBrand}
                    />
                  }
                />
                <Route
                  path="/motherboard"
                  element={
                    <Motherboard
                      totalPrice={totalPrice}
                      onMotherboardSelected={this.handleMotherboardSelection}
                      selectedBrand={selectedBrand}
                    />
                  }
                />
                <Route path="/ram" element={<Ram totalPrice={totalPrice} onRamSelected={this.handleRamSelection} />} />

                <Route
                  path="/dissipatore"
                  element={
                    <Dissipatore totalPrice={totalPrice} onDissipatoreSelected={this.handleDissipatoreSelection} />
                  }
                />
                <Route path="/gpu" element={<Gpu totalPrice={totalPrice} onGpuSelected={this.handleGpuSelection} />} />
                <Route path="/ssd" element={<Ssd totalPrice={totalPrice} onSsdSelected={this.handleSsdSelection} />} />
                <Route path="/psu" element={<Psu totalPrice={totalPrice} onPsuSelected={this.handlePsuSelection} />} />
                <Route
                  path="/pccase"
                  element={<PcCase totalPrice={totalPrice} onPcCaseSelected={this.handlePcCaseSelection} />}
                />
                <Route
                  path="/summary"
                  element={
                    <Summary
                      selectedProcessor={selectedProcessor}
                      selectedMotherboard={selectedMotherboard}
                      selectedRam={selectedRam}
                      selectedDissipatore={selectedDissipatore}
                      selectedGpu={selectedGpu}
                      selectedSsd={selectedSsd}
                      selectedPsu={selectedPsu}
                      selectedPcCase={selectedPcCase}
                      totalPrice={totalPrice}
                    />
                  }
                />
                <Route path="/preassemblati/:id" element={<DettagliPreassemblato />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </PayPalScriptProvider>
      </div>
    );
  }
}

export default App;
