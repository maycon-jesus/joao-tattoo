<template>
    <section class="section-container gap-x-4" :class="{ 'margin-reader': marginHeader }">
        <div class="background-image"></div>

        <div class="left" :class="{
            // 'pl-12': !isMobile,
            'px-6': isMobile
        }">
            <div class="text-wrapper">
                <NuxtImg class="img mx-auto block mb-8" :class="{ mobile: isMobile }" src="/logos/logo-branca.png"
                    width="300" alt="" />
                <h1 class="mb-8 text-center" :class="{
                    'text-5xl': isMobile,
                    'text-7xl': !isMobile
                }" v-html=titleHtml></h1>
                <p class="description text-center mb-8" un-text="xl">{{ config.introduction.descriptionText }}</p>
                <div class="flex justify-center items-start gap-4 flex-wrap">
                    <CustomButtonBlur v-for="(btn, index) of config.introduction.buttons" :to="btn.linkInternal"
                        :href="btn.linkExternal" target="_blank" :key="index" :color="btn.color">
                        {{ btn.text }}</CustomButtonBlur>
                </div>
            </div>
        </div>
        <!-- <div class="right" v-if="!isMobile">
            <div class="background-image"></div>
            <HomeIntroRight :mobile="isMobile" />
        </div> -->
    </section>
</template>

<script lang="ts" setup>
import _config from "~/config/pages/home"
const config = ref(_config)
const titleHtml = config.value.introduction.titleText.replace(/%(.+)%/g, '<span class="primary-text">$1</span>')

const { socials } = useAppConfig()
const { breakpoint } = useViewport()
const img = useImage()
const marginHeader = ref(false)

const isMobile = computed(() => {
    return breakpoint.value === 'xs' || breakpoint.value === 'sm'
})

const budgetSocial = socials.find(s => s.tags?.includes('home-section-intro-budget'))
const budgetSocialUrl = budgetSocial?.url || '/'

onNuxtReady(() => {
    if (document.documentElement.clientHeight < 800) {
        marginHeader.value = true
    }
})
</script>

<style lang="scss" scoped>
.section-container {
    display: flex;
    min-height: 100vh;
    box-sizing: border-box;
    position: relative;
    justify-content: center;
    align-items: center;

    &.margin-reader {
        padding-top: 80px;
    }
}

@media (max-height: 500px) {
    .section-container {
        padding-top: 120px;
    }
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(https://ik.imagekit.io/vdk8w7x8i/joaotattoo/home-beta/home-bg2.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    -webkit-filter: grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%) brightness(0.6);
    filter: grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%) brightness(0.6);
}

.left {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
        font-family: "Raleway", sans-serif;
        color: white;
        font-weight: 800;
    }

    .text-wrapper {
        max-width: 800px;

        .img {
            height: 100%;
            max-width: 80%;

            &.mobile {
                width: 200px;
            }
        }
    }

    .description {
        color: #ffffffa6;
        font-family: "Courier";
        font-style: italic;
    }
}
</style>