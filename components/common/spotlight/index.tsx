import Image from 'next/image';
import React, { ReactNode } from 'react';

import { PageBlocksHeroImage } from '../../../tina/__generated__/types';

interface SpotlightProps {
  backgroundImage: PageBlocksHeroImage
  children: ReactNode;
}

const Spotlight: React.FC<SpotlightProps> = ({ backgroundImage, children }) => {
  return (
    <div className="relative w-full h-screen max-h-[670px] md:max-h-[670px]">
      
      <div className="absolute inset-0 flex items-center justify-center z-0">
      <img
             className="z-0 bg-cover bg-center w-full h-full object-cover"
              alt={backgroundImage.alt}
              src={backgroundImage.src}
            />
      </div>
      <div className="absolute z-1 w-full h-full">{children}</div>
    </div>
  );
};

export default Spotlight;
