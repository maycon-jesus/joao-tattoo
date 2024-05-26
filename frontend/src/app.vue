<template>
  <ModulesThemeProvider>
    <!-- <TemplatesLoadingIndicator /> -->
    <TemplatesLoading />
    <div id="root" v-show="!loading.loading">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </ModulesThemeProvider>
</template>

<script lang="ts" setup>
import { loadingStore } from './store/loading';

const loading = loadingStore()
</script>

<style lang="scss">
#root {
  background-color: var(--theme-background);
  color: var(--theme-background-text);
  min-height: 100vh;
}
</style>