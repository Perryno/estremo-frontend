import React, { useEffect, useState } from "react";
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Valorant from "../../assets/valorant.png";
import Warzone from "../../assets/warzone.jpg";
import Cyberpunk from "../../assets/cyberpunk img.jpg";
import Fortnite from "../../assets/fotnite.png";
import GodOfWar from "../../assets/god of war.jpg";
import TheLastOfUs from "../../assets/thelastofus.webp";

const Summary = ({
  selectedProcessor,
  selectedMotherboard,
  selectedRam,
  selectedDissipatore,
  selectedGpu,
  selectedSsd,
  selectedPsu,
  selectedPcCase,
  totalPrice
}) => {
  const punteggioTot =
    (selectedProcessor?.punteggio || 0) + (selectedGpu?.punteggio || 0) + (selectedRam?.punteggio || 0) + 100;

  const amount = totalPrice;
  const currency = "EUR";
  const style = { layout: "vertical" };

  const ButtonWrapper = ({ currency }) => {
    const [{ options }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency
        }
      });
    }, [currency]);
    const handlePaypalError = (event) => {
      event.preventDefault(); // Previeni il comportamento predefinito dell'errore di PayPal
      console.error("Errore PayPal:", event.detail);
    };
    return (
      <PayPalButtons
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        onError={handlePaypalError} // Gestione dell'errore
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount
                  }
                }
              ]
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(() => {
            // Tuo codice dopo la cattura dell'ordine
          });
        }}
      />
    );
  };

  return (
    <div>
      <div className="containerRiepilogo">
        <div className="info riepilogo">
          <h3 className="h2 mb-4">Riepilogo della configurazione</h3>
          <div>
            <p>{selectedProcessor && selectedProcessor.nome}</p>
            <p>{selectedGpu && selectedGpu.nome}</p>
            <p>{selectedMotherboard && selectedMotherboard.nome}</p>
            <p>
              {selectedRam && selectedRam.nome}&nbsp;
              {selectedRam && selectedRam.capacita}GB
            </p>
            <p>{selectedDissipatore && selectedDissipatore.nome}</p>
            <p>
              {selectedSsd && selectedSsd.nome}&nbsp;{selectedSsd && selectedSsd.capacita}GB
            </p>
            <p>{selectedPsu && selectedPsu.nome}</p>
            <p>{selectedPcCase && selectedPcCase.nome}</p>
            <p className="h2 mt-4">Totale: {totalPrice}&euro;</p>
          </div>
        </div>
        <div className="fps info">
          <h3 className="mb-3">FPS medi in 1080p:</h3>
          <div className="gioco mb-3">
            <div className="giocoM">
              <img src={Valorant} alt="valorant" />
              <div>Valorant :</div>
            </div>
            <div>FPS medi {Math.round(punteggioTot)}</div>
          </div>
          <div className="gioco mb-3">
            <div className="giocoM">
              <img src={Warzone} alt="warzone" />
              <div>Warzone :</div>
            </div>
            <div>FPS medi {Math.round(punteggioTot / 3)}</div>
          </div>
          <div className="gioco mb-3">
            <div className="giocoM">
              <img src={Cyberpunk} alt="cyberpunk" />
              <div>Cyberpunk (RTX on) :</div>
            </div>
            <div>FPS medi {Math.round(punteggioTot / 5)}</div>
          </div>
          <div className="gioco mb-3">
            <div className="giocoM">
              <img src={Fortnite} alt="fornite" />
              <div>Fortnite :</div>
            </div>
            <div>FPS medi {Math.round(punteggioTot / 1.3)}</div>
          </div>
          <div className="gioco mb-3">
            <div className="giocoM">
              <img src={GodOfWar} alt="God of war" />
              <div>God of war :</div>
            </div>
            <div>FPS medi {Math.round(punteggioTot / 4)}</div>
          </div>
          <div className="gioco mb-3">
            <div className="giocoM">
              <img src={TheLastOfUs} alt="The last of us" />
              <div>The last of us :</div>
            </div>
            <div>FPS medi {Math.round(punteggioTot / 6.7)}</div>
          </div>
        </div>
      </div>
      <div>
        <div id="zoid-paypal-buttons-uid_fc26d34389_mtq6ntq6mty">
          <ButtonWrapper currency={currency} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
