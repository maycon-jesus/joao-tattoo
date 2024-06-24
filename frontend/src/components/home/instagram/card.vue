<template>
    <a class="card" :href="props.href" target="_blank">
        <NuxtImg class="img block" :src="props.src" :alt="props.alt" width="500" />
        <div class="on-hover">
            <p class="text-xs font-bold text-center uppercase">Visualizar no<br><span
                    class="text-xl mt-2 inline-block">Instagram</span><br>
                <Icon name="ph:instagram-logo" size="32" class="mt-1"></Icon>
            </p>
        </div>
    </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
    href: string;
    alt: string;
    src: string;
}>()
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}

.card:hover .on-hover {
    opacity: 1;
    scale: 1;
}

.card:hover .img {
    transform: scale(1.1);
}

.img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center center;
    transition: all 0.3s ease-in-out;
}

.on-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    opacity: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 2px solid white;
}
</style>