import { defineStore } from 'pinia'
import {OptionDrawer} from "~/modules/shared/dto/OpetionDrawer";

export const useDrawer = defineStore('drawer',{

    state: () => ({
        open: null as boolean | null,
        rail: false,
        defaultOptions: [
            new OptionDrawer('home', 'mdi-home', '/'),
            new OptionDrawer('page', 'mdi-book-open-page-variant-outline', '/page'),
        ],
        appendOptions: [
            new OptionDrawer('settings', 'mdi-cog', '/settings'),
            new OptionDrawer('logout', 'mdi-logout', '/logout'),
        ],
    }),

    getters: {
        isOpen: state => state.open,
        defaults: state => state.defaultOptions,
        appends: state => state.appendOptions
    },

    actions: {
        toggle() {
            this.open = !this.open;
        }
    },

    persist: false
})
