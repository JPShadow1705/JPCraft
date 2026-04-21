const colors = require('tailwindcss/colors');

// Dark green-tinted neutral scale (the "new grey" for JPCraft)
const gray = {
    50: 'hsl(150, 20%, 97%)',
    100: 'hsl(150, 15%, 91%)',
    200: 'hsl(150, 12%, 82%)',
    300: 'hsl(150, 10%, 65%)',
    400: 'hsl(150, 8%, 53%)',
    500: 'hsl(150, 8%, 43%)',
    600: 'hsl(150, 10%, 35%)',
    700: 'hsl(150, 13%, 20%)',
    800: 'hsl(150, 16%, 13%)',
    900: 'hsl(150, 20%, 8%)',
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
                header: ['"Inter"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#070a07',
                // "primary" maps to emerald for JPCraft
                primary: colors.emerald,
                gray: gray,
                neutral: gray,
                emerald: colors.emerald,
                cyan: colors.emerald, // legacy alias — keeps existing tw`text-cyan-*` working
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
