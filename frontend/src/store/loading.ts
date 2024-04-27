import { defineStore } from 'pinia';

export const loadingStore = defineStore('loading', {
    state(): {
        itemsLoading: Set<string>
    } {
        return {
            itemsLoading: new Set()
        }
    },
    getters: {
        loading(state) {
            return state.itemsLoading.size > 0;
        }
    },
    actions: {
        startLoading(itemName: string) {
            this.itemsLoading.add(itemName)
        },
        endLoading(itemName: string) {

            this.itemsLoading.delete(itemName)
        }
    }
})