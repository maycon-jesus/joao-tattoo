<template>
    <div>
        <HomeSectionIntro />
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>desktop {{ teste }}</div>
        <div>a {{ loaded }}</div>
        <img src="https://i.ibb.co/CHRh1sg/pexels-photo-378570.jpg" alt="" height="100">
    </div>
</template>

<script setup lang="ts">
const loaded = ref(false)
const viewport = useViewport()
const teste = viewport.breakpoint
onNuxtReady(() => {
    const image = new Image()
    image.src = "https://i.ibb.co/CHRh1sg/pexels-photo-378570.jpg"
    image.onload = () => {
        loaded.value = true
    }
})
</script>