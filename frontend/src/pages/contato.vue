<template>
    <div class="after-header page-main">
        <div class="container mx-auto grid grid-cols-2 gap-14 py-20 px-6 box-border">
            <div>
                <h1 class="text-6xl font-extrabold uppercase title">Deseja uma tatuagem?<br /><span
                        class="primary--text">Contate-me</span></h1>
                <p class="mt-6 text-lg background2--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum
                    tristique. Duis cursus, mi quis viverra ornare.</p>
                <div class="pt-10">
                    <NuxtImg src="/contact/contact.jpeg" width="1060" class="image"></NuxtImg>
                </div>
            </div>
            <div>
                <div class="socials-box pa-16 flex gap-6 flex-col">
                    <CustomButtonColored :background-color="social.colors.btnGradient" class="block w-full"
                        :text-color="social.colors.btnText" v-for="social of socials" :href="social.url" target="_blank"
                        :key="social.url">
                        {{ social.socialName }}
                    </CustomButtonColored>
                </div>
            </div>
        </div>
        <HomeSectionInstagram />
    </div>
</template>

<script setup lang="ts">
const config: any = useAppConfig()
const socials = config.socials
    .filter((social: any) => social.visibility.contactPage)
    .sort((a: any, b: any) => a.order.contactPage - b.order.contactPage);
</script>

<style lang="scss" scoped>
.container {
    max-width: 1060px
}

.primary--text {
    color: var(--theme-primary)
}

.background2--text {
    color: var(--theme-background2-text)
}

.image {
    aspect-ratio: 16/10;
    object-fit: cover;
    width: 150%;
    filter: saturate(0) brightness(.5);
}

.socials-box {
    border: 1px solid white;
    background-color: var(--theme-background);
    position: relative;
}
</style>