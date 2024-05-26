<template>
    <footer :class="{ tablet: tablet, mobile }">
        <div class="contact">
            <div>
                <NuxtImg class="logo" src="/logos/footer-logo.png" height="80" />
            </div>
            <div class="links-text">
                <a v-for="(social, index) of socialsText" :key="index" :href="social.url" target="_blank" class="link">
                    <Icon :name="social.icon" aria-hidden="true" class="icon"></Icon>
                    <span>{{ social.text }}</span>
                </a>
            </div>
            <div class="links-icon">
                <a v-for="(social, index) of socialsIcon" :key="index" :href="social.url" target="_blank" class="link"
                    :title="social.text" :aria-label="social.text">
                    <Icon :name="social.icon" aria-hidden="true" class="icon"></Icon>
                </a>
            </div>
        </div>
        <!-- Coluna 2 -->
        <div class="column">
            <!-- Linha dos links -->
            <div class="nav-links">
                <a href="/" class="link">{{ texts.links.home }}</a>
                <a href="/" class="link">{{ texts.links.aboutMe }}</a>
                <a href="/" class="link">{{ texts.links.services }}</a>
                <a href="/" class="link">{{ texts.links.portfolio }}</a>
                <a href="/" class="link">{{ texts.links.contact }}</a>
            </div>
            <!-- Linha de sobre -->
            <div class="about-links">
                <div>
                    <span class="before-link-text">Criado por&nbsp;</span>
                    <a class="link" href="https://mayconjesus.dev" target="_blank">Maycon Jesus</a>
                </div>
                <div>
                    <a class="link" href="#">Política de Privacidade</a>
                </div>
                <div>
                    <a class="link" href="#">Termos e Condições</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const { texts, socials } = useAppConfig()
const { breakpoint, isLessThan } = useViewport()

const socialsText = socials.filter(social => social.visibility.footerText)
const socialsIcon = socials.filter(social => social.visibility.footerIcon)
const tablet = ref(isLessThan('md'))
const mobile = ref(isLessThan('sm'))

watch(breakpoint, () => {
    tablet.value = isLessThan('md')
    mobile.value = isLessThan('sm')
})
</script>

<style scoped lang="scss">
footer {
    border-top: 1px solid white;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 2fr;

    .contact {
        padding: 5%;
        display: flex;
        flex-flow: column nowrap;
        gap: 20px;

        .links-text {
            display: flex;
            flex-flow: column nowrap;
            gap: 5px;

            .link {
                .icon {
                    font-size: 170%;
                    margin-right: 5px
                }

                * {
                    vertical-align: middle;
                }
            }
        }

        .links-icon {
            margin-top: 10px;

            .link {
                .icon {
                    font-size: 32px;
                    margin-right: 5px
                }
            }
        }

    }

    .column {
        display: grid;
        grid-template-rows: 1fr auto;
        border-left: 1px solid white;
    }

    .nav-links {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        padding: 5%;
        border-bottom: 1px solid white;
        font-size: 16px;
        font-weight: 600;
        gap: 16px;

        .link {
            text-transform: uppercase;
        }
    }

    .about-links {
        display: flex;
        flex-flow: row wrap;
        padding: 5%;
        line-height: 170%;
        font-size: 11px;

        &>*:not(:last-child)::after {
            content: "\25CF";
            font-size: 12px;
            margin: 10px;
            vertical-align: middle;
        }
    }

    .before-link-text {
        color: #999;
    }

    .link {
        color: white;
        text-decoration: none;
        transition: color .3s;
        text-decoration: none;

        &:hover {
            color: var(--theme-primary);
        }
    }
}

footer.tablet {
    grid-template-columns: 1fr;

    .column {
        border-left: none;
        border-top: 1px solid white;
    }
}

footer.mobile {
    .nav-links {
        font-size: 12px;
    }
}
</style>