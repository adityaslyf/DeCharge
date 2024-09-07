"use client";
import React from "react";
import Image from "next/image";

interface PaymentSuccessDialogProps {
  onClose: () => void;
}

const PaymentSuccessDialog: React.FC<PaymentSuccessDialogProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-4xl border border-[#ECFDFE] p-6 bg-black rounded-lg relative">
        <button
          className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
        <div className="flex flex-col justify-center items-center space-y-10 mb-4">
          <div className="text-[#d9fcfd] text-4xl font-semibold font-['Inter'] text-center">
            Payment Successful  
          </div>
          <div className="text-center">
            <Image
              src="/clarity_success-standard-line.png"
              width={200}
              height={200}
              alt="Success"
            />
          </div>
          <div className="text-center text-[#ecfdfe] text-2xl font-normal font-['Inter']">
            You will receive a confirmation email shortly
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessDialog;
