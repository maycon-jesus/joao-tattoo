<template>
    <section :class="{
        'py-40': viewport.isDesktop,
        'py-25': viewport.isTablet,
        'py-15': viewport.isMobile,
        'px-40': viewport.isDesktop,
        'px-25': viewport.isTablet,
        'px-15': viewport.isMobile,
        desktop: viewport.isDesktop,
        tablet: viewport.isTablet,
        mobile: viewport.isMobile
    }" class="container mx-auto box-border">
        <div class="about-texts">
            <h2 class="title font-black uppercase" :class="{
                'text-5xl': viewport.isDesktop,
                'text-4xl': viewport.isTablet,
                'text-3xl': viewport.isMobile
            }">Quem está por trás destas <span class="primary--text">tatuagens
                    incríveis</span>?
            </h2>
            <p class="text-lg background--text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
                in eros elementum
                tristique.
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            <CustomButtonBlur class="mt-8">Sobre mim</CustomButtonBlur>
        </div>

        <div :class="{
            desktop: viewport.isDesktop,
            tablet: viewport.isTablet,
            mobile: viewport.isMobile
        }" class="flex no-wrap images-wrapper">
            <NuxtImg class="image image-top" :src="config.imagemTopo" />
            <NuxtImg class="image image-bottom" :src="config.imagemAtras" />
        </div>

    </section>
</template>

<script setup lang="ts">
import { viewportStore } from '~/store/viewport';
const configGlobal = useAppConfig()
const config = configGlobal.pages.home.secaoSobreMim
const viewport = viewportStore()
</script>

<style lang="scss" scoped>
section {
    display: grid;
    grid-template-columns: 1fr calc(350px + 125px);
    gap: 50px;

    &.mobile {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr calc(350px + 125px);
    }

    &.tablet {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr calc(350px + 125px);
    }
}

.font-raleway {
    font-family: "Raleway", sans-serif;
}

.primary--text {
    color: var(--theme-primary);
}

.background--text {
    color: var(--theme-background2-text);
}

.about-texts {
    display: flex;
    flex-flow: column;
    justify-content: center;
}

.images-wrapper {
    position: relative;
    height: 100%;
    min-height: calc(350px + 125px);
    width: 100%;
    max-width: 550px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;

    .image {
        height: 350px;
        width: 75%;
        max-width: 400px;
        position: absolute;
        object-fit: cover;
        object-position: center center;

        &.image-top {
            top: 0;
            z-index: 2;
        }

        &.image-bottom {
            top: 125px;
            left: 125px;
            z-index: 1;
        }
    }

}
</style>