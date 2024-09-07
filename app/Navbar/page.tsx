'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const ConnectWalletButton = () => (
        <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-xl border border-solid border-black bg-gradient-to-b from-pink-300 to-pink-500 text-white">
            <span className="text-sm sm:text-lg font-normal">Connect Wallet</span>
        </button>
    );

    return (
        <div className=" ">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-8">
                    <div className="w-24 flex items-center ">
                        <img
                            src="/Logo_02 (1) 1.png"
                            className="object-contain w-full h-full"
                            alt="Logo"
                        />
                    </div>
                    <div className="hidden sm:flex gap-4 sm:gap-6 font-normal text-base sm:text-lg items-center text-white">
                        <button>Proposal</button>
                        <button>DeCharge Mini</button>
                        <button>FAQs</button>
                        <button>Explorer</button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="sm:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <ConnectWalletButton />
                </div>
            </div>
            {isMenuOpen && (
                <div className="sm:hidden mt-4">
                    <div className="flex flex-col gap-4 font-normal text-lg">
                        <button>Proposal</button>
                        <button>DeCharge Mini</button>
                        <button>FAQs</button>
                        <button>Explorer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;