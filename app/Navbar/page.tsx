"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const navItems = [
  { name: 'Proposal', href: '#' },
  { name: 'DeCharge Mini', href: '#' },
  { name: 'FAQs', href: '#' },
  { name: 'Explorer', href: '#' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ConnectWalletButton: React.FC = () => (

    <WalletMultiButton
    className="connect-wallet-btn px-3 py-1 sm:px-4 sm:py-2 rounded-xl border border-solid border-black bg-gradient-to-b from-pink-300 to-pink-500 text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm sm:text-lg font-normal"
  >
    Connect Wallet
  </WalletMultiButton>

  );

  return (
    <nav className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8">
          <div className=" flex items-center">
            <Image
              src="/Logo_02 (1) 1.png"
              width={125}
              height={68}
              className="object-contain"
              alt="DeCharge Logo"
            />
          </div>
          <div className="hidden sm:flex gap-4 sm:gap-6 font-normal text-base sm:text-lg items-center text-white">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-pink-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="sm:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ConnectWalletButton />
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden mt-4">
          <div className="flex flex-col gap-4 font-normal text-lg text-white">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-pink-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;