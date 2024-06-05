import { iconSchema } from "../../components/util/icon";
import { actionsSchema, ActionParams } from "../../components/util/actions";

export const headerSchema =
    {
        type: "object",
        label: "Header",
        name: "header",
        fields: [
          iconSchema as any,
          {
            type: "string",
            label: "Name",
            name: "name",
          },
          {
            type: "object",
            label: "Logo",
            name: "logoImage",
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
              { label: "Primary", value: "primary" },
            ],
          },
          {
            type: "object",
            label: "Nav Links",
            name: "nav",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label };
              },
              defaultItem: {
                href: "home",
                label: "Home",
              },
            },
            fields: [
              {
                type: "string",
                label: "Link",
                name: "href",
              },
              {
                type: "string",
                label: "Label",
                name: "label",
              },
            ],
          },
          {
            type: "string",
            label: "Variant",
            name: "variant",
            options: [
              { label: "Default", value: "default" },
              { label: "sticky", value: "sticky" },
            ],
          },
            actionsSchema({name: 'actions', label: 'Actions'}) as ActionParams,
        ],
      }
