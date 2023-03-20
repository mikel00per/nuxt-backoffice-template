import {useAuthStore} from "~/modules/auth/shared/store/auth";

export default defineNuxtRouteMiddleware(() => {
    const auth = useAuthStore();

    if (!auth.isLogged) {
        return navigateTo('/login')
    }
})