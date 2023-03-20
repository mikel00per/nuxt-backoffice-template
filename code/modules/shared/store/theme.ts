import { defineStore } from 'pinia'

export const useTheme = defineStore('theme',{

    state: () => ({
        mode: 'dark'
    }),

    getters: {
        modeSelected: state => state.mode,
        isDark: state => state.mode === 'dark'
    },

    actions: {
        toggle() {
            this.mode = this.modeSelected === 'dark' ? 'light' : 'dark';
        }
    },

    persist: true
})
