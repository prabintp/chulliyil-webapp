import React from "react";
import { Section } from "../../util/section";
import { PageBlocksCarousel} from "../../../tina/__generated__/types";
import CarouselContainer from "./carousel-container";
import { Hero } from "../hero";



export const Carousel = ({ data }: { data: PageBlocksCarousel }) => {
    const items = data.hero
  return (
    <Section>
     
       { items && items.length >= 0 && (<CarouselContainer config={data.config}>
        {items.map((slide, i) => (
             <Hero key={i} data={slide as any} />
        ))}
       </CarouselContainer>)}
    </Section>
  );
};