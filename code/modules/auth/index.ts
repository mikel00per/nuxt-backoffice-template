import {defineNuxtModule, extendPages} from '@nuxt/kit'
import {join} from 'pathe'
import {NuxtOptions} from "@nuxt/schema";
import routes from "./routes";


export default defineNuxtModule<NuxtOptions>({
    setup(options, nuxt) {
        extendPages((pages) => {
            // Routes
            routes.forEach((route) => pages.push(route))
        });

        nuxt.hook('components:dirs', (dirs) => {
            dirs.push(
                {path: join(__dirname, 'login/components')},
                {path: join(__dirname, 'logout/components')}
            );
        });
    }
})
