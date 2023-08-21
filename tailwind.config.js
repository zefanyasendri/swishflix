import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        fontFamily: {
            poppins: 'Poppins, sans-serif'
        },
        extend: {
            colors: {
                "alerange": '#FB6908',
                "gray-1": '#B4B4B4',
                "gray-2": '#E2E0E0',
                "form-bg": '#212121',
                
                "yellow-1": '##ffe293',
                "yellow-2": '#ffd460',
                "yellow-3": '#ffc62d',
                "gray-sw-1": '#2d4059',
                "gray-sw-2": '#3e587b',
                "gray-sw-3": '#1c2837',
            },
            screens: {
                'laptopLg': '1160px',
                'laptopXl': '1360px',
            }
        }
    },

    plugins: [forms],
};
