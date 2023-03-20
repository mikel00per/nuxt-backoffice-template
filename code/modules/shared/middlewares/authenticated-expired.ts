import {useAuthStore} from "~/modules/auth/shared/store/auth";

export default defineNuxtRouteMiddleware(() => {
    const auth = useAuthStore();

    if (auth.isExpired) {
        return navigateTo('/logout')
    }
})