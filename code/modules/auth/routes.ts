import {resolve} from "pathe";

export default [
    {
        name: 'login',
        path: '/login',
        file: resolve(__dirname, './login/pages/LoginPage.vue')
    },
    {
        name: 'logout',
        path: '/logout',
        file: resolve(__dirname, './logout/pages/LogoutPage.vue')
    }
]