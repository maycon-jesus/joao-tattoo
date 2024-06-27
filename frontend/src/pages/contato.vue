<template>
    <div class="after-header page-main">
        <div class="container mx-auto grid px-6 box-border" :class="{
            'grid-cols-2': !showMobileView,
            'gap-14': !showMobileView,
            mobile: showMobileView,
            'py-20': !showMobileView,
            'py-10': showMobileView
        }">
            <div>
                <h1 class="font-extrabold uppercase title" :class="{
                    'text-6xl': viewport.isDesktop,
                    'text-5xl': !viewport.isDesktop,
                }">Deseja uma tatuagem?<br /><span class="primary--text">Contate-me</span></h1>
                <p class="mt-6 text-lg background2--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum
                    tristique. Duis cursus, mi quis viverra ornare.</p>
                <div class="pt-10">
                    <NuxtImg src="/contact/contact.jpeg" width="1060" class="image"></NuxtImg>
                </div>
            </div>
            <div>
                <div class="socials-box flex flex-col" :class="{
                    'pa-16': !showMobileView,
                    'pa-8': showMobileView,
                    'gap-6': !showMobileView,
                    'gap-5': showMobileView
                }">
                    <CustomButtonColored :background-color="social.colors.btnGradient" class="block w-full"
                        :text-color="social.colors.btnText" v-for="social of socials" :href="social.url" target="_blank"
                        :key="social.url">
                        {{ social.socialName }}
                    </CustomButtonColored>
                </div>
            </div>
        </div>
        <HomeSectionInstagram />
    </div>
</template>

<script setup lang="ts">
import { viewportStore } from '~/store/viewport';

const config: any = useAppConfig()
const socials = config.socials
    .filter((social: any) => social.visibility.contactPage)
    .sort((a: any, b: any) => a.order.contactPage - b.order.contactPage);
const viewport = viewportStore()

const showMobileView = computed(() => viewport.isMobile || viewport.isSmallTablet)
</script>

<style lang="scss" scoped>
.container {
    max-width: 1060px;
    --image-width: 150%;

    &.mobile {
        --image-width: 100%;
    }
}

.primary--text {
    color: var(--theme-primary)
}

.background2--text {
    color: var(--theme-background2-text)
}

.image {
    aspect-ratio: 16/10;
    object-fit: cover;
    width: var(--image-width);
    filter: saturate(0) brightness(.5);
}

.socials-box {
    border: 1px solid white;
    background-color: var(--theme-background);
    position: relative;
}
</style>