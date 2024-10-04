<template>
    <!-- <NuxtLink v-if="props.to" :to="props.to"
        class="btn block mb-4 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:before:[box-shadow:_20px_20px_20px_30px_var(--ball3)] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-amber-300 relative text-left p-3 text-gray-50 text-base font-bold overflow-hidden  before:absolute before:w-12 before:h-12 before:right-1 before:top-1 before:z-10 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:right-8 after:top-3 after:rounded-full after:blur-lg">
        <slot name="default"></slot>
    </NuxtLink>
    <component v-else :is="props.href ? 'a' : 'button'"
        class="btn block mb-4 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:before:[box-shadow:_20px_20px_20px_30px_var(--ball3)] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-amber-300 relative text-left p-3 text-gray-50 text-base font-bold overflow-hidden  before:absolute before:w-12 before:h-12 before:right-1 before:top-1 before:z-10 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:right-8 after:top-3 after:rounded-full after:blur-lg"
        :href="props.href" :target="props.target">
        <span>
            <slot name="default"></slot>
        </span>
    </component> -->
    <NuxtLink v-if="props.to" :to="props.to" class="button-container" :class="{
        'button--primary': color === 'primary' || !color,
        'button--normal': color === 'normal'
    }">
        <div class="bg"></div>
        <span class="mask">
            <slot name="default"></slot>
        </span>
        <button type="button" name="Hover">
            <slot name="default"></slot>
        </button>
    </NuxtLink>
    <component v-else class="button-container" :is="props.href ? 'a' : 'div'" :class="{
        'button--primary': color === 'primary' || !color,
        'button--normal': color === 'normal'
    }">
        <div class="bg"></div>
        <span class="mask">
            <slot name="default"></slot>
        </span>
        <button type="button" name="Hover">
            <slot name="default"></slot>
        </button>
    </component>
</template>

<script lang="ts" setup>
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router';

const props = defineProps<{
    href?: string,
    to?: RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric,
    target?: "_blank",
    color?: "primary" | "normal"
}>()
defineSlots<{
    default: () => string
}>()
</script>

<style lang="scss" scoped>
.button--primary {
    --text-color: #fff;
    --background-color: var(--theme-primary);
    --hover-text-color: black;
    --hover-background-color: white;
    --border: none;
}

.button--normal {
    --text-color: #fff;
    --background-color: transparent;
    --hover-text-color: #fff;
    --hover-background-color: var(--theme-primary);
    --border: 1px solid white;
}

button {
    padding: 0;
}

.button-container {
    display: block;
    --font-size: 16px;
    --padding-x: 25px;
    --padding-y: 20px;
    position: relative;
    width: max-content;
    overflow: hidden;
    transition: 0.5s;
    // border: 1px solid rgba(255, 255, 255);
    border: var(--border);
    border-radius: 0.5rem;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    background-color: var(--background-color);
}

.bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.button-container button {
    width: 100%;
    height: 100%;
    // font-family: "Monument Extended", sans-serif;
    font-family: inherit;
    font-size: var(--font-size);
    font-weight: bold;
    background: var(--theme-primary);
    background: var(--hover-background-color);
    -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
    mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
    -webkit-mask-size: 2300% 100%;
    mask-size: 2300% 100%;
    border: none;
    color: var(--hover-text-color);
    cursor: pointer;
    animation: anim2 0.3s steps(22) forwards;
    padding: var(--padding-y) var(--padding-x);
    line-height: 16px;
}

.button-container button:hover {
    animation: anim1 0.3s steps(22) forwards;
}

.mask {
    position: absolute;
    color: var(--text-color);
    text-align: center;
    width: 100%;
    // font-family: "Monument Extended", sans-serif;
    font-family: inherit;
    font-weight: bold;
    font-size: var(--font-size);
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 16px;
}

@keyframes anim1 {
    from {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
    }

    to {
        -webkit-mask-position: 0 0;
        mask-position: 0 0;
    }
}

@keyframes anim2 {
    from {
        -webkit-mask-position: 0 0;
        mask-position: 0 0;
    }

    to {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
    }
}




.btn {
    padding-right: 50px;
    height: fit-content;
    width: fit-content;
    background-color: #1F1F1F;
    cursor: pointer;
    border: none;
    border-radius: 5px;

    --ball1: #f8133c;
    --ball2: #eb2b4e;
    --ball3: #5C4D40;

    &:hover {
        // border-color: white;
        color: white;
    }

    &:after {
        content: "";
        background-color: var(--ball1);
        opacity: .5;
        z-index: 0;
    }

    &:before {
        content: "";
        background-color: var(--ball2);
        opacity: .5;
        z-index: 0;
    }

    span {
        position: relative;
    }
}
</style>