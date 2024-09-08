"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/page";
import PaymentSuccessDialog from "../Success/dialog"; // Import the PaymentSuccessDialog component

const MacbookPro: React.FC = (): JSX.Element => {
  const [quantity, setQuantity] = useState<number>(2); // State to manage quantity
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false); // State to control dialog visibility
  const pricePerUnit = 100; // Price per item
  const solToUsdRate = 1.5; // Conversion rate (example value)
  const totalPrice = quantity * pricePerUnit;
  const totalSOL = (totalPrice / solToUsdRate).toFixed(2);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handlePayNow = () => {
    setIsDialogOpen(true); // Open the dialog when the "Pay Now" button is clicked
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="p-6 md:p-10 text-white flex justify-center items-center ">
        <div className="flex flex-col gap-6 w-full max-w-5xl space-y-8">
          <div className="w-full border p-6 space-y-4">
            <h2 className="font-bold text-2xl md:text-3xl text-center">
              Complete Payment
            </h2>
            <p className="font-medium text-sm text-center">New SOL price in 60 s</p>

            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-primary-50 text-lg">
                DeCharge Mini
              </span>
              <div className="flex items-center space-x-2">
                <button
                  className="px-4 py-2 rounded-full border border-secondary-500 flex justify-center items-center"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span className="font-normal text-lg">{quantity}</span>
                <button
                  className="px-4 py-2 rounded-full border border-secondary-500 flex justify-center items-center"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-xl">Amount</span>
              <span className="text-xl">${totalPrice}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-xl">Payment token</span>
              <span className="text-xl">SOL</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-xl">Contact Info</span>
              <div className="text-right text-xl">
                Lorem Ipsum
                <br />
                Lorem1iso@gmai.com
                <br />
                Vietnam
              </div>
            </div>
            <div className="space-y-6">
              <hr />
              <div className="flex justify-between mb-4">
                <span className="text-xl">Total</span>
                <span className="text-xl">{totalSOL} SOL</span>
              </div>
              <hr />
              <button
                className="w-full py-3 mt-6 bg-gradient-to-b from-cyan-300 to-cyan-500 rounded-lg font-normal text-primary-900 text-xl text-center"
                onClick={handlePayNow}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render PaymentSuccessDialog when isDialogOpen is true */}
      {isDialogOpen && <PaymentSuccessDialog onClose={handleCloseDialog} />}
    </div>
  );
};

export default MacbookPro;
