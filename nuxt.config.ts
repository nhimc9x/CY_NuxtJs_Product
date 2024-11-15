// https://nuxt.com/docs/api/configuration/nuxt-config
import {routes} from "./routes";
import type {NuxtPage} from "@nuxt/schema";

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    app: {
        head: {
            title: 'Nuxt 3 Project',
        }
    },

    hooks: {
        'pages:extend'(pages) {
            routes.forEach(route => {
                pages.push(route);
            });

            function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
                const pagesToRemove: NuxtPage[] = []
                for (const page of pages) {
                    if (page.file && pattern.test(page.file)) {
                        pagesToRemove.push(page)
                    } else {
                        removePagesMatching(pattern, page.children)
                    }
                }
                for (const page of pagesToRemove) {
                    pages.splice(pages.indexOf(page), 1)
                }
            }

            removePagesMatching(/\.ts$/, pages)
        }
    },

    modules: ['@pinia/nuxt', '@formkit/auto-animate/nuxt'],
})