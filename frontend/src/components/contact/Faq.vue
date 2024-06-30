<template>
    <div class="container mx-auto px-6 box-border" :class="{
        'py-20': !showMobileView,
        'py-10': showMobileView,
    }">
        <h2 class="title text-5xl font-extrabold uppercase text-center">Encontre as <span
                class="primary--text">respostas</span> de
            perguntas
            frequentes</h2>

        <div class="questions mt-6">
            <ContactFaqQuestion />
            <ContactFaqQuestion />
            <ContactFaqQuestion />
            <ContactFaqQuestion />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { viewportStore } from '~/store/viewport';

const viewport = viewportStore()
const showMobileView = computed(() => viewport.isMobile || viewport.isSmallTablet)
</script>

<style lang="scss" scoped>
.container {
    max-width: 1060px;
}

.primary--text {
    color: var(--theme-primary);
}
</style>