/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./custom-pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '475px'
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
            colors: {
                'primary': '#ff922c',
                'primary-light': '#ffeede',
                'secondary': '#54bf29',
                'secondary-light': '#eaffe2',
                'text-primary': '#333333',
            },
            animation: {
                "scale-up-center": "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
                "slide-bottom": "slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
                "slide-right": "slide-right 0.4s ease-in-out   both"
            },
            keyframes: {
                "scale-up-center": {
                    "0%": {
                        transform: "scale(.5)"
                    },
                    to: {
                        transform: "scale(1)"
                    }
                },
                "slide-bottom": {
                    "0%": {
                        transform: "translate(50%, -10px)"
                    },
                    to: {
                        transform: "translate(50%, 0)"
                    }
                },
                "slide-right": {
                    "0%": {
                        transform: "translateX(-100%)"
                    },
                    to: {
                        transform: "translateX(0)"
                    }
                }
            }
        },
    },
    plugins: []
}
