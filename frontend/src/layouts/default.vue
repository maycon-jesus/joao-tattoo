<template>
    <div :class="{
        desktop: viewport.isDesktop,
        tablet: viewport.isTablet,
        mobile: viewport.isMobile
    }">
        <TemplatesHeader></TemplatesHeader>
        <main>
            <slot></slot>
        </main>
        <TemplatesFooter />
    </div>
</template>

<script setup lang="ts">
import { viewportStore } from '~/store/viewport';

const viewport = viewportStore()

useHead({
    title: 'João Tattoo',
    meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'João Tattoo' },
        { property: 'og:url', content: 'https://joao-tattoo.vercel.app' },
        { property: 'og:image', content: 'https://joao-tattoo.vercel.app/logos/og-banner.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:description', content: 'Tattoo Geek/BlackWork artist' },
    ]
})
</script>