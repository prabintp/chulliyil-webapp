import React from 'react';
import { tinaField } from "tinacms/dist/react";

interface SectionHeadingProps {
  caption?: string;
  heading?: string;
  subHeading?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { caption, heading, subHeading, className } = props
  return (
    <div className={`${className ?? ''}`}>
      {caption && <h6 data-tina-field={tinaField(props, "caption")} className="text-lg uppercase text-blue-500 font-semibold tracking-wider mb-6">{caption}</h6>}
      <h2 data-tina-field={tinaField(props, "heading")} className="text-4xl md:text-6xl font-light mb-4 tracking-wider leading-tight">{heading}</h2>
      {subHeading && <p data-tina-field={tinaField(props, "subHeading")} className="text-lg tracking-wider md:w-10/12">{subHeading}</p>}
    </div>
  );
};

export default SectionHeading;
