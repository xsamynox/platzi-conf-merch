import React from 'react';
import '../style/components/Payment.css';


const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">
          Botón de pago con Paypal
        </div>
      </div>
    </div>
  );
}

export default Payment;