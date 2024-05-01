<template>
    <header :class="{
        mobile: isMobile,
        tablet: isTablet,
        desktop: isDesktop,
        fixed: navOpen
    }">
        <NuxtImg class="logo" v-if="isMobile" :src="headerConfig.logo.mobile.url"
            :height="headerConfig.logo.mobile.height" :width="headerConfig.logo.mobile.width" preload
            @load="loading.endLoading('image:header:logo')"></NuxtImg>
        <NuxtImg class="logo" v-else :src="headerConfig.logo.desktop.url" :height="headerConfig.logo.desktop.height"
            :width="headerConfig.logo.desktop.width" preload @load="loading.endLoading('image:header:logo')"></NuxtImg>

        <div class="spacer" aria-hidden="true"></div>
        <button class="menu-btn" @click="toggleMenu">
            <Icon name="line-md:menu" v-if="buttonToggleMenuStatus === 0"></Icon>
            <Icon name="line-md:menu-to-close-transition" v-else-if="buttonToggleMenuStatus === 1"></Icon>
            <Icon name="line-md:close-to-menu-alt-transition" v-else></Icon>
            <Icon name="line-md:menu" v-show="false"></Icon>
            <Icon name="line-md:menu-to-close-transition" v-show="false"></Icon>
            <Icon name="line-md:close-to-menu-alt-transition" v-show="false"></Icon>
        </button>
    </header>
    <TemplatesNav @animation:start="btnMenuDisabled = true" @animation:end="btnMenuDisabled = false"
        v-model:open="navOpen" />
</template>

<script setup lang="ts">
import { Icon } from "#components"
import { loadingStore } from "~/store/loading";
const { header: headerConfig } = useAppConfig()

const { breakpoint: currentBreakpoint, matches } = useViewport()
const loading = loadingStore()
loading.startLoading('image:header:logo')

const btnMenuDisabled = ref<boolean>(false)
const navOpen = ref<boolean>(false)
const buttonToggleMenuStatus = ref<0 | 1 | 2>(0)
const isMobile = ref(matches('xs'))
const isTablet = ref(matches('sm', 'md'))
const isDesktop = ref(matches('lg', 'xl', 'xxl'))

watch(currentBreakpoint, (newValue, oldValue) => {
    isMobile.value = matches('xs')
    isTablet.value = matches('sm', 'md')
    isDesktop.value = matches('lg', 'xl', 'xxl')
})

const toggleMenu = () => {
    if (btnMenuDisabled.value) return;
    navOpen.value = !navOpen.value
}

watch(navOpen, (open) => {
    if (open) {
        buttonToggleMenuStatus.value = 1
    } else {
        buttonToggleMenuStatus.value = 2
    }
})

</script>

<style lang="scss" scoped>
header {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 80px;
    padding-left: 25px;
    z-index: 300;
    width: 100%;
    box-sizing: border-box;

    &.fixed {
        position: fixed;
        top: 0px;
        left: 0px;
    }

    .spacer {
        flex: 1;
    }

    .menu-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        float: right;
        justify-self: end;
        height: 100%;
        aspect-ratio: 1/1;
        font-size: 48px;
        background-color: white;
        border: none;
        outline: none;
    }

    .logo {
        height: 100%
    }
}

header.mobile {
    height: 65px;
    padding-left: 16px;
}

header.tablet {
    padding-left: 25px;
}
</style>