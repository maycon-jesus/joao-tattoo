<template>
  <ModulesThemeProvider>
    <!-- <TemplatesLoadingIndicator /> -->
    <TemplatesLoading />
    <div id="root">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </ModulesThemeProvider>
</template>

<style lang="scss">
#root {
  background-color: var(--theme-background);
  color: var(--theme-background-text);
  min-height: 100vh;
}
</style>