import {defineStore} from 'pinia'
import {AuthCodeFlowErrorResponse, AuthCodeFlowSuccessResponse, useTokenClient} from "vue3-google-signin";
import {User} from "../../shared/entities/User";

export const useAuthStore = defineStore('auth',{

    state: () => ({
        logged: false,
        user: null as User | null,
        expiration: null as number | null
    }),

    getters: {
        isLogged: state => state.logged,
        userInfo: state => state.user,
        isExpired: state => state.expiration !== null ? ((new Date()).getTime() > state.expiration) : false
    },

    actions: {
        useTokenClient: () => useTokenClient({
            onSuccess: useAuthStore().handleOnSuccess,
            onError: useAuthStore().handleOnError,
            scope: 'email profile',
            hosted_domain: 'l00per.com'
            // other options
        }),
        async handleOnSuccess (response: AuthCodeFlowSuccessResponse) {
            const accessToken = response.access_token;
            const expiredInSeconds = response.expires_in * 1000;
            const now = new Date();
            const expiredDate = (new Date(now.getTime() + expiredInSeconds)).getTime();

            await this.fetchGoogleUserInfo(accessToken, expiredDate);
        },
        handleOnError(errorResponse: AuthCodeFlowErrorResponse) {
            console.log("Error: ", errorResponse);
        },
        async fetchGoogleUserInfo(accessToken: string, timestamp: number) {
            await $fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                query: {access_token: accessToken}
            }).then((response: any) => {
                this.user = new User(response.email, response.name, response.picture);
                this.logged = true;
                this.expiration = timestamp;
                navigateTo('/');
            });
        },
        logout() {
            this.user = null;
            this.logged = false;
            this.expiration = null;
        }
    },

    persist: {
        key: 'auth'
    }
})