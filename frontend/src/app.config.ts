import { config } from "~~/config/config";
import { headerConfig } from "~~/config/header";

export default defineAppConfig<any>({
    header: headerConfig,

    ...config,

    themes: {
        default: {
            background: '#0F0F0F',
            menuBackground: '#191919',
            'background-text': '#FCFAFA',
            'background2-text': 'rgba(255, 255, 255, 0.6509803922)',
            primary: '#EEC759'
        }
    },

    socials: [
        {
            text: 'Conselheiro Lafaiete - MG',
            socialName: 'Endereço',
            icon: 'map-marker-alt',
            url: 'https://maps.app.goo.gl/32fgb1o2kokmC57h6',
            visibility: {
                contactPageSquare: true
            },
            order: {
                contactPageSquare: 1
            }
        },
        {
            text: 'contato@joaotattoo.ink',
            socialName: 'Email',
            icon: 'mage:email',
            url: 'mailto:contato@joaotattoo.ink',
            visibility: {
                footerText: false,
                footerIcon: true,
                contactPage: true,
                contactPageSquare: true
            },
            colors: {
                btnGradient: 'linear-gradient(to right, #485563, #29323c)',
                btnText: '#ffffff'
            },
            order: {
                contactPage: 3,
                contactPageSquare: 4
            }
        },
        {
            text: '(31) 97528-9908',
            socialName: 'Whatsapp',
            icon: 'ph:whatsapp-logo-light',
            url: 'https://api.whatsapp.com/send?phone=5531975289908',
            tags: ['home-section-intro-budget'],
            visibility: {
                footerText: true,
                footerIcon: false,
                contactPage: true,
                contactPageSquare: true
            },
            colors: {
                btnGradient: 'linear-gradient(90deg, hsla(145, 84%, 73%, 1) 0%, hsla(150, 61%, 48%, 1) 100%)',
                btnText: '#242424'
            },
            order: {
                contactPage: 1,
                contactPageSquare: 2
            }
        },
        {
            text: '@joaov_tattoo',
            socialName: 'Instagram',
            icon: 'ph:instagram-logo-light',
            url: 'https://www.instagram.com/joaov_tattoo',
            visibility: {
                footerText: true,
                footerIcon: false,
                contactPage: true,
                contactPageSquare: true
            },
            colors: {
                btnGradient: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
                btnText: '#ffffff'
            },
            order: {
                contactPage: 2,
                contactPageSquare: 3
            }
        },
        {
            text: 'Playlist',
            socialName: 'Spotify',
            icon: 'ph:spotify-logo-light',
            url: 'https://open.spotify.com/playlist/79j0UiNNV8fxM89BKHmsmT?si=6ba0e5fe575a4143&nd=1&dlsi=3d74370f4fc14338',
            visibility: {
                footerText: false,
                footerIcon: true,
                contactPage: false,
            }
        },
        {
            text: 'Behance',
            socialName: 'Behance',
            icon: 'ph:behance-logo-light',
            url: 'https://behance.net',
            visibility: {
                footerText: false,
                footerIcon: true,
                contactPage: false
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