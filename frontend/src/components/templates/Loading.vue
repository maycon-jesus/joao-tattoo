<template>
    <div class="loading" :class="{ loaded }" v-if="!hideLoading">
        <NuxtImg class=" logo-saturada" src="/logos/logo-branca.png" height="256" width="256" alt="" />
        <div class="logo-mask">
            <div class="logo-mask-img"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { loadingStore } from '~/store/loading';

const img = useImage()
const loading = loadingStore()
const loaded = ref(false)
const hideLoading = ref(false)
const loadingProgress = computed(() => loading.loadingProgress)

watch(() => loading.loading, (newValue) => {
    if (!newValue) {
        loaded.value = true
        setTimeout(() => {
            hideLoading.value = true
        }, 1000)
        // }, 2300)
    } else {
        loaded.value = false
        hideLoading.value = false
    }
})

const imageLogoUrl = computed(() => {
    const url = img('/logos/logo-branca.png', {
        height: 256,
        width: 256
    })
    return `url(${url})`
})
</script>

<style lang="scss" scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--theme-background);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .logo-saturada {
        filter: opacity(35%);
    }

    .logo-mask {
        position: fixed;
        top: 50%;
        left: 50%;
        height: 256px;
        width: 256px;
        translate: -50% -50%;
        display: flex;
        justify-content: start;
        align-items: center;

        .logo-mask-img {
            height: 100%;
            mask-image: v-bind(imageLogoUrl);
            mask-size: 256px 256px;
            background-color: #ccc;
            width: v-bind(loadingProgress);
            transition: .5s;
        }
    }
}

.loading.loaded {
    @keyframes loaded {
        0% {
            transform: translateY(0);
            border-bottom: 22vh solid var(--theme-background);
        }

        100% {
            transform: translateY(-100%);
            border-bottom: 1vh solid var(--theme-primary);
        }
    }

    animation: loaded forwards;
    animation-duration: .5s;
    animation-delay: .5s;
}
</style>