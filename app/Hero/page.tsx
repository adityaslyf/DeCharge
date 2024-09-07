import React from 'react';

const FEATURE_LIST: string[] = [
    'Manage Deployments',
    'Monthly Earning',
    'Zero Hassle',
];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
    <button
        className={`px-6 py-3 rounded-xl border border-solid border-black bg-gradient-to-b from-cyan-200 to-cyan-400 text-black transition-transform hover:scale-105 ${className}`}
        {...props}
    >
        <span className="text-lg font-normal">{children}</span>
    </button>
);

interface FeatureListProps {
    features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
    <ul className="list-disc list-inside text-lg md:text-xl space-y-2" aria-label="Features">
        {features.map((feature, index) => (
            <li key={index}>{feature}</li>
        ))}
    </ul>
);

const Page: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white space-y-6 max-w-2xl mb-8 md:mb-0">
                <h1 className="text-cyan-50 text-4xl md:text-5xl font-bold font-sans">
                    Supercharge The EV Revolution
                </h1>
                <p className="text-cyan-50 text-2xl md:text-[26px] font-medium font-sans">
                    Deploy a DeCharge Mini, Earn extra Cash
                </p>
                <FeatureList features={FEATURE_LIST} />
                <Button>Get Started</Button>
            </div>
            <div className="w-full md:w-1/2 max-w-md">
                <img
                    src="/Rectangle 243.png"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    alt="EV Charger Illustration"
                />
            </div>
        </div>
    );
};

export default Page;