<template>
    <NuxtLink v-if="props.to" :to="props.to"
        class="btn block mb-4 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:before:[box-shadow:_20px_20px_20px_30px_var(--ball3)] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-amber-300 relative text-left p-3 text-gray-50 text-base font-bold overflow-hidden  before:absolute before:w-12 before:h-12 before:right-1 before:top-1 before:z-10 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:right-8 after:top-3 after:rounded-full after:blur-lg">
        <slot name="default"></slot>
    </NuxtLink>
    <component v-else :is="props.href ? 'a' : 'button'"
        class="btn block mb-4 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:before:[box-shadow:_20px_20px_20px_30px_var(--ball3)] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-amber-300 relative text-left p-3 text-gray-50 text-base font-bold overflow-hidden  before:absolute before:w-12 before:h-12 before:right-1 before:top-1 before:z-10 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:right-8 after:top-3 after:rounded-full after:blur-lg"
        :href="props.href" :target="props.target">
        <span>
            <slot name="default"></slot>
        </span>
    </component>
</template>

<script lang="ts" setup>
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router';

const props = defineProps<{
    href?: string,
    to?: RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric,
    target?: "_blank"
}>()
defineSlots<{
    default: () => string
}>()
</script>

<style lang="scss" scoped>
.btn {
    padding-right: 50px;
    height: fit-content;
    width: fit-content;
    background-color: #1F1F1F;
    cursor: pointer;
    border: none;
    border-radius: 5px;

    --ball1: #EEC759;
    --ball2: #DB7B2C;
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