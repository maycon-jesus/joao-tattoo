<template>
    <section :class="{
        'py-20': viewport.isDesktop,
        'py-15': viewport.isTablet,
        'py-10': viewport.isMobile,
    }" class="px-10">
        <h2 un-text="center" uppercase class="font-extrabold font-raleway mb-10" :class="{
            'text-5xl': viewport.isDesktop || viewport.isTablet,
            'text-4xl': viewport.isMobile,
        }" v-motion :initial="animationCardInit"
            :visible-once="animationCardVisibleOnce(0, secaoServicos.cards.length / 2 * 200)">Meus <span
                class="primary--text">serviços</span></h2>
        <div v-if="!viewport.isMobile">
            <div class="grid grid-flow-row gap-5 overflow-hidden pb-5" :class="{
                'grid-cols-4': viewport.isDesktop,
                'grid-cols-2': viewport.isTablet,
            }">
                <HomeServicesServiceCard v-for=" (card, index) of secaoServicos.cards" :key="index" v-bind="card"
                    class="p-5 position-relative" :class="{
                        'top-5': (index + 1) % 2 == 0,
                    }" v-motion :initial="animationCardInit" :visible-once="animationCardVisibleOnce(index * 200)" />
            </div>
        </div>
        <div v-else>
            <div class="grid grid-flow-row gap-5 overflow-hidden pb-5 grid-cols-1">
                <HomeServicesServiceCard v-for=" (card, index) of secaoServicos.cards" :key="index" v-bind="card"
                    class="p-5 position-relative" v-motion :initial="animationCardInit"
                    :visible-once="animationCardVisibleOnce(100)" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { viewportStore } from '~/store/viewport';
const { pages: { home: { secaoServicos } } } = useAppConfig()
const viewport = viewportStore()

const animationCardInit = {
    transform: 'translateY(25%)',
    opacity: 0,
    transition: {
        type: 'keyframes',
        ease: 'easeIn'
    }
}
const animationCardVisibleOnce = (delay: number, duration = 200) => ({
    transform: 'translateY(0%)',
    opacity: 1,
    transition: {
        type: 'keyframes',
        ease: 'easeIn',
        delay,
        duration
    }
})
</script>

<style lang="scss" scoped>
.font-raleway {
    font-family: "Raleway", sans-serif;
}

.primary--text {
    color: var(--theme-primary);
}
</style>