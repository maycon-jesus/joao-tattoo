<template>
    <div :style="styleData">
        <slot name="default"></slot>
    </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const styleData = ref<Record<string,string>>({})

for(const [key,value] of Object.entries(appConfig.themes.default)){
    styleData.value[`--theme-${key}`]=value
}
</script>