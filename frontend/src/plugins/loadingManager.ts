import { loadingStore } from "~/store/loading";

export default defineNuxtPlugin({
    name: 'loadingManager',
    hooks: {
        'page:loading:start'() {
            const loading = loadingStore()
            loading.setLoading(true)
        },
        'page:loading:end'() {
            const loading = loadingStore()
            loading.setLoading(false)
        }
    }
})