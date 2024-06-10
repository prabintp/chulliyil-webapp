import { TinaTemplate } from "tinacms";
import { heroBlockSchema } from "../hero";

export const carouselBlockSchema: TinaTemplate = {
    name: "carousel",
    label: "Carousel",
    ui: {
        previewSrc: "/blocks/carousel.png",
        defaultItem: {
            config: {
                spaceBetween: 30,
                slidesPerView: 1,
                navigation: true,
                pagination: { clickable: true },
                loop: true,
            },
            carousel: [
                {
                    caption: "Caption",
                    heading: "Heading",
                    subHeading: "Sub Heading",
                },
            ],
        },
    },
    fields: [
        {
            type: "object",
            label: "Carousel",
            name: "hero",
            list: true,
            fields: heroBlockSchema.fields
            },
        {
            type: "object",
            label: "Config",
            name: "config",
            fields: [
                {
                    type: "number",
                    label: "Space Between",
                    name: "spaceBetween",
                },
                {
                    type: "number",
                    label: "Slides Per View",
                    name: "slidesPerView",
                },
                {
                    type: "boolean",
                    label: "Navigation",
                    name: "navigation",
                },
                {
                    type: "boolean",
                    label: "Enable Autoplay",
                    name: "enableAutoplay",
                },
                {
                    type: "object",
                    label: "Autoplay",
                    name: "autoplay",
                    fields: [
                        {
                            type: "number",
                            label: "Delay",
                            name: "delay",
                        },
                        {
                            type: "boolean",
                            label: "Disable On Interaction",
                            name: "disableOnInteraction",
                        },
                    ],
                },
                {
                    type: "object",
                    label: "Pagination",
                    name: "pagination",
                    fields: [
                        {
                            type: "boolean",
                            label: "Clickable",
                            name: "clickable",
                        },
                    ],
                },
                {
                    type: "boolean",
                    label: "Loop",
                    name: "loop",
                },
            ],
        },
    ],
};
