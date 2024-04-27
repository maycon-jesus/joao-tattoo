import { loadingStore } from "~/store/loading";

export default defineNuxtPlugin({
    name: 'loadingManager',
    hooks: {
        'page:loading:start'() {
            const loading = loadingStore()
            loading.startLoading('pageLoading')
        },
        'page:loading:end'() {
            const loading = loadingStore()
            loading.endLoading('pageLoading')
        }
    }
})