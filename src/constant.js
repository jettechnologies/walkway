import { model, photographer, customer, fashionDesigner, offer1, offer2, offer3, offer4, spotlight1, spotlight2, spotlight3, spotlight4, spotlight5 } from "./assets";
import { callIcon, facebookIcon, instagramIcon, linkdenIcon, locationIcon, messageIcon, twitterIcon } from "./assets/icons";

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
        text: "Inclusive of all ages"
    },
    {
        img: offer2,
        text: "Creative marketplace"
    },
    {
        img: offer3,
        text: "Community building"
    },
    {
        img: offer4,
        text: "Contract building"
    }
];

export const testimonials = [
    {
        id: 1,
        customerName: 'emily badore',
        customerRemark: '“Walkway is a God-sent to me. I have always dreamt of becoming a model but never knew how to go about it. I simply signed up and now I am living my dreams."',
        customerImg : customer
    },
    {
        id: 2,
        customerName: 'John Doe',
        customerRemark: '“Walkway is a God-sent to me. I have always dreamt of becoming a model but never knew how to go about it. I simply signed up and now I am living my dreams."',
        customerImg : customer
    },
    {
        id: 3,
        customerName: 'Emma Itadori',
        customerRemark: '“Walkway is a God-sent to me. I have always dreamt of becoming a model but never knew how to go about it. I simply signed up and now I am living my dreams."',
        customerImg : customer
    },
    {
        id: 4,
        customerName: 'Tom Chris',
        customerRemark: '“Walkway is a God-sent to me. I have always dreamt of becoming a model but never knew how to go about it. I simply signed up and now I am living my dreams."',
        customerImg : customer
    }
]

export const contacts = [
    {
        icon: locationIcon,
        text: "46, Karemiote estate, Magodo, Lagos, Nigeria"
    },
    {
        icon: callIcon,
        text: "+234-000-000-00"
    },
    {
        icon: messageIcon,
        text: "helpcenter@walkways.com"
    }
]

export const socialIcons = [facebookIcon, twitterIcon, instagramIcon, linkdenIcon];

export const spotlights = [
    {
        img: spotlight1,
        author: "tom john",
        job: "videographer"
    },
    {
        img: spotlight2,
        author: "emmanuel",
        job: "photographer"
    },
    {
        img: spotlight3,
        author: "ugo tom",
        job: "model"
    },
    {
        img: spotlight4,
        author: "john tom",
        job: "model"
    },
    {
        img: spotlight5,
        author: "tom john",
        job: "photographer"
    }
]