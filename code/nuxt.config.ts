// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    modules: [
        '@pinia/nuxt',
        '~/modules/shared/index',
        '~/modules/home/index',
    ],
    dir: {
        layouts: './modules/shared/layouts/',
        plugins: './modules/shared/plugins/'
    },
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
