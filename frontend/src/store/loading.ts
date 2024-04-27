import { defineStore } from 'pinia';

export const loadingStore = defineStore('loading', {
    state() {
        return {
            loading: false
        }
    },
    actions: {
        setLoading(val: boolean) {
            this.loading = val;
        }
    }
})