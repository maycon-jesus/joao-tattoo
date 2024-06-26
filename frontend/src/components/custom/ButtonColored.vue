<template>
    <component :is="props.href ? 'a' : 'button'" class="btn inline-block py-4 px-8 text-base font-semibold uppercase"
        :href="props.href" :target="props.target" :style="{
            'background': backgroundColor,
            color: textColor
        }">
        <span>
            <slot name="default"></slot>
        </span>
    </component>
</template>

<script lang="ts" setup>
const props = defineProps<{
    href?: string,
    target?: "_blank",
    backgroundColor: string,
    textColor: string
}>()

const backgroundColor = computed(() => props.backgroundColor)
const textColor = computed(() => props.textColor)
defineSlots<{
    default: () => any
}>()
</script>

<style lang="scss" scoped>
.btn {
    border: none;
    box-sizing: border-box;
    text-decoration: none;
    text-align: center;
}
</style>