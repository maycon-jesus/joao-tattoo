export const viewportStore = defineStore('viewport', {
    getters: {
        isMobile(state) {
            const { breakpoint } = useViewport()
            return ['xs'].includes(breakpoint.value)
        },
        isTablet(state) {
            const { breakpoint } = useViewport()
            return ['sm', 'md'].includes(breakpoint.value)
        },
        isSmallTablet(state) {
            const { breakpoint } = useViewport()
            return ['sm'].includes(breakpoint.value)
        },
        isDesktop(state) {
            const { breakpoint } = useViewport()
            return ['lg', 'xl', 'xxl'].includes(breakpoint.value)
        }
    }
})