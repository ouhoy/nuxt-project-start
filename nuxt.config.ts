// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
import {resolve} from "path";

export default defineNuxtConfig({

    app: {
        head: {
            title: "Blog",
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        }
    },

    alias: {
        "@": resolve(__dirname, "/")
    },
    css: ["~/assets/styles/main.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
            wpUri: process.env.WP_URI
        }
    },
    devtools: {enabled: true}
})
