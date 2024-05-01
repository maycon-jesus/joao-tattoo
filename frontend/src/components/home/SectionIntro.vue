<template>
    <section class="section-container gap-x-4">
        <div class="left pl-12">
            <div class="text-wrapper">
                <h1 class="mb-6"><span class="primary-text">Especialista</span> em Geek & BlackWork</h1>
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
            <HomeIntroRight />
        </div>
    </section>
</template>

<script lang="ts" setup>
const { socials } = useAppConfig()

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
        font-size: 58px;
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
</style>