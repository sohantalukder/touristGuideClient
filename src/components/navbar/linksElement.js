import { routes } from "../../route/routeName";

export const links = [
    {
        name: "Home",
        routeName: routes.home,
    },
    {
        name: "Destinations",
        routeName: routes.destinations,
    },
    {
        name: "Create Event",
        routeName: routes.createEvent,
    },
    {
        name: "Blog",
        routeName: routes.blog,
        subLinks: [
            { name: "Blog", routeName: routes.blogs },
            { name: "Create Blog", routeName: routes.create },
        ],
    },
    {
        name: "Pages",
        routeName: "pages",
        subLinks: [
            { name: "Gallery", routeName: routes.gallery },
            { name: "Hire Guiders", routeName: routes.guiderHire },
            { name: "Contact Us", routeName: routes.contact },
        ],
    },
];
