import {defineNuxtModule} from '@nuxt/kit'
import {join} from 'pathe'
import {Nuxt} from "@nuxt/schema";

export default defineNuxtModule({
    setup(options: any, nuxt: Nuxt) {
        nuxt.hook('components:dirs', (dirs) => {
            dirs.push({
                path: join(__dirname, 'components')
            })
        })
    }
})
