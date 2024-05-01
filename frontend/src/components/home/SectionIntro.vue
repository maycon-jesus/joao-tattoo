<template>
    <section class="section-container gap-x-4" :class="{
        mobile: isMobile
    }">
        <div class="left" :class="{
            'pl-12': !isMobile,
            'px-6': isMobile
        }">
            <div class="text-wrapper">
                <h1 class="mb-6" un-text="4xl sm:5xl md:6xl"><span class="primary-text">Especialista</span> em Geek &
                    BlackWork
                </h1>
                <p class="description" un-text="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    varius enim in
                    eros elementum
                    tristique.</p>
                <div class="mt-6">
                    <CustomButtonBlur :href="budgetSocialUrl" target="_blank">Solicitar orçamento</CustomButtonBlur>
                    <CustomButtonBlur>Meus trabalhos</CustomButtonBlur>
                </div>
            </div>
        </div>
        <div class="right">
            <HomeIntroRight :mobile="isMobile" />
        </div>
    </section>
</template>

<script lang="ts" setup>
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
    height: 100vh;
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

    .primary-text {
        color: var(--theme-primary);
    }

    .description {
        color: #ffffffa6;
    }
}

.right {
    height: 100%;
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