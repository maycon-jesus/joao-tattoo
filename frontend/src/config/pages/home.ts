export default {
    introduction: {
        titleText: '%Especialista% em tattoos Geek & BlackWork',
        descriptionText: '\"É sempre um bom dia para uma nova tatuagem\"',

        buttons: [
            {
                text: 'Solicitar Orçamento',
                linkExternal: '/orcamento',
                color: 'primary'
            },
            {
                text: 'Meus trabalhos',
                linkInternal: {
                    name: 'portfolio'
                },
                color: 'normal'
            }
        ],

        // Deprecated
        imagesTattoos: [
            '/home/slider1.jpg',
            '/home/slider2.jpg',
            '/home/slider3.jpg',
            '/home/slider4.jpg',
            '/home/slider5.jpg',
            '/home/slider6.jpg',
            '/home/slider7.jpg',
            '/home/slider8.jpg',
            '/home/slider9.jpg',
            '/home/slider10.jpg',
            '/home/slider11.jpg',
            '/home/slider12.jpg',
            '/home/slider13.jpg',
            '/home/slider14.jpg',
            '/home/slider15.jpg',
            '/home/slider16.jpg',
            '/home/slider17.jpg',
            '/home/slider18.jpg',
            '/home/slider19.jpg',
        ],
        profileImages: [
            '/home/perfil.jpg',
            '/home/perfil2.jpg',
        ]
    },

    services: [
        {
            icon: 'material-symbols-light:design-services-outline-sharp',
            title: 'Design de Tatuagem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            customIcon: 'tattooing',
            title: 'Tatuagem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            customIcon: 'piercing',
            title: 'Piercing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            customIcon: 'cover-up',
            title: 'Cobertura',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ],

    imagesScroll: [
        '/home/slider1.jpg',
        '/home/slider2.jpg',
        '/home/slider3.jpg',
        '/home/slider4.jpg',
        '/home/slider5.jpg',
        '/home/slider6.jpg'
    ],

    aboutMe: {
        titleText: 'Quem está por trás destas %tatuagens incríveis%?',
        descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
        buttonAboutMeText: 'Sobre mim',
        imagemTop: '/aboutme/top.png',
        imagemBottom: '/aboutme/back.png',
    }
} as {
    introduction: {
        titleText: string,
        descriptionText: string,
        buttons: Array<{
            text: string,
            linkExternal?: string,
            linkInternal?: {
                name: string
            }
            color: 'primary' | 'normal'
        }>,
        imagesTattoos?: string[],
        profileImages?: string[]
    },
    services: Array<{
        icon: string,
        title: string,
        description: string
    }>,
    imagesScroll: string[],
    aboutMe: {
        titleText: string,
        descriptionText: string,
        buttonAboutMeText: string,
        imagemTop: string,
        imagemBottom: string
    }
}