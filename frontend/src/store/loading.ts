import { defineStore } from 'pinia';

export const loadingStore = defineStore('loading', {
    state(): {
        itemsLoading: Set<string>,
        totalItemsLoading: Set<string>
    } {
        return {
            itemsLoading: new Set(),
            totalItemsLoading: new Set()
        }
    },
    getters: {
        loading(state) {
            return state.itemsLoading.size > 0;
        },
        loadingProgress(state) {
            if (state.totalItemsLoading.size === 0) return `100%`
            return `${(state.totalItemsLoading.size - state.itemsLoading.size) / state.totalItemsLoading.size * 100}%`
        }
    },
    actions: {
        startLoading(itemName: string) {
            this.itemsLoading.add(itemName)
            this.totalItemsLoading.add(itemName)
        },
        endLoading(itemName: string) {
            this.itemsLoading.delete(itemName)

            if (this.itemsLoading.size === 0) {
                this.totalItemsLoading.clear()
            }
        }
    }
})