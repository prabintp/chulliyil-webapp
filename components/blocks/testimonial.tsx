import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { PageBlocksTestimonial } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import SectionHeading from "../common/section-heading";
import { sectionHeadingSchema } from "../common/section-heading/schema";

export const Testimonial = ({ data }: { data: PageBlocksTestimonial }) => {
  return (
    <Section color={data.color}>
       {data.sectionHeading && (
        <Container size="large" className="grid grid-cols-1 pb-2 ">
             <SectionHeading {...data.sectionHeading} className="md:w-9/12"
        /> 
        </Container>
       
      )}
      <Container size="large">
        <blockquote>
          <div
            className={`relative z-10 max-w-3xl mx-auto text-3xl lg:text-4xl font-semibold tracking-normal text-center title-font ${
              data.color === "primary"
                ? `text-white`
                : `text-gray-700 dark:text-gray-50`
            }`}
          >
            <span
              className={`block opacity-15 text-8xl absolute inset-y-1/2 transform translate-y-2	-left-4 leading-4 -z-1`}
            >
              &ldquo;
            </span>
            <p
              data-tina-field={tinaField(data, `quote`)}
              className="relative opacity-95"
            >
              {data.quote}
            </p>
            <span
              className={`block opacity-15 text-8xl absolute inset-y-1/2 transform translate-y-3	-right-4 leading-4 -z-1`}
            >
              &rdquo;
            </span>
          </div>
          <div className={`my-8 flex-grow-0`}>
            <span
              className={`block mx-auto h-0.5 w-1/6 ${
                data.color === "primary"
                  ? `bg-blue-600`
                  : `bg-gray-200 dark:bg-gray-700`
              }`}
            ></span>
          </div>
          <footer className="text-center">
            <p
              data-tina-field={tinaField(data, `author`)}
              className={`tracking-wide title-font font-bold text-lg ${
                data.color === "primary"
                  ? `text-blue-200`
                  : `text-blue-500 dark:text-blue-300`
              }`}
            >
              {data.author}
            </p>
          </footer>
        </blockquote>
      </Container>
    </Section>
  );
};

export const testimonialBlockSchema: TinaTemplate = {
  name: "testimonial",
  label: "Testimonial",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      quote:
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
      author: "Phil Karlton",
      color: "primary",
    },
  },
  fields: [
    sectionHeadingSchema,
    {
      type: "string",
      ui: {
        component: "textarea",
      },
      label: "Quote",
      name: "quote",
    },
    {
      type: "string",
      label: "Author",
      name: "author",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
