// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
        baseURL: '/nuxt-tanto-na-lingua/' // baseURL: '/<repository>/'
    },
    
    modules: ['@nuxtjs/tailwindcss'],
    css: ["~/public/css/tailwind.css"]
})
