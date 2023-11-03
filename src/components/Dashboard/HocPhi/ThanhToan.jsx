import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './ThanhToan.css';

export default function ThanhToan() {
  const [showQR, setShowQR] = useState(false);

  const handlePrintInvoice = () => {
    setShowQR(true);
  };

  return (
    <div className="thanhtoan-container">
      <h2>Thanh Toán</h2>
      <div>
        {showQR ? (
          <QRCode value="Thông tin thanh toán" />
        ) : (
          <p>Hãy nhấn in hóa đơn để xem mã QR</p>
        )}
      </div>
      <button className="print-invoice-button" onClick={handlePrintInvoice}>
        In hóa đơn
      </button>
    </div>
  );
}
