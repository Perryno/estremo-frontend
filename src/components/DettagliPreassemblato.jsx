import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const DettagliPreassemblato = () => {
  const [preassemblato, setPreassemblato] = useState(null);
  const [paypalError, setPaypalError] = useState(false); // Stato per gestire l'errore di PayPal
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/preassemblati/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPreassemblato(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handlePaypalError = (event) => {
    event.preventDefault(); // Previeni il comportamento predefinito dell'errore di PayPal
    console.error("Errore PayPal:", event.detail);
  };

  if (!preassemblato) {
    return <div>Loading...</div>;
  }

  const amount = preassemblato.prezzo;
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
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {});
        }}
      />
    );
  };

  return (
    <div>
      <h3>{preassemblato.nome}</h3>
      <p>Prezzo: {preassemblato.prezzo}</p>
      <p>CPU: {preassemblato.cpu}</p>
      <p>GPU: {preassemblato.gpu}</p>
      <p>SSD: {preassemblato.ssd}</p>
      <p>Punteggio: {preassemblato.punteggio}</p>
      <p>prezzo: {preassemblato.prezzo}</p>
      <div>
        <PayPalScriptProvider
          options={{ clientId: "AXai-geAXdhjBK_8IAGGDUwOr5s8cE2gphvhwXiGssWIBqKmsgq0fSmhgyDMarkiNbb3_cbvewyoUFrM" }}
        >
          <div id="zoid-paypal-buttons-uid_fc26d34389_mtq6ntq6mty">
            <ButtonWrapper currency={currency} />
          </div>
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default DettagliPreassemblato;
