<template>
    <div>
        <TemplatesHeader></TemplatesHeader>
        <main>
            <slot></slot>
        </main>

    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'João Tattoo',
    meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'João Tattoo' },
        { property: 'og:url', content: 'https://joao-tattoo.vercel.app' },
        { property: 'og:image', content: 'https://joao-tattoo.vercel.app/logos/logo-branca' },
        { property: 'og:image:width', content: '2000' },
        { property: 'og:image:height', content: '2000' },
        { property: 'og:description', content: 'Tattoo Geek/BlackWork artist' },
    ]
})
</script>