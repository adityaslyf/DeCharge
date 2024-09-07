import React from 'react';
import Navbar from '../Navbar/page';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

interface SpecListProps {
  title: string;
  items: string[];
}

const ProductPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-6 text-cyan-50">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-8">
        <ProductGallery />
        <ProductInfo />
      </div>
    </div>
  );
};

const ProductGallery: React.FC = () => (
  <div className="lg:w-1/2 space-y-4">
    <ProductImage />
    <div className="grid grid-cols-4 gap-4">
      <SideImage />
      <SideImage />
      <SideImage />
      <SideImage />
    </div>
    <ProductDimensions />
  </div>
);

const ProductImage: React.FC = () => (
  <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
    <img
      src="/api/placeholder/600/400"
      alt="DeCharge Mini EV charge point"
      className="w-full h-full object-cover"
    />
  </div>
);

const SideImage: React.FC = () => (
  <div className="aspect-square bg-gray-300 overflow-hidden">
    <img
      src="/api/placeholder/150/150"
      alt="DeCharge Mini EV charge point"
      className="w-full h-full object-cover"
    />
  </div>
);

const ProductDimensions: React.FC = () => (
  <div className="flex justify-between text-sm">
    <span>Dimensions:</span>
    <span>Compatibility:</span>
  </div>
);

const ProductInfo: React.FC = () => (
  <div className="lg:w-1/2 space-y-6">
    <ProductDetails />
    <ProductDescription />
    <ProductSpecs />
  </div>
);

const ProductDetails: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">DeCharge Mini</h1>
        <p className="text-lg">Avl : 55/200</p>
      </div>
      <p className="text-xl font-semibold">$100</p>
      <QuantitySelector />
      <button className="w-full py-3 rounded-xl border border-black bg-gradient-to-b from-cyan-200 to-cyan-400 text-black font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300">
        Checkout - $200
      </button>
    </div>
  );
};

const QuantitySelector: React.FC = () => (
  <div className="space-y-2">
    <p>Select Quantity</p>
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <button aria-label="Decrease quantity" className="focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded-full">
          <CiCircleMinus size={32} className="text-cyan-300 hover:text-cyan-400" />
        </button>
        <button aria-label="Increase quantity" className="focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded-full">
          <CiCirclePlus size={32} className="text-cyan-300 hover:text-cyan-400" />
        </button>
      </div>
      <p className="text-lg">$ 200</p>
    </div>
  </div>
);

const ProductDescription: React.FC = () => (
  <div className="space-y-2">
    <h2 className="text-xl font-bold">Product Description</h2>
    <p className="text-base leading-relaxed">
      The DeCharge Point is a smart, compact EV charger designed to offer effortless,
      reliable charging for 2/3/4 wheeler EVs. Ideal for public & private use, it ensures safety
      & ease for all EV owners. Perfect for businesses, homes or cafes - almost anywhere!
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
        "Wi-Fi & GSM Connectivity",
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