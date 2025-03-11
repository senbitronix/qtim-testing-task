// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            apiUrlBase: process.env.API_URL_BASE,
        },
    },
    css: ["@/assets/css/global.scss"],
})
