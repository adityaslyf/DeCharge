"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/page";
import { useSearchParams } from 'next/navigation';
import SolanaPaymentComponent from "../components/SolanaPaymentComponent"; // Ensure the correct path to SolanaPaymentComponent
import { Suspense } from 'react';

interface CompleteContent {}



const CompletePayment: React.FC = () =>{
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CompleteContent />
    </Suspense>
  );
}



const CompleteContent: React.FC<CompleteContent> = (): JSX.Element => {
  const searchParams = useSearchParams();
  const price = searchParams.get('price');
  const quantityParam = searchParams.get('quantity');

  const pricePerUnit: number = parseFloat(price || '100'); // Default price per item
  const initialQuantity: number = parseInt(quantityParam || '2'); // Default quantity if parsing fails

  const [quantity, setQuantity] = useState<number>(initialQuantity); // State to manage quantity
//   const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false); // State to control dialog visibility
  const solToUsdRate: number = 109.5; // Conversion rate (example value)
  const totalPrice: number = quantity * pricePerUnit;
  const totalSOL: string = (totalPrice / solToUsdRate).toFixed(2);

  const handleDecrement = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = (): void => {
    setQuantity(quantity + 1);
  };

//   const handlePayNow = (): void => {
//     setIsDialogOpen(true); // Open the dialog when the "Pay Now" button is clicked
//   };

//   const handleCloseDialog = (): void => {
//     setIsDialogOpen(false); // Close the dialog
//   };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="p-6 md:p-10 text-white flex justify-center items-center">
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
              <span className="text-xl">${totalPrice.toFixed(2)}</span>
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
              <SolanaPaymentComponent
                amount={parseFloat(totalSOL)} // Pass the total amount in SOL
                recipientAddress="EoL8JTd3rx5kBZ1ayhu5f6q7tsNLcLnwbdJdvXJXf9xy" // Replace with the actual recipient address
                
              />
            </div>
          </div>
        </div>
      </div>

      {/* Render PaymentSuccessDialog when isDialogOpen is true */}
      {/* {isDialogOpen && <PaymentSuccessDialog onClose={handleCloseDialog} />} */}
    </div>
  );
};

export default CompletePayment;
