// sectionHeadingSchema.ts
import { TinaField } from 'tinacms';

export const sectionHeadingSchema: TinaField = {
  type: "object",
  label: "Section Heading",
  name: "sectionHeading",
  fields: [
    {
      name: "caption",
      label: "Caption",
      type: "string",
    },
    {
      name: "heading",
      label: "Heading",
      type: "string",
    },
    {
      name: "subHeading",
      label: "Sub Heading",
      type: "string",
    },
  ],
};
