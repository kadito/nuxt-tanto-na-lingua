// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            script: [
                { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-1K35XKEL7N" }
            ]
        },
        baseURL: '/' // baseURL: '/<repository>/'
    },

    runtimeConfig: {
        public: {
            DOMAIN: process.env.DOMAIN,
            NUXT_PUBLIC_SITE_URL: process.env.NUXT_PUBLIC_SITE_URL
        }
    },
    
    modules: ['@nuxtjs/tailwindcss', 'nuxt-jsonld', 'nuxt-simple-sitemap'],
    css: ["~/public/css/tailwind.css"]
})
