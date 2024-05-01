<template>
    <div class="overflow-hidden teste-anima" ref="container">
        <div class="grid grid-cols grid-rows-1 gap grid-flow-row w-full box-border line-height-normal">
            <div class="image-wrapper p-2" v-for="(image, index) of imagesToShow[0]" :key="`l1-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder :style="{ 'grid-column': 'span 2' }">
                </NuxtImg>
            </div>
        </div>
        <div class="grid grid-cols grid-rows-2 gap grid-flow-col w-full box-border line-height-2">
            <div class="image-wrapper p-2" :class="{
                'row-span-2': index % 5 == 0,
                'col-span-2': index % 5 == 0
            }" v-for="(image, index) of imagesToShow[1]" :key="`l2-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder :style="{ 'grid-column': 'span 2' }">
                </NuxtImg>
            </div>
        </div>
        <div class="grid grid-cols grid-rows-1 gap grid-flow-row w-full box-border line-height-normal">
            <div class="image-wrapper p-2" v-for="(image, index) of imagesToShow[2]" :key="`l3-${index}`">
                <NuxtImg :src="image" class="img-slider" placeholder :style="{ 'grid-column': 'span 2' }">
                </NuxtImg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { loadingStore } from '~/store/loading';

const img = useImage()
const loading = loadingStore()
const container = ref<HTMLElement>()
const containerHeight = ref(0)

const imagesPerfil = [
    '/home/perfil.jpg',
    '/home/perfil2.jpg',
]

const imagesToLoad = [
    '/home/slider1.jpg',
    '/home/slider2.jpg',
    '/home/slider3.jpg',
    '/home/slider4.jpg',
    '/home/slider5.jpg',
    '/home/slider6.jpg',
    '/home/slider7.jpg',
    '/home/slider8.jpg',
    '/home/slider9.jpg',
    '/home/slider10.jpg',
    '/home/slider11.jpg',
    '/home/slider12.jpg',
    '/home/slider13.jpg',
    '/home/slider14.jpg',
    '/home/slider15.jpg',
    '/home/slider16.jpg',
    '/home/slider17.jpg',
    '/home/slider18.jpg',
    '/home/slider19.jpg',
]
const totalImages = imagesToLoad.length

const imageScrollHeight = computed(() => {
    return `${containerHeight.value / 4}px`
})

onNuxtReady(() => {
    // for (const image of imagesToLoad) {
    //     const imgLoad = new Image()
    //     const imgUrl = img(image)
    //     loading.startLoading(`img:${image}`)
    //     imgLoad.src = imgUrl
    //     imgLoad.onload = () => {
    //         loading.endLoading(`img:${image}`)
    //     }
    // }

    containerHeight.value = container.value?.getBoundingClientRect().height || 0
})

const imagesToShow = useState<string[][]>(() => [
    [],
    [],
    []
])

onMounted(() => {
    for (let lineIndex = 0; lineIndex < imagesToShow.value.length; lineIndex++) {
        const line = imagesToShow.value[lineIndex]
        let count = -1

        for (let i = 0; i < 25; i++) {
            count++
            if (lineIndex === 1) {
                if (count % 5 == 0) {
                    console.log(count)
                    line.push(imagesPerfil[Math.floor(Math.random() * imagesPerfil.length)])
                    continue
                }
            }
            line.push(imagesToLoad[Math.floor(Math.random() * imagesToLoad.length)])
        }
    }
    for (let lineIndex = 0; lineIndex < imagesToShow.value.length; lineIndex++) {
        const line = imagesToShow.value[lineIndex]

        if (lineIndex !== 1) {
            for (let i = 0; i < 25; i++) {
                line.push(line[i])
            }
        } else {
            // for (let i = 25; i > 0; i--) {
            //     line.unshift(line[i - 1])
            // }
        }
    }
})
</script>

<style lang="scss" scoped>
@keyframes teste {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(25 * v-bind(imageScrollHeight) * -1));
    }
}

@keyframes testeMeio {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(14 * v-bind(imageScrollHeight) * -1));
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
        grid-template-columns: repeat(100, v-bind(imageScrollHeight));

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
            aspect-ratio: 1/1;

            object-fit: cover;
            object-position: center center;

            border-radius: 10px;
            border: 1px solid var(--theme-primary);
            box-sizing: border-box;
            filter: brightness(.8) saturate(1.1)
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