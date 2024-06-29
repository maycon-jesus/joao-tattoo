<template>
    <a class="card text-center" target="_blank" :href="$props.href">
        <h3 class="font-extrabold uppercase text-xl">{{ $props.title }}</h3>
        <p class="text mt-4">{{ $props.description }}</p>
    </a>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "Alo aaaaaaaaa"
    },
    href: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.card {
    border: 1px solid white;
    aspect-ratio: 4/5;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;

    p {
        color: #ffffffa6;
    }
}
</style>