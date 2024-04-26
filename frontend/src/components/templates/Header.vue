<template>
    <header>
        <NuxtImg class="logo" src="/logos/header-logo.jpg"></NuxtImg>
        <div class="spacer" aria-hidden="true"></div>
        <button class="menu-btn" @click="toggleMenu">
            <Icon name="line-md:menu" v-if="buttonToggleMenuStatus === 0"></Icon>
            <Icon name="line-md:menu-to-close-transition" v-else-if="buttonToggleMenuStatus === 1"></Icon>
            <Icon name="line-md:close-to-menu-alt-transition" v-else></Icon>
        </button>
    </header>
    <nav class="nav-fullscreen" :class="{ open: menuOpenClass }">
        <div class="menu">
            <div class="menu-link-mask" v-for="link of links" :key="link.text"><a href="/" class="menu-link"
                    :ref="(el: any) => setMenuLinkRef(link)(el)">{{ link.text }}</a></div>
        </div>
        <div class="nav-footer" ref="navFooter">
            <a href="mailto:contato@joaotattoo.ink">contato@joaotattoo.ink</a>
            <span>Tattoo Geek/BlackWork</span>
            <a href="tel:3175289908">(31) 7528-9908</a>
        </div>
        <div ref="background" class="nav-fullscreen-background" aria-hidden="true"></div>
    </nav>
</template>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion"
const menuOpen = ref<boolean>(false)
const menuOpenClass = ref<boolean>(false)
const btnMenuDisabled = ref<boolean>(false)
const buttonToggleMenuStatus = ref<0 | 1 | 2>(0)

type link = {
    ref?: HTMLElement,
    text: string,
    motion?: any
}

const links = ref<link[]>([
    {
        text: 'Sobre mim'
    },
    {
        text: 'Serviços'
    },
    {
        text: 'Portfólio'
    },
    {
        text: 'Contato'
    }
])

const menuAnimations = {
    open: {
        backgroundDelay: 0,
        backgroundDuration: 800,
        menuLinksDuration: 400,
        menuLinksDelay: 400 / links.value.length,
        menuFooterDuration: 200,
        menuFooterDelay: 500
    },
    close: {
        backgroundDelay: 500,
        backgroundDuration: 500,
        menuLinksDuration: 300,
        menuLinksDelay: 200 / links.value.length,
        menuFooterDuration: 200,
        menuFooterDelay: 200
    }
}

const background = ref<HTMLElement>()
const backgroundAnimation = useMotion(background, {
    initial: {
        height: '0%',
        transition: {
            duration: menuAnimations.close.backgroundDuration,
            type: 'keyframes',
            ease: [0.25, 1, 0.5, 1],
            delay: menuAnimations.close.backgroundDelay
        },
    },
    open: {
        height: '100%',
        transition: {
            duration: menuAnimations.open.backgroundDuration,
            type: 'keyframes',
            ease: [0.25, 1, 0.5, 1],
            delay: menuAnimations.open.backgroundDelay
        }
    },
})

const navFooter = ref<HTMLElement>()
const navFooterAnimation = useMotion(navFooter, {
    initial: {
        opacity: 0,
        transition: {
            duration: menuAnimations.close.menuFooterDuration,
            type: 'keyframes',
            ease: 'linear',
            delay: menuAnimations.close.menuFooterDelay
        },
    },
    open: {
        opacity: 1,
        transition: {
            duration: menuAnimations.open.menuFooterDuration,
            type: 'keyframes',
            ease: 'linear',
            delay: menuAnimations.open.menuFooterDelay
        },
    },
})

const toggleMenu = () => {
    if (btnMenuDisabled.value) return;
    btnMenuDisabled.value = true
    setTimeout(() => {
        btnMenuDisabled.value = false
    }, 1000)

    menuOpen.value = !menuOpen.value
    if (menuOpen.value) {
        menuOpenClass.value = true
        buttonToggleMenuStatus.value = 1
    }
    if (!menuOpen.value) {
        buttonToggleMenuStatus.value = 2
        setTimeout(() => {
            menuOpenClass.value = false
        }, menuAnimations.close.backgroundDelay + menuAnimations.close.backgroundDuration)
    }

    backgroundAnimation.variant.value = menuOpen.value ? 'open' : 'initial'

    for (const link of links.value) {
        link.motion.variant = menuOpen.value ? 'open' : 'initial'
    }

    navFooterAnimation.variant.value = menuOpen.value ? 'open' : 'initial'
}

const setMenuLinkRef = (link: link) => {
    return (el: HTMLElement) => {
        const findLink = links.value.find(linkF => linkF.text === link.text)
        if (!findLink || findLink.motion) return;
        const index = links.value.findIndex(linkF => linkF.text === link.text)
        findLink.ref = el
        findLink.motion = useMotion(el, {
            initial: {
                translateY: '100%',
                transition: {
                    duration: menuAnimations.close.menuLinksDuration,
                    type: 'keyframes',
                    ease: [0.25, 1, 0.5, 1],
                    delay: menuAnimations.open.menuLinksDelay * (index + 1)
                }
            },
            open: {
                translateY: '0%',
                transition: {
                    duration: menuAnimations.open.menuLinksDuration,
                    type: 'keyframes',
                    ease: [0.25, 1, 0.5, 1],
                    delay: menuAnimations.open.menuLinksDelay * (index + 1)
                }
            }
        })
    }
}

</script>

<style lang="scss" scoped>
header {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 70px;
    padding-left: 50px;
    z-index: 300;

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
        height: 50px
    }
}

.nav-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 299;
    display: none;

    * {
        z-index: inherit;
    }

    &.open {
        display: block;
    }

    .nav-fullscreen-background {
        background-color: black;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 298;
    }

    &.open {
        display: block;
    }

    .menu {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    }

    .nav-footer {
        position: fixed;
        bottom: 0px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 16px;
        padding: 0px 60px 60px 60px;
        box-sizing: border-box;

        * {
            color: hsla(0, 0%, 100%, 0.65);
            font-weight: 600;
            font-size: 17px;
            text-decoration: none;
            font-family: "Barlow", sans-serif;

            &:nth-child(1) {
                text-align: start
            }

            &:nth-child(2) {
                text-align: center
            }

            &:nth-child(3) {
                text-align: end
            }
        }
    }
}

.menu-link {
    font-family: Raleway, sans-serif;
    font-weight: 800;
    text-decoration: none;
    font-size: 80px;
    color: inherit;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    padding: 16px 0px;
    transition: color .3s;

    &:hover {
        color: var(--theme-primary);
    }
}

.menu-link-mask {
    overflow: hidden;
}
</style>