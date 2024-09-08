"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import Navbar from '../Navbar/page';

interface SpecListProps {
  title: string;
  items: string[];
}

const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 100;

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="container mx-auto p-4 space-y-6 text-cyan-50 ">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-8">
        <ProductGallery />
        <ProductInfo 
          quantity={quantity} 
          price={price} 
          onQuantityChange={handleQuantityChange} 
        />
      </div>
    </div>
  );
};

const ProductGallery: React.FC = () => (
  <div className="lg:w-1/2 space-y-4">
    <ProductImage />
    <div className="grid grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((index) => (
        <SideImage key={index} />
      ))}
    </div>
    <ProductDimensions />
  </div>
);

const ProductImage: React.FC = () => (
  <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
    <Image
      src="/api/placeholder/600/400"
      alt="DeCharge Mini EV charge point"
      width={600}
      height={400}
      layout="responsive"
    />
  </div>
);

const SideImage: React.FC = () => (
  <div className="aspect-square bg-gray-300 overflow-hidden">
    <Image
      src="/api/placeholder/150/150"
      alt="DeCharge Mini EV charge point detail"
      width={150}
      height={150}
      layout="responsive"
    />
  </div>
);

const ProductDimensions: React.FC = () => (
  <div className="flex justify-between text-sm">
    <span>Dimensions: 10&quot; x 6&quot; x 4&quot;</span>
    <span>Compatibility: All EVs</span>
  </div>
);

interface ProductInfoProps {
  quantity: number;
  price: number;
  onQuantityChange: (change: number) => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ quantity, price, onQuantityChange }) => (
  <div className="lg:w-1/2 space-y-6">
    <ProductDetails 
      quantity={quantity} 
      price={price} 
      onQuantityChange={onQuantityChange} 
    />
    <ProductDescription />
    <ProductSpecs />
  </div>
);

const ProductDetails: React.FC<ProductInfoProps> = ({ quantity, price, onQuantityChange }) => {
  const totalPrice = price * quantity;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">DeCharge Mini</h1>
        <p className="text-lg">Avl : 55/200</p>
      </div>
      <p className="text-xl font-semibold">${price}</p>
      
      <QuantitySelector 
        quantity={quantity} 
        onQuantityChange={onQuantityChange} 
        totalPrice={totalPrice} 
      />
      <Link href="/CheckoutPayment">
      <button className="w-full py-3 mt-4 rounded-xl border border-black bg-gradient-to-b from-cyan-200 to-cyan-400 text-black font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300">
        Checkout - ${totalPrice}
      </button>
      </Link>
    </div>
  );
};

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (change: number) => void;
  totalPrice: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onQuantityChange, totalPrice }) => (
  <div className="space-y-4">
    <p>Select Quantity</p>
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <button 
          onClick={() => onQuantityChange(-1)} 
          aria-label="Decrease quantity" 
          className="focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded-full"
        >
          <CiCircleMinus size={32} className="text-cyan-300 hover:text-cyan-400" />
        </button>
        <span className="text-lg">{quantity}</span>
        <button 
          onClick={() => onQuantityChange(1)} 
          aria-label="Increase quantity" 
          className="focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded-full"
        >
          <CiCirclePlus size={32} className="text-cyan-300 hover:text-cyan-400" />
        </button>
      </div>
      <p className="text-lg">$ {totalPrice}</p>
    </div>
  </div>
);

const ProductDescription: React.FC = () => (
  <div className="space-y-2">
    <h2 className="text-xl font-bold">Product Description</h2>
    <p className="text-base leading-relaxed">
      The DeCharge Point is a smart, compact EV charger designed to offer effortless,
      reliable charging for 2/3/4 wheeler EVs. Ideal for public &amp; private use, it ensures safety
      and ease for all EV owners. Perfect for businesses, homes or cafes - almost anywhere!
    </p>
  </div>
);

const ProductSpecs: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <SpecList
      title="Specifications"
      items={[
        "Wattage - 3.3kw",
        "Input voltage - 230V AC",
        "Current - 16A",
        "Integrated surge protection",
        "Wi-Fi &amp; GSM Connectivity",
        "IP 65 Rated"
      ]}
    />
    <SpecList
      title="Features"
      items={[
        "Dynamic LED Indicators",
        "QR Scan Authentication",
        "DeCharge Mobile App",
        "24x7 Customer support",
        "Easy Installation",
        "2 Years Warranty"
      ]}
    />
  </div>
);

const SpecList: React.FC<SpecListProps> = ({ title, items }) => (
  <div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-base flex items-start">
          <span className="mr-2">-</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductPage;
