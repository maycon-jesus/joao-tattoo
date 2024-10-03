<template>
    <section class="section-container gap-x-4" :class="{
        mobile: isMobile
    }">
        <div class="background-image"></div>

        <div class="left" :class="{
            'pl-12': !isMobile,
            'px-6': isMobile
        }">
            <div class="text-wrapper">
                <h1 class="mb-6" un-text="4xl sm:5xl md:6xl" v-html=titleHtml></h1>
                <p class="description" un-text="lg">{{ config.introduction.descriptionText }}</p>
                <div class="mt-6 flex justify-start items-start gap-4">

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

const isMobile = computed(() => {
    return breakpoint.value === 'xs' || breakpoint.value === 'sm' || breakpoint.value === 'md'
})

const budgetSocial = socials.find(s => s.tags?.includes('home-section-intro-budget'))
const budgetSocialUrl = budgetSocial?.url || '/'
</script>

<style lang="scss" scoped>
.section-container {
    display: flex;
    min-height: 100vh;
    box-sizing: border-box;
    position: relative;
    justify-content: center;
    align-items: center;
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
        max-width: 700px;
    }

    .description {
        color: #ffffffa6;
    }
}

.section-container.mobile {

    .left {
        margin-bottom: 50px;
    }
}
</style>