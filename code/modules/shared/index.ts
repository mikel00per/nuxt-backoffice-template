import {defineNuxtModule} from '@nuxt/kit'
import {join} from 'pathe'

export default defineNuxtModule({
    setup(options, nuxt) {
        nuxt.hook('components:dirs', (dirs) => {
            dirs.push({
                path: join(__dirname, 'components')
            })
        })
    }
})
