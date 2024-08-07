<template>
    <div class="overflow-hidden teste-anima" ref="container">
        <!-- desktop -->
        <div class="grid grid-cols grid-rows-1 gap grid-flow-row w-full box-border line-height-normal"
            v-if="!props.mobile">
            <div class="image-wrapper p-2" v-for="(image, index) of imagesToShow[2]" :key="`l1-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder :style="{ 'grid-column': 'span 2' }" height="500">
                </NuxtImg>
            </div>
        </div>
        <div class="grid grid-cols grid-rows-2 gap grid-flow-col w-full box-border line-height-2" v-if="!props.mobile">
            <div class="image-wrapper p-2" :class="{
                'row-span-2': index % 5 == 0,
                'col-span-2': index % 5 == 0
            }" v-for="(image, index) of imagesToShow[1]" :key="`l2-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder :style="{ 'grid-column': 'span 2' }" height="500">
                </NuxtImg>
            </div>
        </div>
        <div class="grid grid-cols grid-rows-1 gap grid-flow-row w-full box-border line-height-normal"
            v-if="!props.mobile">
            <div class="image-wrapper p-2" v-for="(image, index) of imagesToShow[3]" :key="`l3-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder :style="{ 'grid-column': 'span 2' }" height="500">
                </NuxtImg>
            </div>
        </div>

        <!-- mobile -->
        <div class="grid grid-cols grid-rows-2 gap grid-flow-col w-full box-border line-height-2" v-if="props.mobile">
            <div class="image-wrapper p-2 row-span-2 col-span-2" v-for="(image, index) of imagesToShow[0]"
                :key="`l2-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder :style="{ 'grid-column': 'span 2' }" height="500">
                </NuxtImg>
            </div>
        </div>
        <div class="grid grid-cols grid-rows-2 gap grid-flow-col w-full box-border line-height-2" v-if="props.mobile">
            <div class="image-wrapper p-2 row-span-2 col-span-2" v-for="(image, index) of imagesToShow[1]"
                :key="`l2-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder :style="{ 'grid-column': 'span 2' }" height="500">
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
    return `${containerHeight.value / 4}px`
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
    [], // has perfil a cada 3
    [], // has perfil a cada 5
    [],
    []
])

onMounted(() => {
    for (let lineIndex = 0; lineIndex < imagesToShow.value.length; lineIndex++) {
        const line = imagesToShow.value[lineIndex]
        if (line.length > 0) continue;
        let count = -1

        for (let i = 0; i < 25; i++) {
            count++
            if (lineIndex === 0) {
                if (count % 3 == 0) {
                    line.push(imagesPerfil[Math.floor(Math.random() * imagesPerfil.length)])
                    continue
                }
            }

            if (lineIndex === 1) {
                if (count % 5 == 0) {
                    line.push(imagesPerfil[Math.floor(Math.random() * imagesPerfil.length)])
                    continue
                }
            }

            line.push(getRandomImage(line))
        }
    }
})
</script>

<style lang="scss" scoped>
@keyframes teste {
    0% {
        transform: translateX(calc((v-bind(imageScrollHeight) * 1.3 * -1)/2));
    }

    100% {
        transform: translateX(calc(14 * v-bind(imageScrollHeight) * 1.3 * -1));
    }
}

@keyframes testeMeio {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(14 * v-bind(imageScrollHeight) * 1.3 * -1));
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

    .line-height-2 {
        height: calc(v-bind(imageScrollHeight) * 2);
    }

    .grid-cols {
        grid-auto-flow: column;
        grid-auto-columns: auto;

        & {
            animation: teste 120s linear 0s infinite alternate forwards;
        }

        &:nth-child(2) {
            animation: testeMeio 120s linear 0s infinite alternate forwards;
        }
    }

    .image-wrapper {
        height: 100%;
        box-sizing: border-box;

        .img-slider {
            height: 100%;
            display: inline-block;
            aspect-ratio: 13/10;

            object-fit: cover;
            object-position: center center;

            border-radius: 0px;
            box-sizing: border-box;
            // filter: brightness(.8) saturate(1.1);
            filter: brightness(103%) contrast(114%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%);
        }
    }
}

@mixin dots($count) {
    $text-shadow: (
    );

@for $i from 0 through $count {
    $text-shadow: $text-shadow,
        (-.5+(random()) * 3) + em (-.5+(random()) * 3) + em 7px hsla(random() * 360, 100%, 50%, .9);
}

text-shadow: $text-shadow;
}

.dots::before,
.dots::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3em;
    height: 3em;
    content: '*';
    color: transparent;
    mix-blend-mode: screen;
    animation: 44s -27s move infinite ease-in-out alternate;
    z-index: 0;
}

.dots::before {
    @include dots(40);
    animation-duration: 42s;
    animation-delay: -23s;
}

.dots::after {
    @include dots(40);
    animation-duration: 41s;
    animation-delay: -19s;
}


@keyframes move {
    from {
        transform: rotate(0deg) scale(12) translateX(-20px);
    }

    to {
        transform: rotate(360deg) scale(18) translateX(20px);
    }
}
</style>