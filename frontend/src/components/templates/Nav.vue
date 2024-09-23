<template>
    <nav class="nav-fullscreen" :class="{
        open: menuOpenClass,
        mobile: isMobile,
        tablet: isTablet,
        desktop: isDesktop
    }">
        <div class="menu">
            <div class="menu-link-mask" v-for="link of links" :key="link.text">
                <NuxtLink :to="link.to" class="menu-link" @click="emit('update:open', false)"
                    :ref="(el: any) => setMenuLinkRef(link)(el)">{{
                        link.text }}</NuxtLink>
            </div>
        </div>
        <div class="nav-footer" ref="navFooter">
            <a href="mailto:contato@joaotattoo.ink">contato@joaotattoo.ink</a>
            <span v-show="isDesktop">Tattoo Geek/BlackWork</span>
            <a href="tel:3175289908">(31) 7528-9908</a>
        </div>
        <div ref="background" class="nav-fullscreen-background" aria-hidden="true"></div>
    </nav>
</template>

<script lang="ts" setup>
import { useMotion } from '@vueuse/motion';

const { themes: { default: { menuBackground } } } = useAppConfig()
const { breakpoint: currentBreakpoint, matches, isLessThan } = useViewport()
const isMobile = ref(matches('xs'))
const isTablet = ref(matches('sm', 'md'))
const isDesktop = ref(matches('lg', 'xl', 'xxl'))
const menuOpenClass = ref<boolean>(false)

const props = defineProps({
    open: {
        type: Boolean,
        default: false
    },
    zIndex: {
        type: Number,
        default: 299
    }
})
const propsOpen = ref(props.open)
const emit = defineEmits<{
    (e: 'update:open', open: boolean): void,
    (e: 'animation:end'): void,
    (e: 'animation:start'): void
}>()

watch(() => props.open, (newValue) => {
    propsOpen.value = newValue
})

watch(currentBreakpoint, (newValue, oldValue) => {
    isMobile.value = matches('xs')
    isTablet.value = matches('sm', 'md')
    isDesktop.value = matches('lg', 'xl', 'xxl')
})

type link = {
    ref?: HTMLElement,
    text: string,
    to: any
    motion?: any
}

const links = ref<link[]>([
    {
        text: 'Sobre mim',
        to: {
            name: 'index'
        }
    },
    {
        text: 'Serviços',
        to: {
            name: 'index'
        }
    },
    {
        text: 'Portfólio',
        to: {
            name: 'portfolio'
        }
    },
    {
        text: 'Contato',
        to: {
            name: 'contato'
        }
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

watch(propsOpen, (newValue) => {
    emit('update:open', newValue)
    emit('animation:start')

    // if (btnMenuDisabled.value) return;
    // btnMenuDisabled.value = true
    setTimeout(() => {
        // btnMenuDisabled.value = false
    }, 1000)

    // propsOpen.value = !propsOpen.value
    if (propsOpen.value) {
        menuOpenClass.value = true
        // buttonToggleMenuStatus.value = 1
        setTimeout(() => {
            emit('animation:end')
        }, menuAnimations.open.menuFooterDelay + menuAnimations.open.menuFooterDuration)
    }
    if (!propsOpen.value) {
        // buttonToggleMenuStatus.value = 2
        setTimeout(() => {
            menuOpenClass.value = false
            emit('animation:end')
        }, menuAnimations.close.backgroundDelay + menuAnimations.close.backgroundDuration)
    }

    backgroundAnimation.variant.value = propsOpen.value ? 'open' : 'initial'

    for (const link of links.value) {
        link.motion.variant = propsOpen.value ? 'open' : 'initial'
    }

    navFooterAnimation.variant.value = propsOpen.value ? 'open' : 'initial'
})
</script>

<style lang="scss" scoped>
.nav-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: v-bind(zIndex);
    display: none;

    * {
        z-index: inherit;
    }

    &.open {
        display: block;
    }

    .nav-fullscreen-background {
        background-color: v-bind(menuBackground);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: v-bind(zIndex - 1);
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

        .menu-link-mask {
            overflow: hidden;
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

.nav-fullscreen.tablet {
    .menu-link {
        font-size: 48px;
    }

    .nav-footer {
        padding: 0px 40px 40px 40px;
    }
}

.nav-fullscreen.mobile {
    .menu-link {
        font-size: 32px;
    }
}

.nav-fullscreen.tablet,
.nav-fullscreen.mobile {
    .nav-footer {
        padding: 0px 24px 24px 24px;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 16px;

        * {
            font-size: 15px;
        }
    }
}
</style>