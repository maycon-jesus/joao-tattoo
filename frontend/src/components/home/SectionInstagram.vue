<template>
    <div class="section-wrapper w-full pt-20" :class="{
        desktop: viewport.isDesktop,
        tablet: viewport.isTablet,
        mobile: viewport.isMobile
    }">
        <HomeInstagramCard src="/instagram/1.png" alt="Tatuagem"
            href="https://www.instagram.com/p/C8e6aXNxEQ6/?img_index=1" />

        <HomeInstagramCard src="/instagram/2.png" alt="Tatuagem"
            href="https://www.instagram.com/p/C8KU9Ymx9R5/?img_index=1" />

        <HomeInstagramCard src="/instagram/3.png" alt="Tatuagem"
            href="https://www.instagram.com/p/C8Ck5FSR30L/?img_index=1" />

        <HomeInstagramCard src="/instagram/4.png" alt="Tatuagem" href="https://www.instagram.com/p/C747uTtvn-0/" />

        <HomeInstagramCard src="/instagram/5.png" alt="Tatuagem"
            href="https://www.instagram.com/p/C7PE8MexB6Y/?img_index=1" />

        <HomeInstagramCard src="/instagram/6.png" alt="Tatuagem" href="https://www.instagram.com/p/C50wr1QLzwY/" />
    </div>
</template>

<script lang="ts" setup>
import { viewportStore } from '~/store/viewport';
const viewport = viewportStore()
</script>

<style lang="scss" scoped>
.section-wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    &.mobile,
    &.tablet {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
}
</style>