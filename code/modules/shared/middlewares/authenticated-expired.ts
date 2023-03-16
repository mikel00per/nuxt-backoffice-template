import {useAuthStore} from "~/modules/auth/shared/store/auth";

export default defineNuxtRouteMiddleware(() => {
    console.log("ENTRO 2")

    const auth = useAuthStore();

    if (auth.isExpired) {
        return navigateTo('/logout')
    }
})