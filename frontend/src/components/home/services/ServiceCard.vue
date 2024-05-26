<template>
    <div class="card">
        <Icon v-if="$props.icon" :name="$props.icon" class="text-5xl" />
        <nuxt-icon v-if="$props.customIcon" :name="$props.customIcon" class="text-5xl"></nuxt-icon>
        <h3 class="font-bold text-xl mt-2">{{ $props.title }}</h3>
        <p class="text-base mt-4">{{ $props.description }}</p>
    </div>
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
    icon: {
        type: String,
        required: false
    },
    customIcon: {
        type: String,
        required: false
    }
})
</script>

<style lang="scss" scoped>
.card {
    border: 1px solid white;

    p {
        color: #ffffffa6;
    }
}
</style>