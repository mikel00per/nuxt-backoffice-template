import { defineNuxtModule, extendPages } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
    setup () {
        extendPages((pages) => {
            // Add /test page
            pages.push({
                name: 'home',
                path: '/',
                file: resolve(__dirname, './pages/HomePage.vue')
            })
        })
    }
})
