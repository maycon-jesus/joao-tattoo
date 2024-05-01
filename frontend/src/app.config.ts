import { headerConfig } from "~~/config/header";

export default defineAppConfig({
    header: headerConfig,

    themes: {
        default: {
            background: '#0F0F0F',
            menuBackground: '#191919',
            'background-text': '#FCFAFA',
            primary: '#EEC759'
        }
    },

    socials: [
        {
            text: 'contato@joaotattoo.ink',
            icon: 'mage:email',
            url: 'mailto:contato@joaotattoo.ink',
            visibility: {
                footerText: false,
                footerIcon: true
            }
        },
        {
            text: '(31) 97528-9908',
            icon: 'ph:whatsapp-logo-light',
            url: 'https://api.whatsapp.com/send?phone=5531975289908',
            tags: ['home-section-intro-budget'],
            visibility: {
                footerText: true,
                footerIcon: false
            }
        },
        {
            text: '@joaov_tattoo',
            icon: 'ph:instagram-logo-light',
            url: 'https://www.instagram.com/joaov_tattoo',
            visibility: {
                footerText: true,
                footerIcon: false
            }
        },
        {
            text: 'Playlist',
            icon: 'ph:spotify-logo-light',
            url: 'https://open.spotify.com/playlist/79j0UiNNV8fxM89BKHmsmT?si=6ba0e5fe575a4143&nd=1&dlsi=3d74370f4fc14338',
            visibility: {
                footerText: false,
                footerIcon: true
            }
        },
        {
            text: 'Behance',
            icon: 'ph:behance-logo-light',
            url: 'https://behance.net',
            visibility: {
                footerText: false,
                footerIcon: true
            }
        }
    ],

    texts: {
        links: {
            aboutMe: "Sobre mim",
            services: "Serviços",
            portfolio: "Portfólio",
            contact: "Contato",
            home: "Início"
        }
    }
})