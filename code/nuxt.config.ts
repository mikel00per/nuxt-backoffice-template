// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    modules: [
        '~/modules/shared/index',
        '~/modules/home/index',
        '~/modules/auth/index',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-vue3-google-signin',
    ],
    googleSignIn: {
        clientId: '83260906410-h17am992nfmu31e6ig6f1msn293v1411.apps.googleusercontent.com'
    },
    i18n: {
        lazy: true,
        langDir: 'modules/shared/i18n/',
        strategy: 'no_prefix',
        defaultLocale: 'es',
        locales: [
            { code: 'en',  name: 'English',  file: 'en.json' },
            { code: 'es',  name: 'Spanish',  file: 'es.json' },
        ],
    },
    dir: {
        layouts: './modules/shared/layouts/',
        plugins: './modules/shared/plugins/',
        middleware: './modules/shared/middlewares/'
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
