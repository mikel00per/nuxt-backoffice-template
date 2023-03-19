import { defineStore } from 'pinia'

export const useLanguage = defineStore('language',{

    state: () => ({
        code: 'en',
        languages: [
            { title: 'Spanish', value: 'es'},
            { title: 'English', value: 'en'}
        ]
    }),

    getters: {
        availableLanguages: state => state.languages,
        currentLanguage: state => state.code,
        currentLanguageIndex: state => state.languages.findIndex(lang => lang.value === state.code)
    },

    actions: {
        changeLanguage(code: string) {
            this.code = code;
        }
    },

    persist: true
})
