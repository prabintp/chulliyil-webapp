import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import SectionHeading from "../common/section-heading";
import { sectionHeadingSchema } from "../common/section-heading/schema";
import { FadeIn } from "../util/fade-in";

import Spotlight from "../common/spotlight";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  const theme = useTheme();
  const headlineColorClasses = {
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

  const contentSection = () => { 
    return (
      <div className="row-start-2 md:row-start-1 md:col-span-3 text-center md:text-left">
      {data.tagline && (
        <h2
          data-tina-field={tinaField(data, "tagline")}
          className="relative inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font z-20"
        >
          {data.tagline}
          <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
        </h2>
      )}
      {data.headline && (
        <h3
          data-tina-field={tinaField(data, "headline")}
          className={`w-full relative text-5xl md:max-w-[80%] font-light tracking-widest leading-tight title-font`}
        >
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r  ${
              data.color === "primary" || data.variant === "spotlight"
                ? `from-white to-gray-100`
                : headlineColorClasses[theme.color]
            }`}
          >
            {data.headline}
          </span>
        </h3>
      )}
      {data.text && (
        <div
          data-tina-field={tinaField(data, "text")}
          className={`prose prose-lg mx-auto md:mx-0 mb-10 font-light ${
            data.color === "primary" || data.variant === "spotlight" ? `prose-primary` : `dark:prose-dark`
          }`}
        >
          <TinaMarkdown content={data.text} />
        </div>
      )}
      {data.actions && (
        <Actions
          className="justify-center md:justify-start py-2"
          parentColor={data.color}
          actions={data.actions}
        />
      )}
    </div>
    )
  }

  const heroSection = () => {
    return (
      <>
      {data.sectionHeading && (
        <FadeIn>
        <Container size="large" className="grid grid-cols-1 pb-2 ">
             <SectionHeading {...data.sectionHeading} className="md:w-9/12"
        /> 
        </Container>
        </FadeIn>
       
      )}
      <FadeIn>
      <Container
        size="large"
        className="grid grid-cols-1 md:grid-cols-5 gap-14 pb-18 items-center justify-center"
      >
       {contentSection()}
        {data.image && (
          <div
            data-tina-field={tinaField(data.image, "src")}
            className="relative row-start-1 md:col-span-2 flex justify-center"
          >
            <img
              className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              src={data.image.src}
              aria-hidden="true"
            />
            <img
              className="relative z-10 w-full max-w-xs rounded-lg md:max-w-none h-auto"
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )}
      </Container>
      </FadeIn>
      </>
    )
  }

  const renderSection = () => {
    switch (data.variant) {
      case "spotlight":
        return (
          <Spotlight backgroundImage={data.image}>
            <div className=" bg-gradient-to-tr from-black to-transparent to-80%  flex flex-col justify-end  h-full px-4 pb-[60px] md:p-[50px] pt-0">
              <FadeIn>
            {contentSection()}
            </FadeIn>
             </div>
          
          </Spotlight>
        );
      case "default":
      default:
        return heroSection();
    }
  }

  return (
    <Section color={data.color}>
      {renderSection()}
    </Section>
  );
};

export const heroBlockSchema: TinaTemplate = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    sectionHeadingSchema,
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
   
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
        { label: "Outlined", value: "outlined" },
      ],
    },
    {
      type: "string",
      label: "Variant",
      name: "variant",
      options: [
        { label: "Default", value: "default" },
        { label: "Spotlight", value: "spotlight" },
      ],
    },
  ],
};
