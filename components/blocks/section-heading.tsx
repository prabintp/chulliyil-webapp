import type { TinaTemplate } from 'tinacms'

import { Section } from "../util/section";
import { Container } from "../util/container";
import  SectionHeading from "../common/section-heading";
import { FadeIn } from "../util/fade-in";
import { TinaField } from 'tinacms';
import {
    PageBlocksSectionheading
  } from "../../tina/__generated__/types";




export const SectionHeadingBlock = ({ data }: { data: PageBlocksSectionheading }) => {
    return (
      <Section className='pb-16'>
        <FadeIn>
         {data.heading && (
          <Container size="large" className="grid grid-cols-1 pb-2 ">
               <SectionHeading {...data} className="md:w-10/12"
          /> 
          </Container>
         
         
        )}
        </FadeIn>
         </Section>
    );
  };


export const sectionHeadingSchema: TinaTemplate = {
    name: 'sectionheading',
    label: 'Section Heading',
    fields: [
        {
            name: 'caption',
            label: 'Caption',
            type: 'string',
        },
        {
            name: 'heading',
            label: 'Heading',
            type: 'string',
        },
        {
            name: 'subHeading',
            label: 'Sub Heading',
            type: 'string',
        },
    ],
  }

