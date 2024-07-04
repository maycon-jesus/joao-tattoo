<template>
    <section :class="{
        'py-20': !showMobileView,
        'py-10': showMobileView,
    }" class="px-6 container mx-auto box-border">
        <div class="grid grid-flow-row gap-5 overflow-hidden pb-5" :class="{
            'grid-cols-4': viewport.isDesktop || (viewport.isTablet && !viewport.isSmallTablet),
            'grid-cols-2': viewport.isMobile || viewport.isSmallTablet,
        }">
            <ContactCard v-for=" (card, index) of socialsSquare" :key="index" :title="card.socialName"
                :description="card.text" :href="card.url" class="p-5 position-relative" :class="{
                    'top-5': (index + 1) % 2 == 0,
                }" v-motion :initial="animationCardInit" :visible-once="animationCardVisibleOnce(index * 200)" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { viewportStore } from '~/store/viewport';
const { socials }: any = useAppConfig()
const socialsSquare = socials.filter((social: any) => social.visibility.contactPageSquare).sort((a: any, b: any) => a.order.contactPageSquare - b.order.contactPageSquare)
const viewport = viewportStore()
const showMobileView = computed(() => viewport.isMobile || viewport.isSmallTablet)

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
.container {
    max-width: 1060px
}

.font-raleway {
    font-family: "Raleway", sans-serif;
}

.primary--text {
    color: var(--theme-primary);
}
</style>