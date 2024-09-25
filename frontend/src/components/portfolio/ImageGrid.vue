<template>
    <section>
        <div class="custom-cols mx-auto" :class="{
            animateOut: !!imageOpen,
            animateIn: imageClosing,
            tablet: isTablet,
            mobile: isMobile
        }">
            <div class="align-center" v-for="(image, index) of images" :key=index
                @click="(ev) => clickToOpen(image, ev)" :style="{
                    '--delay': randomDelay()
                }">
                <NuxtImg width="300" :src="image" alt="" class="img" />
                <NuxtImg :src="image" alt="" class="img" aria-hidden="true" v-show="false" />
            </div>
        </div>
        <div class="preview" :class="{ close: imageClosing }" v-show="imageOpen">
            <button aria-label="Fechar imagem" class="close-btn" @click="clickToClose">
                <Icon name="mingcute:close-fill" size="32" class="primary--text"></Icon>
            </button>
            <NuxtImg :src="imageOpen || ''" alt="" class="image-clone" :style="{
                '--left': imageCloneParams.left + 'px',
                '--height': imageCloneParams.height + 'px',
                '--width': imageCloneParams.width + 'px',
                '--top': imageCloneParams.top + 'px',
            }" />
        </div>
    </section>
</template>

<script setup lang="ts">
import config from "~/config/pages/home"
import { viewportStore } from "~/store/viewport";
const imagesToLoad = config.introduction.imagesTattoos
const viewport = viewportStore()
const imageOpen = ref<null | string>(null)
const imageClosing = ref<boolean>(false)
const imageCloneParams = ref<{
    left: number,
    top: number,
    width: number,
    height: number
}>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
})

function getRandomImage(imageExists: string[]) {
    const image = imagesToLoad[Math.floor(imagesToLoad.length * Math.random())]
    const imagesDoNotRepeat = imageExists.slice(-10)
    if (imagesDoNotRepeat.includes(image)) return getRandomImage(imageExists)
    return image
}

const isTablet = computed(() => viewport.isTablet)
const isMobile = computed(() => viewport.isMobile)

const clickToOpen = (image: string, ev: MouseEvent) => {
    imageOpen.value = image
    const target = ev.target as HTMLElement

    imageCloneParams.value.top = target.getBoundingClientRect().top
    imageCloneParams.value.left = target.offsetLeft
    imageCloneParams.value.width = target.clientWidth
    imageCloneParams.value.height = target.clientHeight
}

const clickToClose = () => {
    imageClosing.value = true
    setTimeout(() => {
        imageOpen.value = null
        imageClosing.value = false
    }, 300)
}

const images = ref<string[]>([])

const randomDelay = () => {
    return Math.floor(Math.random() * 150) + 'ms'
}

onMounted(() => {
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
    images.value.push(getRandomImage([]))
})
</script>

<style lang=scss scoped>
.primary--text {
    color: var(--theme-primary)
}

.custom-cols {
    --columns-count: 3;
    columns: var(--columns-count);
    width: calc((300px + 30px) * var(--columns-count));
    gap: 0;

    &>* {
        padding: 15px;
        display: flex;
        justify-content: center;
        width: calc(300px + 30px);
        box-sizing: border-box;
        display: block;
    }

    &.tablet {
        --columns-count: 2;
    }

    &.mobile {
        --columns-count: 1;
    }

    @keyframes imageIn {
        0% {
            transform: translateX(0);
            opacity: 1;
        }

        100% {
            transform: translateX(-100vw);
            opacity: .6;
        }
    }

    @keyframes imageOut {
        0% {
            transform: translateX(0);
            opacity: 1;
        }

        100% {
            transform: translateX(-100vw);
            opacity: .6;
        }
    }

    &.animateOut>* {
        animation: imageIn normal 600ms var(--delay) cubic-bezier(.5, 1, .2, 1) forwards;
    }

    &.animateIn>* {
        animation: imageOut reverse 300ms var(--delay) cubic-bezier(.5, 1, .2, 1) backwards;
    }
}

@keyframes previewBackground {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.preview {
    display: block;
    z-index: 300;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    &>* {
        z-index: 300;
    }

    .close-btn {
        position: absolute;
        right: 2rem;
        top: 2rem;
        background: transparent;
        height: 32px;
        width: 32px;
        border: none;
        padding: 0px;
        cursor: pointer;
        transition: all 0.2s;
        opacity: 1;
    }

    &.close .close-btn {
        opacity: 0;
    }

    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: var(--theme-background);
        animation: previewBackground 600ms cubic-bezier(.5, 1, .2, 1) normal;
        z-index: 300;
        transition: opacity 600ms cubic-bezier(.5, 1, .2, 1);
        opacity: 1;
    }

    @keyframes animateImageCloneOpen {
        0% {
            transform: translate(-0%, -0%);
            top: var(--top);
            left: var(--left);
            height: var(--height);
            width: 330px;
        }

        100% {
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            height: 75vh;
            width: 75vw;
        }
    }

    @keyframes animateImageCloneClose {
        0% {
            transform: translate(-0%, -0%);
            top: var(--top);
            left: var(--left);
            height: var(--height);
            width: 330px;
        }

        100% {
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            height: 75vh;
            width: 75vw;
        }
    }

    .image-clone {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        height: 75vh;
        width: 75vw;
        animation: animateImageCloneOpen 600ms cubic-bezier(.5, 1, .2, 1) normal forwards;
        max-height: 75vh;
        max-width: 75vw;
        object-fit: contain;
    }
}


// Animações de fechamento
.close .image-clone {
    animation: animateImageCloneClose 300ms cubic-bezier(.5, 1, .2, 1) reverse forwards;
}

.close.preview::before {
    opacity: 0 !important;
}
</style>