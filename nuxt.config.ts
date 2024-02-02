// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
import {resolve} from "path";

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/")
    },
    css:["~/assets/styles/main.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    devtools: {enabled: true}
})
