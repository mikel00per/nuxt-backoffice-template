import {useAuthStore} from "~/modules/auth/shared/store/auth";

export default defineNuxtRouteMiddleware(() => {
    console.log("ENTRO 3")

    const auth = useAuthStore();

    if (auth.isLogged) {
        return navigateTo('/')
    }
})