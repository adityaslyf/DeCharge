"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/page';

interface Product {
    name: string;
    price: number;
    available: number;
    total: number;
}

interface PaymentMethod {
    id: string;
    name: string;
}

const CheckoutPage: React.FC = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const [product] = useState<Product>({
        name: 'DeCharge Mini',
        price: 100,
        available: 55,
        total: 200
    });
    const [paymentMethods] = useState<PaymentMethod[]>([
        { id: 'usdc', name: 'USDC' }
    ]);

    const handleQuantityChange = (change: number) => {
        setQuantity((prev) => Math.max(1, Math.min(prev + change, product.available)));
    };

    const totalPrice = product.price * quantity;

    return (
        <div className="container mx-auto px-4 py-6 md:px-6 md:py-8">
            <Navbar />
            <div className=" mx-auto border p-6 space-y-8 text-white">
                <h1 className="text-2xl font-normal text-center mb-8">Checkout</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="space-y-6 w-full">
                        <h2 className="text-2xl font-bold">Contact Information</h2>
                        <div className="space-y-4">
                            {['Country', 'Full Name', 'Enter your email'].map((placeholder) => (
                                <input
                                    key={placeholder}
                                    placeholder={placeholder}
                                    className="w-full p-4 rounded-lg bg-transparent border border-[#ecfdfe]"
                                />
                            ))}
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Pay with</h3>
                            {paymentMethods.map((method) => (
                                <label key={method.id} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value={method.id}
                                        className="form-radio text-[#faabf8]"
                                    />
                                    <span className="text-[#faabf8]">{method.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="w-full space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold">{product.name}</h2>
                            <span className="text-lg">
                                Avl : {product.available}/{product.total}
                            </span>
                        </div>
                        <p className="text-2xl">${product.price}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-xl">Quantity</span>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    className="px-4 py-2 rounded-full border border-[#faabf8] flex items-center justify-center text-[#faabf8]"
                                >
                                    -
                                </button>
                                <span className="text-lg">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="px-4 py-2 rounded-full border border-[#faabf8] flex items-center justify-center text-[#faabf8]"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <hr className="border-[#ecfdfe]" />
                        <div className="flex justify-between items-center">
                            <span className="text-xl">Total</span>
                            <div>
                                <p className="text-3xl">${totalPrice}</p>
                                <p className="text-sm text-right">Incl. of taxes</p>
                            </div>
                        </div>
                        <hr className="border-[#ecfdfe]" />
                    </div>
                </div>
                <div>
                    <p className="text-sm mt-6 mb-4">
                        By proceeding to complete payment, you agree to our terms & privacy policy
                    </p>
                    <Link href="/CompletePayment">
                        <button className="w-full py-4 bg-gradient-to-b from-[#b3f9fc] to-[#33d9df] text-[#003e45] text-2xl rounded-lg ">
                            Complete Payment
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CheckoutPage;
