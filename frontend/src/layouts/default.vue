<template>
    <div>
        <TemplatesHeader></TemplatesHeader>
        <main>
            <slot></slot>
        </main>
        <TemplatesFooter />
    </div>
</template>

<script setup lang="ts">
import { loadingStore } from '~/store/loading';

const loading = loadingStore()
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