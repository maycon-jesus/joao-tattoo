<template>
    <div class="overflow-hidden teste-anima" ref="container">
        <!-- desktop -->
        <div class="grid grid-cols grid-rows-1 gap grid-flow-col w-full box-border line-height-normal normal"
            v-if="!props.mobile">
            <div class="image-wrapper p-2" v-for="(image, index) of imagesToShow[0]" :key="`l1-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder height="500">
                </NuxtImg>
            </div>
        </div>
        <div class="grid grid-cols grid-rows-1 gap grid-flow-col w-full box-border line-height-normal reverse"
            v-if="!props.mobile">
            <div class="image-wrapper p-2" v-for="(image, index) of imagesToShow[1]" :key="`l1-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder height="500">
                </NuxtImg>
            </div>
        </div>

        <!-- mobile -->
        <div class="grid grid-cols grid-rows-1 gap grid-flow-col w-full box-border line-height-normal mobile"
            v-if="props.mobile">
            <div class="image-wrapper p-2 row-span-2 col-span-2" v-for="(image, index) of imagesToShow[0]"
                :key="`l2-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder height="500">
                </NuxtImg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import config from "~/config/pages/home"
const props = defineProps<{
    mobile: Boolean,
}>()

const container = ref<HTMLElement>()
const containerHeight = ref(0)

const imagesPerfil = config.introduction.profileImages
const imagesToLoad = config.introduction.imagesTattoos

function getRandomImage(imageExists: string[]) {
    const image = imagesToLoad[Math.floor(imagesToLoad.length * Math.random())]
    const imagesDoNotRepeat = imageExists.slice(-10)
    if (imagesDoNotRepeat.includes(image)) return getRandomImage(imageExists)
    return image
}

const imageScrollHeight = computed(() => {
    if (props.mobile) return `${containerHeight.value}px`
    return `${containerHeight.value / 2}px`
})

let intervalResize: NodeJS.Timeout | undefined = undefined
function onResize() {
    containerHeight.value = container.value?.getBoundingClientRect().height || 0
}

onNuxtReady(() => {
    containerHeight.value = container.value?.getBoundingClientRect().height || 0
    intervalResize = setInterval(() => {
        onResize()
    }, 1000)
    window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
    clearInterval(intervalResize)
})

const imagesToShow = useState<string[][]>(() => [
    [], // has perfil a cada 6
    [], // has perfil a cada 6
])

onMounted(() => {
    for (let lineIndex = 0; lineIndex < imagesToShow.value.length; lineIndex++) {
        const line = imagesToShow.value[lineIndex]
        if (line.length > 0) continue;
        let count = -1

        for (let i = 0; i < 50; i++) {
            count++
            if (count % 6 == 0) {
                line.push(imagesPerfil[Math.floor(Math.random() * imagesPerfil.length)])
                continue
            }

            line.push(getRandomImage(line))
        }
    }
})
</script>

<style lang="scss" scoped>
@keyframes animacaoCols {
    0% {
        transform: translateX(calc((v-bind(imageScrollHeight) * 0.83333 * -1)));
    }

    100% {
        transform: translateX(calc(45 * v-bind(imageScrollHeight) * 0.83333 * -1));
    }
}

@keyframes animacaoColsReverse {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(45 * v-bind(imageScrollHeight) * 0.83333 * -1));
    }
}

.teste-anima {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    &>* {
        position: relative;
        z-index: 1;
    }

    .line-height-normal {
        height: v-bind(imageScrollHeight);
    }

    .grid-cols {
        grid-auto-flow: column;
        grid-auto-columns: auto;

        &.normal {
            animation: animacaoCols 60s linear 0s infinite alternate forwards;
        }

        &.reverse {
            animation: animacaoColsReverse 60s linear 0s infinite alternate-reverse forwards;
        }

        &.mobile {
            animation: animacaoCols 120s linear 0s infinite alternate forwards;
        }
    }

    .image-wrapper {
        height: 100%;
        box-sizing: border-box;

        .img-slider {
            height: 100%;
            display: inline-block;
            aspect-ratio: 10/12;

            object-fit: cover;
            object-position: center center;

            border-radius: 0px;
            box-sizing: border-box;
            // filter: brightness(.8) saturate(1.1);
            filter: brightness(103%) contrast(114%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%);
        }
    }
}
</style>