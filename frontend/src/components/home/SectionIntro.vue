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
            <NuxtImg src="/home/slider1.jpg" class="img-slider" placeholder></NuxtImg>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { loadingStore } from '~/store/loading';

const img = useImage()
const loading = loadingStore()
const { socials } = useAppConfig()

const budgetSocial = socials.find(s => s.tags?.includes('home-section-intro-budget'))
const budgetSocialUrl = budgetSocial?.url || '/'

const imagesToLoad = [
    '/home/slider1.jpg'
]

onNuxtReady(() => {
    for (const image of imagesToLoad) {
        const imgLoad = new Image()
        const imgUrl = img(image)
        loading.startLoading(`img:a`)
        imgLoad.src = imgUrl
        imgLoad.onload = () => {
            loading.endLoading(`img:a`)
        }
    }
})
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

.add-content {

    &::after,
    &::before {
        content: "";
    }
}

.img-slider {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center center;
}
</style>