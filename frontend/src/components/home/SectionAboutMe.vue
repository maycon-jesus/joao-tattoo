<template>
    <section>
        <div class="aaa"></div>

        <div class="mx-auto box-border container" :class="{
            'py-40': viewport.isDesktop,
            'py-25': viewport.isTablet,
            'py-15': viewport.isMobile,
            'px-40': viewport.isDesktop,
            'px-25': viewport.isTablet,
            'px-10': viewport.isMobile,
            desktop: viewport.isDesktop,
            tablet: viewport.isTablet,
            mobile: viewport.isMobile
        }">
            <div class="about-texts">
                <h2 class="title font-black uppercase" :class="{
                    'text-5xl': viewport.isDesktop,
                    'text-4xl': viewport.isTablet,
                    'text-3xl': viewport.isMobile
                }" v-html="titleHtml">
                </h2>
                <p class="text-lg background--text mt-3">{{ componentConfig.descriptionText }}</p>
                <CustomButtonBlur class="mt-8">{{ componentConfig.buttonAboutMeText }}</CustomButtonBlur>
            </div>

            <div :class="{
                desktop: viewport.isDesktop,
                tablet: viewport.isTablet,
                mobile: viewport.isMobile
            }" class="flex no-wrap images-wrapper">
                <NuxtImg class="image image-top" :src="componentConfig.imagemTop" />
                <NuxtImg class="image image-bottom" :src="componentConfig.imagemBottom" />
            </div>
        </div>


    </section>
</template>

<script setup lang="ts">
import { viewportStore } from '~/store/viewport';
import config from '~/config/pages/home'
const componentConfig = config.aboutMe
const viewport = viewportStore()

const titleHtml = componentConfig.titleText.replace(/%(.+)%/g, '<span class="primary-text">$1</span>')
</script>

<style lang="scss" scoped>
section {
    position: relative;
}

.container {
    --image-height: 350px;
    --image-space: calc(var(--image-height) * 0.50);
    --image-div-height: calc(var(--image-height) * 2 - var(--image-space));
    display: grid;
    grid-template-columns: 1fr var(--image-div-height);
    gap: 50px;
    position: relative;

    &.mobile,
    &.tablet {
        --image-height: 250px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr var(--image-div-height);
    }

    &.mobile {
        --image-height: 200px;
    }
}

.font-raleway {
    font-family: "Raleway", sans-serif;
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
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    height: var(--image-div-height);
    width: var(--image-div-height);

    .image {
        height: var(--image-height);
        aspect-ratio: 1/1;
        position: absolute;
        object-fit: cover;
        object-position: center center;

        &.image-top {
            top: 0;
            z-index: 2;
        }

        &.image-bottom {
            top: var(--image-space);
            left: var(--image-space);
            z-index: 1;
        }
    }
}

div.aaa {
    position: absolute;
    height: 300px;
    width: 300px;
    background-color: #1F1F1F;
    mask: url(/8136756_1517.jpg);
    mask-size: contain;
    mask-mode: luminance;
    mask-repeat: no-repeat;
    transform: scaleX(-1) translateY(-50%);
    left: -20px;
    top: 35%;
}
</style>