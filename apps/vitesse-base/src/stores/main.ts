import {defineStore} from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        status: '',
        errors: [],
    }),
    getters: {
        getStatus: state => state.status,
        getErrors: state => state.errors,
    },
})
