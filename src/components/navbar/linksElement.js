export const links = [
    {
        name: "Home",
        routeName: "home",
    },
    {
        name: "Destinations",
        routeName: "destinations",
    },
    {
        name: "Create Event",
        routeName: "create_event",
    },
    {
        name: "Blog",
        routeName: "blog",
        subLinks: [
            { name: "Blog", routeName: "blog" },
            { name: "Create Blog", routeName: "create_blog" },
        ],
    },
    {
        name: "Pages",
        routeName: "pages",
        subLinks: [
            { name: "Gallery", routeName: "gallery" },
            { name: "Hire Guiders", routeName: "hire_guiders" },
            { name: "Contact Us", routeName: "contact_us" },
        ],
    },
];
