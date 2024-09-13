import React, { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import PaymentSuccessDialog from '../Success/Dialog';

// Custom Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, className, ...props }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 bg-gradient-to-b from-[#b3f9fc] to-[#33d9df] text-[#003e45] text-xl rounded-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Custom Alert component
interface AlertProps {
  variant: 'error' | 'success';
  title: string;
  description: string;
}

const Alert: React.FC<AlertProps> = ({ variant, title, description }) => (
  <div className={`p-4 rounded-md ${variant === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
    <h3 className="font-bold">{title}</h3>
    <p>{description}</p>
  </div>
);

// Payment status type
interface PaymentStatus {
  type: 'error' | 'success';
  message: string;
}


// Main component props
interface SolanaPaymentComponentProps {
  amount: number;
  recipientAddress: string;
}

interface PaymentStatus {
  type: 'error' | 'success';
  message: string;
}

const SolanaPaymentComponent: React.FC<SolanaPaymentComponentProps> = ({ amount, recipientAddress }) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

  const handlePayment = async () => {
    if (!publicKey) {
      setPaymentStatus({ type: 'error', message: 'Please connect your wallet first.' });
      return;
    }
    setIsPaying(true);
    setPaymentStatus(null);
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(recipientAddress),
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );
      console.log(publicKey.toBase58());
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
      setPaymentStatus({ type: 'success', message: 'Payment successful!' });
      setShowSuccessDialog(true);
    } catch (error) {
      console.error('Error:', error);
      setPaymentStatus({ type: 'error', message: 'Payment failed. Please try again.' });
    } finally {
      setIsPaying(false);
    }
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        onClick={handlePayment}
        disabled={isPaying || !publicKey}
        className='w-full'
      >
        {isPaying ? 'Processing...' : 'Pay Now'}
      </Button>
      {paymentStatus && !showSuccessDialog && (
        <Alert
          variant={paymentStatus.type}
          title={paymentStatus.type === 'error' ? 'Error' : 'Success'}
          description={paymentStatus.message}
        />
      )}
      {showSuccessDialog && (
        <PaymentSuccessDialog onClose={handleCloseSuccessDialog} />
      )}
    </div>
  );
};

export default SolanaPaymentComponent;