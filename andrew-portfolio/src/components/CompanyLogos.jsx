import React from 'react';
import { CanvaLogo, AristaLogo, IkeLogo } from './CompanyIcons';

const companies = [
  { name: 'Canva', Logo: CanvaLogo, color: 'text-blue-400' },
  { name: 'Arista Networks', Logo: AristaLogo, color: 'text-purple-400' },
  { name: 'Dosec Designs', Logo: null, color: 'text-emerald-400' },
  { name: 'ikeGPS', Logo: IkeLogo, color: 'text-orange-400' },
];

const CompanyLogos = () => {
  // Duplicate the list to ensure seamless scrolling
  const marqueeContent = [...companies, ...companies, ...companies, ...companies];

  return (
    <div className="w-full py-10 overflow-hidden relative z-10">
      {/* Fade edges for a premium look */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {marqueeContent.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-4 md:mx-8 min-w-[100px]"
          >
            {company.Logo ? (
              <company.Logo
                className={`h-12 w-auto opacity-50 hover:opacity-100 transition-opacity ${company.color}`}
                aria-label={company.name}
              />
            ) : (
              <span className={`text-2xl md:text-3xl font-bold opacity-50 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap ${company.color}`}>
                {company.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
