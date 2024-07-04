<template>
  <div>
    <HomeSectionIntro />
    <HomeSectionServices />
    <SectionAnimatedPhotos />
    <HomeSectionAboutMe />
    <!-- <HomeSectionMovingHeaders /> -->
    <HomeSectionInstagram />
  </div>
</template>

<script setup lang="ts">
import SectionAnimatedPhotos from "~/components/home/SectionAnimatedPhotos.vue";
umTrackEvent('evento-teste', { propsTeste: true })
</script>