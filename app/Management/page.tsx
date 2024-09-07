import React from 'react';
import Image from 'next/image';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-[#d9fcfd] text-2xl sm:text-3xl md:text-4xl font-bold font-['Inter']">
    {children}
  </h2>
);

interface SectionTextProps {
  children: React.ReactNode;
}

const SectionText: React.FC<SectionTextProps> = ({ children }) => (
  <p className="text-[#ecfdfe] text-base sm:text-lg md:text-xl font-normal font-['Inter'] leading-relaxed">
    {children}
  </p>
);

const ImagePlaceholder: React.FC = () => (
  <div className="w-full md:w-1/2 lg:w-96 h-64 md:h-80 lg:h-96 bg-[#d9d9d9] aspect-video">
    <Image 
      src="/api/placeholder/600/400" 
      alt="DeCharge Mini EV charge point" 
      width={600}
      height={400}
      layout="responsive"
      objectFit="cover"
    />
  </div>
);

interface ContentSectionProps {
  title: string;
  text: string;
  imageFirst?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, text, imageFirst = false }) => (
  <div className={`flex flex-col ${imageFirst ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between items-center gap-8`}>
    <ImagePlaceholder />
    <div className="flex flex-col gap-4 w-full md:w-1/2">
      <SectionTitle>{title}</SectionTitle>
      <SectionText>{text}</SectionText>
    </div>
  </div>
);

const Page: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 space-y-12 bg-black text-white">
      <header className="space-y-4">
        <SectionTitle>Deploy Effortlessly with DeCharge</SectionTitle>
        <SectionText>
          Simply choose the number of DeCharge Mini EV charge points you&apos;d like to deploy, and let DeCharge handle everything else.
        </SectionText>
      </header>

      <ContentSection 
        title="Seamless Management"
        text="We work closely with EV fleet operators to ensure charge points are consistently utilized, eliminating the need for you to find users. DeCharge handles all aspects of deployment and utilization, providing real-time data and optimizing strategies to maximize usage and revenue."
      />

      <ContentSection 
        title="Earn while supporting a sustainable future."
        text="Each time a vehicle charges at a DeCharge Mini, you earn a share of the fees, boosting your income while supporting global sustainability. Transparent monthly payouts &amp; the option to expand make it easy to track earnings &amp; scale your impact by deploying more chargers to meet the growing demand for EV infrastructure."
        imageFirst={true}
      />
    </div>
  );
};

export default Page;