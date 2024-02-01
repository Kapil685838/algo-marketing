import { defineStore } from "pinia";

export const useRootStore = defineStore('root', {
    state: () => ({
        brand: 'Algo Marketing',
        brandLogo: '',
        nav: {
            links: [
                {
                    id: 1,
                    img: '/images/about-icon.svg',
                    to: '/about-us',
                    label: 'About us'
                },
                {
                    id: 2,
                    img: '/images/contact-icon.svg',
                    to: '/contact-us',
                    label: 'Contact us'
                }
            ]
        },
    }),
});