<template>
    <div class="w-full overflow-hidden" :class="{
        'text-9xl': viewport.isDesktop,
        'text-6xl': viewport.isTablet,
        'text-5xl': viewport.isMobile
    }">
        <div class="container-move-text font-black">
            <h1 class="heading-move">MEU TRABALHO - PORTFOLIO - ARTES - MEU TRABALHO - PORTFOLIO - ARTES</h1>
            <h1 class="heading-move">MEU TRABALHO - PORTFOLIO - ARTES - MEU TRABALHO - PORTFOLIO - ARTES</h1>
            <h1 class="heading-move">MEU TRABALHO - PORTFOLIO - ARTES - MEU TRABALHO - PORTFOLIO - ARTES</h1>
        </div>
        <div class="container-move-text font-black">
            <h1 class="heading-move">MEU TRABALHO - PORTFOLIO - ARTES - MEU TRABALHO - PORTFOLIO - ARTES</h1>
            <h1 class="heading-move">MEU TRABALHO - PORTFOLIO - ARTES - MEU TRABALHO - PORTFOLIO - ARTES</h1>
            <h1 class="heading-move">MEU TRABALHO - PORTFOLIO - ARTES - MEU TRABALHO - PORTFOLIO - ARTES</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { viewportStore } from '~/store/viewport';

const viewport = viewportStore()
</script>

<style scoped lang="scss">
@keyframes animationStartZero {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes animationStartHalf {
    0% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(-150%);
    }
}

.container-move-text {
    display: flex;
    flex-wrap: nowrap;
}

.container-move-text * {
    display: inline-block;
    box-sizing: border-box;
    -webkit-text-stroke: .5px var(--theme-primary);
    color: transparent;
    text-shadow: 0 0 2px #0a0909;
    white-space: nowrap;
}

.container-move-text h1 {
    animation-timing-function: linear;
    animation-duration: 45s;
    animation-iteration-count: infinite;

    &::after {
        content: "\00a0-\00a0";
    }
}

.container-move-text:nth-child(1) h1 {
    animation-name: animationStartZero;
}

.container-move-text:nth-child(2) h1 {
    animation-name: animationStartZero;
    animation-direction: reverse;
}

.container-move-text:nth-child(3) h1 {
    animation-name: animationStartHalf;
}
</style>