"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

interface PaymentSuccessDialogProps {
  onClose: () => void;
}

const PaymentSuccessDialog: React.FC<PaymentSuccessDialogProps> = ({ onClose }) => {
  const router = useRouter(); 

  const handleGoHome = () => {
    onClose(); 
    router.push("/Home"); 
  };
 
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50">
      <div className="w-full max-w-4xl border border-[#ECFDFE] p-6 bg-black rounded-lg relative">
        <div className="flex flex-col justify-center items-center space-y-10 mb-4">
          <div className="text-[#d9fcfd] text-4xl font-semibold font-['Inter'] text-center">
            Proposal Submitted
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
            The proposal will be active once it has been reviewed and approved
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGoHome} 
            className="px-48 py-3 mt-4 rounded-xl border border-black bg-gradient-to-b from-cyan-200 to-cyan-400 text-black font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessDialog;
