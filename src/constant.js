import { model, photographer, fashionDesigner, offer1, offer2, offer3, offer4 } from "./assets";

export const users = [
    {
        img: model,
        tag: "models",
        style: "row-span-2 lg:row-span-1"
    },
    {
        img:fashionDesigner,
        tag: "fashion designers",
        style: "col-start-2 col-end-3 row-start-1 row-end-2"
    },
    {
        img:photographer,
        tag:"photographers",
        style: "col-start-2 col-end-3 row-start-2 row-end-3 lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1"
    }
];

export const offers = [
    {
        img: offer1,
        text: "inclusive of all ages"
    },
    {
        img: offer2,
        text: "creative marketplace"
    },
    {
        img: offer3,
        text: "community building"
    },
    {
        img: offer4,
        text: "contract building"
    }
];