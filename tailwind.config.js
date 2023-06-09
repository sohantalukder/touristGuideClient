/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                green: "#5fbe00",
                greenLight: "#9FD866",
                darkBlack: "#101b21",
                gray: "#5c5c5c",
                red: "#ff0000",
                lightGray: "#f3f3f3",
                mediumGray: "#c4c4c4",
                midWhite: "#F9FAFB",
            },
            screen: {
                xl: "1140px",
            },
        },
    },
    plugins: [],
};
