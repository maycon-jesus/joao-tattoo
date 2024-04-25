<template>
  <ModulesThemeProvider>
    <div id="root">
      <NuxtLayout>
        ola mundo
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