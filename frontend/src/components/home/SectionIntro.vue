<template>
    <section class="section-container gap-x-4" :class="{
        mobile: isMobile
    }">
        <div class="left" :class="{
            'pl-12': !isMobile,
            'px-6': isMobile
        }">
            <div class="text-wrapper">
                <h1 class="mb-6" un-text="4xl sm:5xl md:6xl" v-html=titleHtml></h1>
                <p class="description" un-text="lg">{{ config.introduction.descriptionText }}</p>
                <div class="mt-6">
                    <CustomButtonBlur :href="budgetSocialUrl" target="_blank">
                        {{ config.introduction.buttons.estimateText }}</CustomButtonBlur>
                    <CustomButtonBlur>{{ config.introduction.buttons.worksText }}</CustomButtonBlur>
                </div>
            </div>
        </div>
        <div class="right">
            <HomeIntroRight :mobile="isMobile" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import config from "~/config/pages/home"
const titleHtml = config.introduction.titleText.replace(/%(.+)%/g, '<span class="primary-text">$1</span>')

const { socials } = useAppConfig()
const { breakpoint } = useViewport()

const isMobile = computed(() => {
    return breakpoint.value === 'xs' || breakpoint.value === 'sm'
})

const budgetSocial = socials.find(s => s.tags?.includes('home-section-intro-budget'))
const budgetSocialUrl = budgetSocial?.url || '/'

</script>

<style lang="scss" scoped>
.section-container {
    display: grid;
    min-height: 100vh;
    box-sizing: border-box;
    grid-template-columns: repeat(2, 1fr);
}

.left {
    display: flex;
    justify-content: center;
    align-items: center;

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

.right {
    position: relative;
}

.section-container.mobile {
    padding-top: 120px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto 450px;

    .left {
        margin-bottom: 50px;
    }
}
</style>