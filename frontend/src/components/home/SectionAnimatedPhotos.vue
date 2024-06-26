<template>
  <div class="flex flex-col gap-4" ref="wrapper" :class="{
    tablet: viewport.isTablet,
    mobile: viewport.isMobile
  }">
    <div class="row">
      <div class="scroller flex flex-row flex-nowrap gap-4" ref="scroller1">
        <NuxtImg class="image" :src="image" v-for="image of componentConfig.linha1" :key="image" width="600"></NuxtImg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { viewportStore } from "~/store/viewport";

const wrapper = ref<HTMLElement>()
const scroller1 = ref<HTMLElement>()
const appConfig = useAppConfig()
const componentConfig = appConfig.pages.home.secaoFotosScroll
const viewport = viewportStore()

function litenScroll() {
  if (!wrapper.value) return;
  if (!scroller1.value) return;

  const rect = wrapper.value.getBoundingClientRect()
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
  const viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth)
  console.log('height', viewHeight)

  const imageWidth = viewWidth / 4
  const stepMove = imageWidth / viewHeight
  const moved = Math.abs(rect.top - viewHeight)

  scroller1.value.style.transform = `translateX(${-imageWidth * 2 + stepMove * moved}px)`
}

onNuxtReady(() => {
  window.addEventListener('scroll', litenScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', litenScroll)
})
</script>

<style scoped lang="scss">
.row {
  overflow: hidden;
  width: 100%;
}

.scroller {
  position: relative;
  transition: all .5s ease;
}

.image {
  width: 25vw;
  aspect-ratio: 510/340;
  object-fit: cover;
  filter: brightness(103%) contrast(114%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%);
}

.tablet .image {
  width: 35vw;
}

.mobile .image {
  width: 50vw;
}
</style>