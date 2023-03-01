// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/nuxt-tanto-na-lingua/' // baseURL: '/<repository>/'
    },

    modules: ['@nuxtjs/tailwindcss'],

    css: ["~/assets/css/tailwind.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    }
})
